import { useContext } from "react";
import { cloneDeep } from "lodash";

import {
  ModalDispatchContext,
  ModalDataContext,
  type TModalData,
  type TModalDispatch,
} from "../Context/Context";

const DISPATCH = "dispatch";
const MODALS = "modals";

function useModal(type: typeof DISPATCH): TModalDispatch;
function useModal(type: typeof MODALS): TModalData[];
function useModal(type: typeof DISPATCH | typeof MODALS) {
  const modalDispatch = useContext(ModalDispatchContext);
  const modalData = useContext(ModalDataContext);

  if (type === "dispatch" && modalDispatch) {
    return modalDispatch as TModalDispatch;
  }

  if (type === "modals" && modalData) {
    return cloneDeep(modalData) as TModalData[];
  }

  console.error(`there is no ${type} context`);
}

export default useModal;
