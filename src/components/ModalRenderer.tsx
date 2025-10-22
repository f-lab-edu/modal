import { useLayoutEffect, Fragment } from "react";
import { createPortal } from "react-dom";

import useModal from "../hooks/useModal";

import "./ModalRenderer.css";

const ModalRenderer = () => {
  const modals = useModal("modals");

  useLayoutEffect(() => {
    const modalRoot = document.getElementById("modal-root");

    if (modals.length && modalRoot) {
      modalRoot.style.display = "block";
    }

    return () => {
      if (modalRoot) {
        modalRoot.style.display = "none";
      }
    };
  }, [modals]);

  if (modals.length === 0) return null;

  return (
    <>
      {createPortal(
        <div className="modal-renderer">
          {modals.map((modal: any, idx: number) => (
            <Fragment key={idx}>{modal.component}</Fragment>
          ))}
        </div>,

        document.getElementById("modal-root") as Element
      )}
    </>
  );
};

export default ModalRenderer;
