import { CSS } from '@stitches/react';
import React from 'react';
import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field';
import { useIntl } from 'react-intl';
import { Container, CurrencyInputStyled, Label } from './styles';


type InputCurrencyType = React.PropsWithoutRef<CurrencyInputProps>  & {
  idLabel?: string;
  cssContainer?: CSS
}

const InputCurrency: React.FC<InputCurrencyType> = ({ idLabel, cssContainer, children, ...props }) => {
  const { locale, formatMessage } = useIntl()
  
  return (
    <Container css={cssContainer}>
      {idLabel &&
        <Label>{formatMessage({ id: idLabel })}</Label>
      }
      <CurrencyInputStyled
        intlConfig={{ locale, currency: 'BRL' }}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onValueChange={props.onValueChange}
      />
      {children}
    </Container>
  );
}

export default InputCurrency;