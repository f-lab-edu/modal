import type { ReactNode } from "react";

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

const CloseButton = ({ onCloseClick }: { onCloseClick: () => void }) => {
  return (
    <img
      src={icon_close}
      alt="modal close button"
      className="close-button"
      onClick={onCloseClick}
    />
  );
};

ModalHeader.CloseButton = CloseButton;

export default ModalHeader;
