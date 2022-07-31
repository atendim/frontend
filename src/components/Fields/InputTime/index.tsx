import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import InputDate from '../InputDate';


type InputTime = ReactDatePickerProps & {
  onChange: (newDate: Date) => void;
  idLabel: string;
}

const InputTime: React.FC<InputTime> = ({ ...props }) => {
  return (
    <InputDate
      showTimeSelect
      showTimeSelectOnly
      dateFormat="HH:mm"
      {...props}
    />
  )
}

export default InputTime;