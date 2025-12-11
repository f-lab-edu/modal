import { useEffect, useRef } from "react";

const keyMap = {
  Enter: "onEnter",
  Escape: "onEscape",
  " ": "onSpace",
  Tab: "onTab",
  ArrowUp: "onArrowUp",
  ArrowDown: "onArrowDown",
  ArrowLeft: "onArrowLeft",
  ArrowRight: "onArrowRight",
};

const DEFAULT_FOCUSABLE_SELECTORS =
  "button:not([disabled]), " +
  "input:not([disabled]), " +
  "textarea:not([disabled]), " +
  "select:not([disabled]), " +
  "a[href], " +
  '[tabindex]:not([tabindex="-1"])';

const getFocusableElements = (element: HTMLElement) => {
  return Array.from(element.querySelectorAll(DEFAULT_FOCUSABLE_SELECTORS));
};

type KeyboardHandler = (typeof keyMap)[keyof typeof keyMap];

const useKeyboard = () => {
  const keyboardTrapContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const keyboardTrapContainerEl = keyboardTrapContainerRef.current;

    if (!keyboardTrapContainerEl) return;

    // 초기 포커스 기억하기
    const previousActiveElement = document.activeElement as HTMLElement;

    // 포커스 가능한 요소를 탐색하여 첫번째 요소에 포커스한다.
    const focusableEls = getFocusableElements(
      keyboardTrapContainerEl
    ) as HTMLElement[];

    if (focusableEls.length > 0) {
      focusableEls[0].focus();
    }

    const handlePressTabKey = (e: KeyboardEvent) => {
      const focusableEls = getFocusableElements(
        keyboardTrapContainerEl
      ) as HTMLElement[];

      if (focusableEls.length === 0) return;

      if (e.key === "Tab") {
        const currentFocus = document.activeElement as HTMLElement;
        let currentFocusIdx = focusableEls.indexOf(currentFocus);

        if (currentFocusIdx === -1) {
          currentFocusIdx = e.shiftKey ? 0 : focusableEls.length - 1;
        }

        let nextFocusIdx = currentFocusIdx;

        if (e.shiftKey) {
          // Shift+Tab > 이전 요소
          nextFocusIdx =
            currentFocusIdx <= 0
              ? focusableEls.length - 1
              : currentFocusIdx - 1;
        } else {
          // Tab > 다음 요소
          nextFocusIdx =
            currentFocusIdx >= focusableEls.length - 1
              ? 0
              : currentFocusIdx + 1;
        }

        e.preventDefault();
        focusableEls[nextFocusIdx].focus();
      }
    };

    keyboardTrapContainerEl.addEventListener("keydown", handlePressTabKey);

    return () => {
      // 초기 포커스로 되돌아감
      previousActiveElement?.focus();

      keyboardTrapContainerEl.removeEventListener("keydown", handlePressTabKey);
    };
  }, [keyboardTrapContainerRef]);

  const keyPress = (handlers: {
    [key: KeyboardHandler]: (e: KeyboardEvent) => void;
  }) => {
    return (e: KeyboardEvent) => {
      const key = e.key as keyof typeof keyMap;

      let handler = null;

      if (keyMap[key]) {
        handler = handlers[keyMap[key]];
      }

      if (typeof handler === "function") {
        handler(e);
      }
    };
  };

  return { keyboardTrapContainerRef, keyPress };
};

export default useKeyboard;
