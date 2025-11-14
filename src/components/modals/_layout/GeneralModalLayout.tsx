import { type ReactNode, useRef } from "react";
import { Transition } from "react-transition-group";

import "./GeneralModalLayout.css";

const DURATION = 400;

const defaultStyle = {
  transition: `top ${DURATION}ms cubic-bezier(0.78,-0.06, 0.14, 1.04), transform ${DURATION}ms cubic-bezier(0.78,-0.06, 0.14, 1.04)`,
  top: "50%",
  transform: "translateY(50%)",
};

const transitionStyles = {
  entering: { top: "0%", transform: "translateY(0%)" },
  entered: { top: "0%", transform: "translateY(0%)" },
  exiting: { top: "50%", transform: "translateY(50%)" },
  exited: { top: "50%", transform: "translateY(50%)" },
} as any;

/**
 * GeneralModalLayout
 *
 * Modal의 공통 Layout을 정의한다(크기, 위치, 배경색, radius)
 */
const GeneralModalLayout = ({
  isOpen,
  size = "s",
  children,
}: {
  isOpen: boolean;
  size?: "s" | "m" | "l";
  children: ReactNode;
}) => {
  const nodeRef = useRef<any>(null);
  const sizePreset = { width: "400px" };

  switch (size) {
    case "s":
      sizePreset.width = "400px";
      break;

    case "m":
      sizePreset.width = "500px";
      break;

    case "l":
      sizePreset.width = "600px";
      break;
  }

  return (
    <Transition in={isOpen} nodeRef={nodeRef} timeout={DURATION} appear>
      {(state: any) => {
        return (
          <div className={`general-modal-layout`}>
            <div
              ref={nodeRef}
              style={{
                ...sizePreset,
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className={`modal-frame`}
            >
              {children}
            </div>
          </div>
        );
      }}
    </Transition>
  );
};

export default GeneralModalLayout;
