import { useContext } from "react";
import { cloneDeep } from "lodash";

import { ModalDispatchContext, ModalDataContext } from "../components/Context";

const DISPATCH = "dispatch" as const;
const MODALS = "modals" as const;

const useModal = (type: typeof DISPATCH | typeof MODALS) => {
  const modalDispatch = useContext(ModalDispatchContext);
  const modalData = useContext(ModalDataContext);

  if (type === "dispatch" && modalDispatch) {
    return cloneDeep(modalDispatch);
  }

  if (type === "modals" && modalData) {
    return cloneDeep(modalData);
  }

  console.error(`there is no ${type} context`);
};

export default useModal;
