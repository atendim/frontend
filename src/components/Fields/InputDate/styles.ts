import DatePicker from "react-datepicker"
import { css, styled } from "../../../theme/stitches.config"
import { ContainerBase, FieldBase, LabelBase } from "../Base";

import "react-datepicker/dist/react-datepicker.css";


export const Container = styled('div', ContainerBase, {
  '.react-datepicker': {
    
    border: '1px solid $colors$gray2',
    boxShadow: '$elevation',
    color: '$textColor',
    borderRadius: '$md',
  },

  '.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before': {
    backgroundColor: '$background',
    border: '1px solid $colors$gray2',
    boxShadow: '$elevation',
  },

  '.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before': {
    backgroundColor: '$background',
    border: '1px solid $colors$gray5',
    boxShadow: '$elevation',
  },

  '.react-datepicker__day': {
    color: '$textColor',

    '&:hover': {
      backgroundColor: '$gray3',
    }
  },

  '.react-datepicker__day--disabled': {
    opacity: .5,

    '&:hover': {
      backgroundColor: '$background',
    }
  },

  '.react-datepicker__day--selected, .react-datepicker__day--keyboard-selected': {
    backgroundColor: '$primary !important',
    color: '$background',
  },

  '.react-datepicker__header': {
    background: '$background',
    border: 'none'
  }
})

export const Label = styled('label', LabelBase);

export const DatePickerStyled = styled(DatePicker, FieldBase, {

})
