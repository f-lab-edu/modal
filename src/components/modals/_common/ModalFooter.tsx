import type { ReactNode } from "react";

import "@/components/modals/_common/ModalFooter.css";

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return <div className="modal-footer">{children}</div>;
};

const Button = ({
  theme = "confirm",
  text,
  onButtonClick,
}: {
  theme?: "confirm" | "cancel";
  text: string;
  onButtonClick: () => void;
}) => {
  return (
    <button className={`modal-button theme-${theme}`} onClick={onButtonClick}>
      {text}
    </button>
  );
};

ModalFooter.Button = Button;

export default ModalFooter;
