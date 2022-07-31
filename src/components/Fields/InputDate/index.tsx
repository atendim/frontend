import React from 'react';
import { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { useIntl } from 'react-intl';
import { Container, DatePickerStyled, Label } from './styles';

import { ptBR } from 'date-fns/locale';
registerLocale('ptBR', ptBR)

type InputDate = ReactDatePickerProps & {
  onChange: (newDate: Date) => void;
  idLabel: string;
}

const InputDate: React.FC<InputDate> = ({ idLabel, dateFormat = "P", ...props }) => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      {idLabel &&
        <Label>{formatMessage({ id: idLabel })}</Label>
      }
      <DatePickerStyled
        minDate={new Date()}
        locale={"ptBR"}
        dateFormat={dateFormat}
        {...props}
      />
    </Container>
  )
}

export default InputDate;