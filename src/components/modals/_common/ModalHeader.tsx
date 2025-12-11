import type { ReactNode, MouseEvent } from "react";

import icon_close from "@/assets/icon_close.png";

import "@/components/modals/_common/ModalHeader.css";

const ModalHeader = ({
  theme = "default",
  children,
}: {
  theme?: "default" | "orange";
  children: ReactNode;
}) => {
  return <div className={`modal-header theme-${theme}`}>{children}</div>;
};

const CloseButton = ({
  onCloseClick,
}: {
  onCloseClick: (e: MouseEvent) => void;
}) => {
  return (
    <button
      aria-label="close button"
      className="close-button"
      onClick={onCloseClick}
    >
      <img src={icon_close} className="close-button-img" />
    </button>
  );
};

ModalHeader.CloseButton = CloseButton;

export default ModalHeader;
