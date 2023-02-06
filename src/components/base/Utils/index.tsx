import { styled } from "../../../theme/stitches.config";

export const Flex = styled('div', { display: 'flex' })

export const formatValueToCurrency = (value?: number|string) => {
  let val = value ? String(value) : "0,00"
console.log(val,  value)
  const newValue = val;
  const strippedValue = newValue.replace(/[^0-9,]/g, "");
  const splitValue = strippedValue.split(",");
  let integerPart = splitValue[0] as string;
  let decimalPart = splitValue[1] as string;
  if (decimalPart) {
    decimalPart = decimalPart.slice(0, 2);
  }
  let formattedValue = "";
  if (integerPart) {
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    if (integerPart[0] === '0') {
      integerPart = integerPart.replace(/0+/g, "0")
    }
    formattedValue = integerPart;

    if (splitValue.length > 1) {
      formattedValue += ",";
    }
  }
  if (decimalPart) {
    formattedValue += decimalPart;
  }

  return formattedValue
}

export const formatStringValueToNumber = (val: string) => {
  return Number(val.replace(".", "").replace(",", "."))
}
