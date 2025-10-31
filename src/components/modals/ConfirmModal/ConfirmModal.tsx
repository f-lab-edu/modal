import GeneralModalLayout from "../_layout/GeneralModalLayout";
import ModalHeader from "../_common/ModalHeader";
import ModalFooter from "../_common/ModalFooter";
import ModalContent from "../_common/ModalContent";
// TODO : 하나의 모듈에서 가져올 수 있도록 변경 필요

const ConfirmModal = () => {
  return (
    <GeneralModalLayout>
      <ModalHeader theme="orange">
        <ModalHeader.CloseButton onCloseClick={() => {}} />
      </ModalHeader>

      <ModalContent>
        <div>여기엔 Modal 내용이 들어간다~</div>
      </ModalContent>

      <ModalFooter>
        <ModalFooter.Button
          theme="confirm"
          text="확 인"
          onButtonClick={() => {}}
        />
        <ModalFooter.Button
          theme="cancel"
          text="취 소"
          onButtonClick={() => {}}
        />
      </ModalFooter>
    </GeneralModalLayout>
  );
};

export default ConfirmModal;
