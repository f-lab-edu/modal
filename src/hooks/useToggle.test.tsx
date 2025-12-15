import { act, renderHook } from "@testing-library/react";

import useToggle from "@/hooks/useToggle";

describe("useToggle", () => {
  it("toggle과 setTrue/setFalse로 상태를 토글한다", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.value).toBe(false);

    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);

    act(() => result.current.setFalse());
    expect(result.current.value).toBe(false);

    act(() => result.current.setTrue());
    expect(result.current.value).toBe(true);
  });

  it("초깃값을 반영한다", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.value).toBe(true);

    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
  });
});
