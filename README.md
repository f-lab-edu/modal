# Modal

## 프로젝트 개요

**modal 프로젝트는** React Context API와 Portal을 활용한 전역 모달 관리 라이브러리입니다.
접근성(A11y)과 키보드 제어를 지원하며, 명확한 관심사 분리를 통해 유지보수성과 확장성을 확보합니다.


---


## 사용 예시

```
openModal({
      Component: ConfirmModal,
      name: MODAL_NAME.CONFIRM_MODAL,
    });
```


---


## 관심사 분리와 핵심 컴포넌트
### 1. 전역 상태 관리 계층

열려있는 Modal 데이터를 저장하고, Modal 추가와 제거 인터페이스를 제공하는 전역 Context 계층

**핵심 컴포넌트**
- `ModalContext.tsx`


### 2. 전역 모달 렌더링 계층

컴포넌트 최상위에 위치하여 portal을 열고 Modal을 렌더링 하는 계층

**핵심 컴포넌트**
- `ModalContainer.tsx`
- `ModalOverlay.tsx`


### 3. 공통 기능을 정의하는 계층

모달들이 공통적으로 갖는 애니메이션, Dimmed 관리, 모든 모달에게 closeModal 함수를 전달하는 역할을 하는 계층

**핵심 컴포넌트**
- `ModalOverlay.tsx`


### 4. UI 계층

개별 모달 UI 계층

**핵심 컴포넌트**
- `ConfirmModal.tsx`


---


## 구현 포인트

1. Focus Trap 구현(Tab키 순환, 포커스 복원 로직)
2. useKeyboard로 키보드 제어 구현
3. 접근성 준수(`role`, `aria-label` 등)
