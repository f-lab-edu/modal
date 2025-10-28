import useModal from "../hooks/useModal";

import Modal from "../components/GeneralModal";

const Home = () => {
  const { openModal } = useModal("dispatch");

  const handleClick = () => {
    openModal(
      <Modal
        title={"hi there"}
        content={"sjsjsjsjsjsjsj hihihihihihi kkkkk ggg 예에~~~"}
        button={[
          {
            text: "확 인",
            onClick: () => {
              console.log(1111, "확인");
            },
          },
          {
            text: "취 소",
            onClick: () => {
              console.log(2222222, "취소");
            },
          },
        ]}
      />
    );
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
