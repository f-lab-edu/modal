import type { ReactNode } from "react";

import "./GeneralModalLayout.css";

/**
 * GeneralModalLayout
 *
 * Modal의 공통 Layout을 정의한다(크기, 위치, 배경색, radius)
 */
const GeneralModalLayout = ({
  size = "s",
  children,
}: {
  size?: "s" | "m" | "l";
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
    <div className="general-modal-layout">
      <div style={sizePreset} className="modal-frame">
        {children}
      </div>
    </div>
  );
};

export default GeneralModalLayout;
