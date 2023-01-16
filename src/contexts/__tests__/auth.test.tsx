import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { AuthContextData, AuthProvider, useAuth } from "../auth";
import { buildUserTest } from "../../__tests__/utils/buildUserTest";
import { fireEvent, renderHook, waitFor } from "../../__tests__/utils/test-utils";
import { act } from "react-dom/test-utils";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { server } from "../../mocks/server";


describe("useAuth test", () => {
  const userMock = buildUserTest()

  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())
  
  afterAll(() => server.close())

  test("Gives an default user", () => {
    const { result } = renderHook(() => useAuth())

    expect(result.current.user).toEqual(userMock);
  });

  test("Sign out user", async () => {
    const { result } = renderHook(() => useAuth())
    
    expect(result.current.user).toBeDefined()

    act(() => {
      result.current.signOut()
    });

    await waitFor(() => expect(result.current.user).toBe(null))
  })

  test("Sign in user", async () => {
    const { result, rerender } = renderHook(() => useAuth())

    act(() => {
      result.current.signOut()
    });

    await waitFor(() => expect(result.current.user).toBe(null))

    act(() => {
      result.current.signIn(userMock)
    });

    rerender()
    
    await waitFor(() => expect(result.current.user).toEqual(userMock))
  })
});
