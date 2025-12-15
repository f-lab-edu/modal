import { type ReactNode, type RefObject } from "react";

import "./GeneralModalLayout.css";

/**
 * GeneralModalLayout
 *
 * Modal의 공통 Layout을 정의한다(크기, 위치, 배경색, radius)
 */
const GeneralModalLayout = ({
  size = "s",
  ref,
  children,
}: {
  size?: "s" | "m" | "l";
  ref?: RefObject<HTMLDivElement>;
  children: ReactNode;
}) => {
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
    <div role="dialog" style={{ ...sizePreset }} ref={ref}>
      {children}
    </div>
  );
};

export default GeneralModalLayout;
