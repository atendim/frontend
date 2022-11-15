import React, { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import { Flex } from "../../components/base/Utils";
import Checkbox from "../../components/Checkbox";
import { CustomerSelect } from "../../components/CustomerSelect";
import DialogDelete from "../../components/DialogDelete";
import InputCurrency from "../../components/Fields/InputCurrency";
import InputDate from "../../components/Fields/InputDate";
import { InputText } from "../../components/Fields/InputText";
import InputTextArea from "../../components/Fields/InputTextArea";
import InputTime from "../../components/Fields/InputTime";
import { ToolBarForm } from "../../components/ToolBarForm";
import { useToast } from "../../contexts/toast";
import { Schedule } from "../../models/Schedule";
import {
  deleteSchedule,
  getSchedule,
  saveOrUpdateSchedule
} from "../../services/ScheduleService";

import { Container, DateWrapper } from "./styles";

const ScheduleForm: React.FC = () => {
  const { formatMessage } = useIntl();
  const { showError, showSuccess } = useToast();
  const navigate = useNavigate();
  const { idSchedule } = useParams();
  const [schedule, setSchudule] = useState<Schedule>(new Schedule());
  const [allowEdit, setAllowEdit] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [invalidDesc, setInvalidDesc] = useState(false);

  useEffect(() => {
    if (idSchedule) {
      (async () => {
        try {
          const response = await getSchedule(idSchedule);
          setSchudule(response.data);
        } catch (error: any) {
          showError(error.message);
        }
      })();
    } else {
      setAllowEdit(true);
    }
  }, []);

  const handleSave = async (e?: any) => {
    e?.preventDefault();
    
    if (schedule.description) {
      try {
        const response = await saveOrUpdateSchedule(schedule);
        if (response.status === 200) {
          showSuccess(formatMessage({id: "messages.successfullySaved"}));
          navigate("/", { replace: true });
        }
      } catch (error: any) {
        showError(error.data?.message || formatMessage({id: "messages.errorSavingRegister"}));
      }
    } else {
      setInvalidDesc(true)
    }
  };

  const handleDelete = async () => {
    if (schedule?.id) {
      const response = await deleteSchedule(schedule.id);

      if (response.status === 200) {
        showSuccess("Registrado deletado com sucesso!");
        navigate("/", { replace: true });
      }
    }
  };

  const handleChange = useCallback(
    (event: any) => {
      if (schedule) {
        setSchudule((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
      }
      if (invalidDesc) setInvalidDesc(false)
    },
    [schedule]
  );

  const onChange = (field: keyof Schedule, value: any) => {
    setSchudule((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Container>
        <ToolBarForm
          allowDelete={!!schedule?.id}
          allowEdit={allowEdit}
          onEdit={() => setAllowEdit(true)}
          onSave={handleSave}
          onDelete={() => setShowDialog(true)}
        />
        {schedule && (
          <>
            <CustomerSelect
              name="customer"
              onChange={(value) => onChange("customerId", value)}
              value={schedule.customerId}
              disabled={!allowEdit}
            />
            <InputText
              name="description"
              value={schedule.description}
              idLabel="label.description"
              disabled={!allowEdit}
              onChange={handleChange}
              invalid={invalidDesc}
            />
            <DateWrapper>
              <InputDate
                name="appointment"
                selected={schedule.appointment}
                idLabel="label.date"
                disabled={!allowEdit}
                onChange={(newDate: Date) => onChange("appointment", newDate)}
              />
              <InputTime
                name="appointment"
                selected={schedule.appointment}
                idLabel="label.time"
                disabled={!allowEdit}
                onChange={(newDate: Date) => onChange("appointment", newDate)}
              />
            </DateWrapper>
            <InputCurrency
              name="price"
              value={schedule.price}
              idLabel="label.price"
              disabled={!allowEdit}
              handleChange={(value) => onChange("price", value)}
            />
            <Checkbox
              idLabel="label.finishedAppointment"
              checked={schedule.finished}
              onCheck={(checked) => onChange("finished", checked)}
              disabled={!allowEdit}
            />
            <InputTextArea
              name="observation"
              value={schedule.observation}
              idLabel="label.observation"
              disabled={!allowEdit}
              onChange={handleChange}
            />
            <Flex />
          </>
        )}
      </Container>
      <DialogDelete
        open={showDialog}
        onHide={() => setShowDialog(false)}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ScheduleForm;
