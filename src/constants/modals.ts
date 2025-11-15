// TODO: MODAL_NAME 의 기준은? 어떤 내용을 보여주는지 설명하는 목적을 내용에 포함?
// 아니면 모달 컴포넌트 종류? 모달 이름과 id를 결합?

export const MODAL_NAME = {
  CONFIRM_MODAL: "confirmModal",
} as const;

export type TModalName = ValueOf<typeof MODAL_NAME>;
