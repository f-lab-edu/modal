import { useLayoutEffect } from "react";
import { createPortal } from "react-dom";

import useModal from "@/hooks/useModal";

import ModalOverlay from "@/components/modals/_overlay/ModalOverlay";

const ModalContainer = () => {
  const modals = useModal("modals");

  useLayoutEffect(() => {
    const modalRoot = document.getElementById("modal-root");

    if (modals.length && modalRoot) {
      modalRoot.style.display = "block";
    }

    if (modals.length === 0 && modalRoot) {
      modalRoot.style.display = "none";
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
        <>
          {modals.map((modal, idx: number, arr) => {
            const isLatestModal = idx === arr.length - 1;

            return (
              <ModalOverlay
                key={idx}
                name={modal.name}
                isLatestModal={isLatestModal}
                renderComponent={(closeModal) => (
                  <modal.Component
                    closeModal={closeModal}
                    name={modal.name}
                    {...modal.props}
                  />
                )}
              />
            );
          })}
        </>,

        document.getElementById("modal-root") as Element
      )}
    </>
  );
};

export default ModalContainer;
