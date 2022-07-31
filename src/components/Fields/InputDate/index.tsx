import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Flex } from '../../base/Utils';
import { InputText, TextFieldProps } from '../InputText';
import { registerLocale } from 'react-datepicker';
import { Container, DatePickerStyled, Label } from './styles';

type InputDate = Omit<TextFieldProps, "onChange"> & {
  onChange: (newDate: Date) => void;
}

const InputDate: React.FC<InputDate> = ({ idLabel, name, value, onChange, disabled }) => {
  const { formatMessage } = useIntl();

  const handleChange = useCallback((newDate) => {
    onChange(newDate);
  }, []);

  return (
    <Container>
      {idLabel &&
        <Label>{formatMessage({ id: idLabel })}</Label>
      }
      <DatePickerStyled
        selected={value}
        name={name}
        minDate={new Date()}
        onChange={handleChange}
        locale={"ptBR"}
        dateFormat="P"
        disabled={disabled}
      />
    </Container>
  )
}

export default InputDate;