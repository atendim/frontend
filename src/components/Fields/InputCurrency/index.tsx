import { CSS } from '@stitches/react';
import React, { useCallback, useRef } from 'react';
import { CurrencyInputProps, formatValue } from 'react-currency-input-field';
import { useIntl } from 'react-intl';
import { Container, CurrencyInputStyled, Label } from './styles';


type InputCurrencyType = React.PropsWithoutRef<CurrencyInputProps> & {
  idLabel?: string;
  cssContainer?: CSS;
  handleChange: (value: number) => void;
  name: string;
  value?: number;
}

const InputCurrency: React.FC<InputCurrencyType> = (
  { name, value, disabled, handleChange, children, ...props }
) => {
  const { formatMessage } = useIntl();
  const strValue = useRef<string>(value ? Number(value).toFixed(2) : "0,00")

  const handleArrowKeys = useCallback((e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && ["ArrowUp", "ArrowDown"].includes(e.key)) {
      let numValue = refineNumber(strValue.current);

      strValue.current = formatValue({
        value: (e.key === "ArrowDown" ? numValue - 1 : numValue + 1).toString(),
        groupSeparator: '.',
        decimalSeparator: ",",
        decimalScale: 2
      })

      console.log(strValue.current)
      handleChange(refineNumber(strValue.current))
    }
  }, [value, strValue.current]);

  const onChangeValue = useCallback((valueChanged?: string) => {
    if (valueChanged) {
      strValue.current = valueChanged;
      handleChange(refineNumber(valueChanged))
    }
  }, [value, strValue.current])

  const refineNumber = (value: string) => {
    return Number(value.replace(",", "."));
  }

  return (
    <Container css={props.cssContainer}>
      {props.idLabel &&
        <Label>{formatMessage({ id: props.idLabel })}</Label>
      }
      <CurrencyInputStyled
        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
        name={name}
        value={strValue.current}
        disabled={disabled}
        onValueChange={onChangeValue}
        onKeyDown={handleArrowKeys}
        allowNegativeValue={false}
        fixedDecimalLength={2}

      />
      {children}
    </Container>
  );
}

export default InputCurrency;