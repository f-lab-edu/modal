import { createContext, useState, useCallback, useMemo, type JSX } from "react";

import { type TModalName } from "../constants/modals";

export type TModalData<N = TModalName, P = {}> = {
  Component: React.ComponentType<P & { name: N } & { closeModal: () => void }>;
  name: N;
  props?: P;
};

export type TModalDispatch = {
  openModal: (modalData: TModalData) => void;
  closeModal: (modalName: TModalName) => void;
};

export const ModalDispatchContext = createContext<TModalDispatch>({
  openModal: () => {},
  closeModal: () => {},
});
export const ModalDataContext = createContext<TModalData[]>([]);

export const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [modals, setModals] = useState<TModalData[]>([]);

  const openModal = useCallback(
    (modalData: TModalData) => {
      setModals((modals) => [...modals, modalData]);
    },
    [setModals]
  );

  const closeModal = useCallback(
    (modalName: TModalName) => {
      setModals((modals) => modals.filter((modal) => modal.name !== modalName));
    },
    [setModals]
  );

  const dispatch = useMemo(
    () => ({ openModal, closeModal }),
    [openModal, closeModal]
  );

  return (
    <ModalDataContext.Provider value={modals}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalDataContext.Provider>
  );
};
