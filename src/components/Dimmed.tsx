import type { ReactNode } from "react";

import "./Dimmed.css";

const Dimmed = ({ children }: { children?: ReactNode }) => {
  return <div className="dimmed">{children}</div>;
};

export default Dimmed;
