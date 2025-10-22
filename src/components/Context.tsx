import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useCallback,
  useMemo,
} from "react";

export const ModalDispatchContext = createContext<any>({
  open: () => {},
  close: () => {},
});
export const ModalDataContext = createContext<any>([]); // Modal Data

export const ModalProvider = ({ children }: any) => {
  const [modals, setModals] = useState<any[]>([]); // todo: useState 말고 그냥 data 자체를 변경하면 리렌더 안되나?

  const openModal = useCallback(
    (modal: any) => {
      setModals((modals) => [...modals, modal]);
    },
    [setModals]
  );

  const closeModal = useCallback(
    (modalName: string) => {
      setModals((modals) => modals.filter((modal) => modal.name !== modalName));
    },
    [setModals]
  );

  const values = useMemo(
    () => ({ openModal, closeModal }),
    [openModal, closeModal]
  );

  //   const values = { openModal, closeModal };

  return (
    <ModalDataContext.Provider value={modals}>
      <ModalDispatchContext.Provider value={values}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalDataContext.Provider>
  );
};
