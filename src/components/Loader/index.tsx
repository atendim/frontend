import { Logo, Modal, Portal } from './styles';

import Icon from "../../assets/icon.png" 

export const Loader = () => {
  return (
    <Portal>
      <Modal>
        <Logo src={Icon} />
      </Modal>
    </Portal>
  )
}