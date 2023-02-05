import { useIntl } from "react-intl";
import { CSS } from "@stitches/react";

import { Input, Container, Label } from "./styles";

type InputPhoneProps = Omit<React.ComponentPropsWithRef<typeof Input>, "defaultCountry"> & {
  idLabel?: string;
  value: any;
  name: string;
  onChange?: (e: any) => void;
  idPlaceholder?: string;
  disabled?: boolean;
  cssContainer?: CSS;
}

export const InputPhone: React.FC<InputPhoneProps> = ({ idLabel, idPlaceholder, ...props  }) => {
  const { formatMessage } = useIntl();

  return (
    <Container css={props.cssContainer}>
    {idLabel && (
      <Label htmlFor={props.name}>
        {formatMessage({ id: idLabel, defaultMessage: idLabel })}
      </Label>
    )}
    <Input
      defaultCountry="BR"
      placeholder={idPlaceholder && formatMessage({ id: idPlaceholder, defaultMessage: idPlaceholder })}
      aria-invalid={!!props.disabled}
      aria-label={idLabel && formatMessage({ id: idLabel })}
      {...props}
    />
    {props.children}
  </Container>
  )
}