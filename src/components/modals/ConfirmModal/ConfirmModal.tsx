import type { RefObject } from "react";
import { type TModalName } from "@/constants/modals";

import GeneralModalLayout from "@/components/modals/_common/GeneralModalLayout";
import ModalHeader from "@/components/modals/_common/ModalHeader";
import ModalFooter from "@/components/modals/_common/ModalFooter";
import ModalContent from "@/components/modals/_common/ModalContent";

import useKeyboard from "@/hooks/useKeyboard";

const ConfirmModal = ({
  closeModal,
  name,
  ...props
}: {
  closeModal: () => void;
  name: TModalName;
}) => {
  const { keyboardTrapContainerRef } = useKeyboard();

  return (
    <GeneralModalLayout>
      <div ref={keyboardTrapContainerRef as RefObject<HTMLDivElement>}>
        <ModalHeader theme="orange">
          <ModalHeader.CloseButton onCloseClick={closeModal} />
        </ModalHeader>

        <ModalContent>
          <div>여기엔 Modal 내용이 들어간다~</div>
        </ModalContent>

        <ModalFooter>
          <ModalFooter.Button
            theme="confirm"
            text="확 인"
            onButtonClick={closeModal}
          />
          <ModalFooter.Button
            theme="cancel"
            text="취 소"
            onButtonClick={closeModal}
          />
        </ModalFooter>
      </div>
    </GeneralModalLayout>
  );
};

export default ConfirmModal;
