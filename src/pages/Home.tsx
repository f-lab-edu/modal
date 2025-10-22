import useModal from "../hooks/useModal";

import Modal from "../components/Modal";

const Home = () => {
  const { openModal } = useModal("dispatch");

  // TODO : 여기 리렌더링 왜 되냐 -> context 에서 함수객체를 계속 만들어서

  const handleClick = () => {
    openModal({
      component: <Modal />,
    });
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
