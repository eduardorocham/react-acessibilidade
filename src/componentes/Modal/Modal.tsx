import { FocusEvent, useCallback, useEffect, useRef } from "react";
import "./Modal.css";
import ModalCabecalho from "./ModalCabecalho";
import ModalConteudo from "./ModalConteudo";

interface ModalProps extends React.HTMLProps<HTMLDialogElement> {
  ariaLabel: string;
  estaAberto: boolean;
  fecharModal: () => void;
}

const Modal = ({ ariaLabel, estaAberto, fecharModal, ...rest }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const escutadorTecla = useCallback(
    (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        fecharModal();
      }
    },
    [fecharModal]
  );

  const capturarFoco = useCallback((evento: FocusEvent) => {
    if (!modalRef.current?.contains(evento.target as Node)) {
      modalRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (estaAberto) {
      document.addEventListener("keydown", escutadorTecla);
      document.addEventListener("focusin", capturarFoco);

      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", escutadorTecla);
      document.removeEventListener("focusin", capturarFoco);
    };
  }, [estaAberto, capturarFoco, escutadorTecla]);

  return (
    <>
      <div className="modal__overlay" onClick={fecharModal} />
      <dialog
        className="modal__container"
        aria-label={ariaLabel}
        open={estaAberto}
        onClose={fecharModal}
        {...rest}
        ref={modalRef}
      >
        <ModalCabecalho aoFechar={fecharModal} />
        <ModalConteudo aoFechar={fecharModal} />
      </dialog>
    </>
  );
};

export default Modal;
