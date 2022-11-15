import React, { useCallback, useEffect } from 'react';
import { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { useIntl } from 'react-intl';
import { Container, DatePickerStyled, Label } from './styles';

import { ptBR } from 'date-fns/locale';
registerLocale('ptBR', ptBR)

type InputDate = ReactDatePickerProps & {
  onChange: (newDate: Date) => void;
  idLabel: string;
}

const InputDate: React.FC<InputDate> = ({ idLabel, selected, onChange, dateFormat = "P", ...props }) => {
  const { formatMessage } = useIntl();
  console.log("QUEM")

  const handleChange = useCallback((newDate: Date) => {
    console.log("QUEM")
    onChange(newDate)
  }, [selected])

  return (
    <Container>
      {idLabel &&
        <Label>{formatMessage({ id: idLabel })}</Label>
      }
      <DatePickerStyled
        onChange={handleChange}
        selected={selected && new Date(selected)}
        minDate={new Date()}
        locale={"ptBR"}
        dateFormat={dateFormat}
        {...props}
      />
    </Container>
  )
}

export default InputDate;