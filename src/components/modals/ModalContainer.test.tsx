import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ModalProvider } from "@/Context/ModalContext";
import { MODAL_NAME } from "@/constants/modals";

import ModalContainer from "@/components/modals/ModalContainer";
import useModal from "@/hooks/useModal";

const TestModal = ({
  closeModal,
  name,
}: {
  closeModal: () => void;
  name: string;
}) => (
  <div role="dialog">
    <p>modal: {name}</p>
    <button onClick={closeModal}>close modal</button>
  </div>
);

const ModalLauncher = () => {
  const { openModal } = useModal("dispatch");

  const handleOpen = () =>
    openModal({
      Component: TestModal,
      name: MODAL_NAME.CONFIRM_MODAL,
    });

  return <button onClick={handleOpen}>open modal</button>;
};

describe("ModalContainer", () => {
  let modalRoot: HTMLDivElement;

  beforeEach(() => {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    document.body.removeChild(modalRoot);
  });

  it("모달 열기/닫기에 따라 portal 루트 표시를 토글한다", async () => {
    const user = userEvent.setup();

    render(
      <ModalProvider>
        <>
          <ModalLauncher />
          <ModalContainer />
        </>
      </ModalProvider>
    );

    await waitFor(() => expect(modalRoot.style.display).toBe("none"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByText("open modal"));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(modalRoot.style.display).toBe("block");

    await user.click(screen.getByText("close modal"));

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
    await waitFor(() => expect(modalRoot.style.display).toBe("none"));
  });
});
