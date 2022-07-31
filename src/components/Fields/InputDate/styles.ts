import DatePicker from "react-datepicker"
import { css, styled } from "../../../theme/stitches.config"
import { ContainerBase, FieldBase, LabelBase } from "../Base";

import "react-datepicker/dist/react-datepicker.css";


export const Container = styled('div', ContainerBase, {
  '.react-datepicker': {
    border: '1px solid $colors$gray2',
    boxShadow: '$elevation',
    color: '$textColor',
    borderRadius: '$md'
  },

  '.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before': {
    backgroundColor: '$background',
    border: '1px solid $colors$gray2',
    boxShadow: '$elevation',
  },

  '.react-datepicker-popper[data-placement^=bottom]': {
    paddingTop: 0
  },

  '.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before': {
    backgroundColor: '$background',
    border: '1px solid $colors$gray5',
    boxShadow: '$elevation',
  },

  '.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after': {
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
  },

  '.react-datepicker__current-month': {
    marginBottom: '$2'
  },

  '.react-datepicker__time-container': {
    width: 150,
  },

  '.react-datepicker__time': {
    background: '$background',
  },

  '.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item': {
    height: 'fit-content',
    padding: '$2',

    '&:hover': {
      background: '$gray3',
    }
  },

  '.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected': {
    background: '$primary',

    '&:hover': {
      background: '$primary',
    }
  },

  '.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box': {
    width: '100%',
  },
})

export const Label = styled('label', LabelBase);

export const DatePickerStyled = styled(DatePicker, FieldBase, {

})
