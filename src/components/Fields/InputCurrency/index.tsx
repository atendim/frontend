import { CSS } from '@stitches/react';
import React, { useCallback } from 'react';
import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field';
import { useIntl } from 'react-intl';
import { Container, CurrencyInputStyled, Label } from './styles';


type InputCurrencyType = React.PropsWithoutRef<CurrencyInputProps> & {
  idLabel?: string;
  cssContainer?: CSS
}

const InputCurrency: React.FC<InputCurrencyType> = (
  { name, value, disabled, onValueChange, children, ...props }
) => {
  const { locale, formatMessage } = useIntl();

  const handleArrowKeys = useCallback((e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && onValueChange) {
      if ("ArrowUp" === e.key) {
        console.log(Number(value))
        onValueChange((Number(value) + 1).toString(), name);
        
      } else if ("ArrowDown" === e.key) {
        onValueChange((Number(value) - 1).toString(), name)
      }
    }
  }, [value])

  return (
    <Container css={props.cssContainer}>
      {props.idLabel &&
        <Label>{formatMessage({ id: props.idLabel })}</Label>
      }
      <CurrencyInputStyled
        intlConfig={{ locale, currency: 'BRL' }}
        name={name}
        value={value}
        disabled={disabled}
        onValueChange={onValueChange}
        onKeyDown={handleArrowKeys}
      />
      {children}
    </Container>
  );
}

export default InputCurrency;