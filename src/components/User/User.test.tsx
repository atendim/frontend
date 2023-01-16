import { describe, expect, test } from "vitest";
import { render } from "../../__tests__/utils/test-utils";
import User from ".";
import "happy-dom"

const setup = () => {
  const renderResult = render(<User />)
  return {
    ...renderResult,
    userImage: renderResult.getByAltText(/user image/i) as HTMLImageElement
  }
}

describe("User Tests", () => {
  test("Displays default image", () => {
    const { userImage } = setup();

    expect(userImage.src).toContain("defaultUserImage.jpg")
  })

  test("Displays user name", async () => {
    const { userMock: { name }, findByText } = setup();

    const userName = await findByText(name)
    expect(userName).toBeDefined()
  })
})