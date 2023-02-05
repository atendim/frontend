import { Logo, Modal, Portal } from './styles';

import Icon from "../../assets/icon.png" 

export const Loader = () => {
  return (
    <Portal aria-label='loader'>
      <Modal>
        <Logo src={Icon} />
      </Modal>
    </Portal>
  )
}