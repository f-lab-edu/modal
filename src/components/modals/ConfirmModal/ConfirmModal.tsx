import { type TModalName } from "@/constants/modals";

import GeneralModalLayout from "@/components/modals/_common/GeneralModalLayout";
import ModalHeader from "@/components/modals/_common/ModalHeader";
import ModalFooter from "@/components/modals/_common/ModalFooter";
import ModalContent from "@/components/modals/_common/ModalContent";

const ConfirmModal = ({
  closeModal,
  name,
  ...props
}: {
  closeModal: () => void;
  name: TModalName;
}) => {
  return (
    <GeneralModalLayout>
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
    </GeneralModalLayout>
  );
};

export default ConfirmModal;
