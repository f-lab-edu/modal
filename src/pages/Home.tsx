import { MODAL_NAME } from "../constants/modals";

import useModal from "../hooks/useModal";

import ConfirmModal from "../components/modals/ConfirmModal/ConfirmModal";

const Home = () => {
  const { openModal } = useModal("dispatch");

  const handleClick = () => {
    openModal({
      Component: ConfirmModal,
      name: MODAL_NAME.CONFIRM_MODAL,
    });
  };

  return (
    <div style={{ overflow: "scroll", height: "100%" }}>
      <button onClick={handleClick}> button</button>
    </div>
  );
};

export default Home;
