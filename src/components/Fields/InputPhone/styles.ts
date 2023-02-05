import InputPhoneNumber from 'react-phone-number-input/input'

import { styled } from "../../../theme/stitches.config";
import { ContainerBase, FieldBase, LabelBase } from "../Base";

export const Container = styled('div', ContainerBase)
export const Label = styled('label', LabelBase);
export const Input = styled(InputPhoneNumber, FieldBase);