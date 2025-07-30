import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import './ModalsOverlay.scss';

type ModalsOverlayProps = {
  children?: ReactNode;
}

const ModalsOverlay: FC<ModalsOverlayProps> = ({ children }) => {
  return createPortal(
    <div className="modals-overlay">
      {children}
    </div>,
    document.getElementById('modals')!
  )
}

export default ModalsOverlay;