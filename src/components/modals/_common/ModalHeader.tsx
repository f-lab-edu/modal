import type { ReactNode, MouseEvent } from "react";

import icon_close from "@/assets/icon_close.png";

import "./ModalHeader.css";

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
    <button aria-label="닫기" className="close-button" onClick={onCloseClick}>
      <img src={icon_close} />
    </button>
  );
};

ModalHeader.CloseButton = CloseButton;

export default ModalHeader;
