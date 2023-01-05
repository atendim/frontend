import { describe, expect, test, vi } from "vitest";
import Navbar from "."
import { render } from "../../__tests__/utils/test-utils"

const setup = () => {
  const renderResult = render(<Navbar />);
  return renderResult;
}

describe("Navbar", () => {
  test("displays signout button ", () => {
    const { container, getByRole, getByTitle } = setup();

    expect(container).toBeDefined();
    expect(getByRole("button")).toBeDefined();
    expect(getByTitle(/Sair/i)).toBeDefined();
  })
})