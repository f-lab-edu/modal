import Dimmed from "./Dimmed";
import "./ModalBase.css";

const ModalBase = ({ children }: any) => {
  return (
    <>
      <Dimmed />
      <div className="modal-base">{children}</div>
    </>
  );
};

export default ModalBase;
