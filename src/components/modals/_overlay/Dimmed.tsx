import "@/components/modals/_overlay/Dimmed.css";

const Dimmed = ({ closeModal }: { closeModal: () => void }) => {
  return <div className="dimmed" onClick={closeModal}></div>;
};

export default Dimmed;
