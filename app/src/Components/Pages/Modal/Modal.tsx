/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import stylesModalWr from './Modal.module.css';
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    closeHandler: () => void;
    children: React.ReactNode
}

const ModalInner: FC<ModalProps> =({ children, closeHandler }) => {
    useEffect(() => {
      const closeModalByEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeHandler();
        }
      };
      document.addEventListener('keydown', closeModalByEscape);
  
      return () => {
        document.removeEventListener('keydown', closeModalByEscape);
      };
    }, []);
  
    return <div className={stylesModalWr.modalstyle}>{children}</div>;
  }

  const Modal: React.FC<ModalProps> = ({ isOpen, closeHandler, children }) => {
    if (!isOpen) return null;

  const closeModalByClickWrapper: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      closeHandler();
    }
  };

    return createPortal(
      <div className={stylesModalWr.modalWr} onClick={closeModalByClickWrapper}>
        <ModalInner isOpen={isOpen} closeHandler={closeHandler}>
          {children}
        </ModalInner>
      </div>,
      document.getElementById('modal-root') as HTMLElement
    );
  };

export default Modal