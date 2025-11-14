import { useEffect } from "react";

import useModal from "../../../hooks/useModal";
import useToggle from "../../../hooks/useToggle";

import GeneralModalLayout from "../_layout/GeneralModalLayout";
import ModalHeader from "../_common/ModalHeader";
import ModalFooter from "../_common/ModalFooter";
import ModalContent from "../_common/ModalContent";

const ConfirmModal = () => {
  const { closeModal } = useModal("dispatch");
  const { value: isOpen, setFalse: setClose } = useToggle(true);

  useEffect(() => {
    let timerId = 0;

    if (!isOpen) {
      timerId = setTimeout(() => {
        closeModal("confirmModal");
      }, 400);
    }

    return () => {
      if (!isOpen && timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isOpen]);

  return (
    <GeneralModalLayout isOpen={isOpen}>
      <ModalHeader theme="orange">
        <ModalHeader.CloseButton onCloseClick={setClose} />
      </ModalHeader>

      <ModalContent>
        <div>여기엔 Modal 내용이 들어간다~</div>
      </ModalContent>

      <ModalFooter>
        <ModalFooter.Button
          theme="confirm"
          text="확 인"
          onButtonClick={setClose}
        />
        <ModalFooter.Button
          theme="cancel"
          text="취 소"
          onButtonClick={setClose}
        />
      </ModalFooter>
    </GeneralModalLayout>
  );
};

export default ConfirmModal;
