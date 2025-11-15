import { useRef, type ReactNode } from "react";
import { Transition } from "react-transition-group";

import { type TModalName } from "../../../constants/modals";

import useModal from "../../../hooks/useModal";
import useToggle from "../../../hooks/useToggle";

import Dimmed from "./Dimmed";

import "./ModalOverlay.css";

const DURATION = 300;

const transitionStyles = {
  entering: { top: "0%", transform: "translateY(0%)" },
  entered: { top: "0%", transform: "translateY(0%)" },
  exiting: { top: "50%", transform: "translateY(50%)" },
  exited: { top: "50%", transform: "translateY(50%)" },
} as any;

const defaultStyle = {
  transition: `top ${DURATION}ms cubic-bezier(0.78,-0.06, 0.14, 1.04), transform ${DURATION}ms cubic-bezier(0.78,-0.06, 0.14, 1.04)`,
  top: "50%",
  transform: "translateY(50%)",
};

const ModalOverlay = ({
  name,
  isLatestModal,
  renderComponent,
}: {
  name: TModalName;
  isLatestModal: boolean;
  renderComponent: (closeModal: () => void) => ReactNode;
}) => {
  const { value: isOpen, setFalse } = useToggle(true);
  const modalDispatch = useModal("dispatch");
  const nodeRef = useRef(null);

  const closeModal = () => {
    setFalse();

    setTimeout(() => {
      modalDispatch.closeModal(name);
    }, DURATION);
  };

  return (
    <Transition in={isOpen} nodeRef={nodeRef} timeout={DURATION} appear>
      {(state) => {
        return (
          <div className="modal-overlay-container">
            {isLatestModal && <Dimmed closeModal={closeModal} />}
            <div
              className="modal-overlay"
              ref={nodeRef}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {renderComponent(closeModal)}
            </div>
          </div>
        );
      }}
    </Transition>
  );
};

export default ModalOverlay;
