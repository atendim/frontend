import { beforeAll, beforeEach, describe, expect, test } from "vitest";
import Auth from "../../pages/Auth";
import { render, screen } from "../utils/test-utils";
import userEvent from "@testing-library/user-event"

describe("Testing Auth Page", () => {
  let emailInput: HTMLElement, 
      passwordInput: HTMLElement, 
      button: HTMLElement;

  beforeEach(() => {
    const {getByLabelText,getByRole, getByText, debug } = render(<Auth />);

    emailInput = getByLabelText("E-mail")
    passwordInput = getByLabelText("Senha")
    button = getByRole('button')
  });

  test("Form test", async () => {
    await userEvent.type(emailInput, 'email@test.com')
    await userEvent.type(passwordInput, 'test123')
    await userEvent.click(button)
    
    expect(emailInput).toHaveAttribute("aria-invalid", "false")
  });
});
