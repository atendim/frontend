import { CSS } from "@stitches/react";
import React, { useCallback, useRef, useState } from "react";
import { CurrencyInputProps, formatValue } from "react-currency-input-field";
import { useIntl } from "react-intl";
import { Container, Input, Label } from "./styles";
import {
  formatStringValueToNumber,
  formatValueToCurrency,
} from "../../base/Utils";

type InputCurrencyType = React.PropsWithoutRef<CurrencyInputProps> & {
  idLabel?: string;
  cssContainer?: CSS;
  handleChange: (value: number) => void;
  name: string;
  value?: number;
};

const InputCurrency: React.FC<InputCurrencyType> = ({
  name,
  value,
  disabled,
  handleChange,
  children,
  ...props
}) => {
  const { formatMessage } = useIntl();
  const [strValue, setStrValue] = useState(formatValueToCurrency(value));

  const handleArrowKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && ["ArrowUp", "ArrowDown"].includes(e.key)) {
      let numValue = formatStringValueToNumber(strValue);
      let newValue = String(
        e.key === "ArrowDown" ? numValue - 1 : numValue + 1
      );
      updateValues(newValue);
    }
    props.onKeyDown && props.onKeyDown(e);
  };

  const handleValueChange = (event) => {
    updateValues(event.target.value);
  };

  const updateValues = (newValue: string) => {
    setStrValue(formatValueToCurrency(newValue));
    handleChange(formatStringValueToNumber(newValue));
  };

  const onBlur = (e) => {
    let decimal = strValue.split(",")[1];
    setStrValue((prev) =>
      decimal ? (decimal.length === 1 ? prev + "0" : prev) : prev + ",00"
    );

    props.onBlur && props.onBlur(e);
  };

  return (
    <Container css={props.cssContainer}>
      {props.idLabel && <Label>{formatMessage({ id: props.idLabel })}</Label>}
      <Input
        type="text"
        value={strValue}
        onChange={handleValueChange}
        onBlur={onBlur}
        onKeyDown={handleArrowKeys}
      />
      {children}
    </Container>
  );
};

export default InputCurrency;
