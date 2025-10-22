import type { ReactNode } from "react";

import Dimmed from "../components/Dimmed";

import "./withModalStyle.css";

import useModal from "../hooks/useModal";

const DEFAULT_MODAL_OPTIONS = {
  existDimmed: true,
  animation: false,
  position: "center",
} as const;

const withModalStyle = (ModalComponent: any) => (props: any) => {
  const modalOptions = { ...DEFAULT_MODAL_OPTIONS, ...props };

  return (
    <>
      {modalOptions.existDimmed && <Dimmed />}
      <div className="with-modal-style">
        <ModalComponent />
      </div>
    </>
  );
};

export default withModalStyle;
