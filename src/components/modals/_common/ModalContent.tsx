import type { ReactNode } from "react";

import "./ModalContent.css";

const ModalContent = ({ children }: { children: ReactNode }) => {
  return <div className="modal-content">{children}</div>;
};

export default ModalContent;
