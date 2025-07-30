import { FC, ReactNode } from "react";
import IconClose from '/src/assets/icons/close.svg?react';
import './Modal.scss';

type ModalProps = {
  onClickClose: () => void;
  children?: ReactNode;
  className?: string;
}

const Modal: FC<ModalProps> = ({ onClickClose, children, className }) => {
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className={`modal__content ${className ?? ''}`}>
          {children}
        </div>
        <button className="modal__close" onClick={onClickClose}>
          <IconClose width={24} height={24} aria-hidden={true} />
        </button>
      </div>
    </div>
  )
}

export default Modal;