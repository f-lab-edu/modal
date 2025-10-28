import ModalBase from "./ModalBase";

import "./GeneralModal.css";

interface ModalProps {
  title?: string;
  content?: string;
  button?: any;
}

const Modal = ({ title, content, button }: ModalProps) => {
  return (
    <ModalBase>
      <div className="modal">
        {title && <div className="title">{title}</div>}
        {content && <div className="content">{content}</div>}
        {button.map((item: any, idx: number) => (
          <button key={idx} onClick={item.onClick}>
            {item.text}
          </button>
        ))}
      </div>
    </ModalBase>
  );
};

export default Modal;
