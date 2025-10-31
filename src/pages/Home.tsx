import useModal from "../hooks/useModal";

import ConfirmModal from "../components/modals/ConfirmModal/ConfirmModal";

const Home = () => {
  const { openModal } = useModal("dispatch");

  const handleClick = () => {
    openModal(<ConfirmModal></ConfirmModal>);
  };

  return (
    <div style={{ overflow: "scroll", height: "100%" }}>
      <button onClick={handleClick}> button</button>
      <div style={{ height: "300px", border: "1px solid blue" }}>gggg</div>
      <div style={{ height: "300px", border: "1px solid blue" }}>gggg</div>
      <div style={{ height: "300px", border: "1px solid blue" }}>gggg</div>
      <div style={{ height: "300px", border: "1px solid blue" }}>gggg</div>
      <div style={{ height: "300px", border: "1px solid blue" }}>gggg</div>
      <div style={{ height: "300px", border: "1px solid blue" }}>gggg</div>
    </div>
  );
};

export default Home;
