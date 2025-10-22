import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ModalProvider } from "./components/Context.tsx";

import App from "./App.tsx";

import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>
);
