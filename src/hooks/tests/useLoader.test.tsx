import { act, renderHook, screen, waitFor, waitForElementToBeRemoved } from "../../__tests__/utils/test-utils"
import { LoaderContextData } from "../../contexts/loader"
import { useLoader } from "../useLoader"

describe("useLoader test", () => {
  
  test("Should be displayed", async () => {
    const { result } = renderHook<LoaderContextData>(() => useLoader())
    
    act(() => {
      result.current.setLoading(true)
    });
    
    const loader = await screen.findByLabelText('loader')

    expect(loader).toBeInTheDocument();

    act(() => {
      result.current.setLoading(false)
    });
    
    expect(loader).not.toBeInTheDocument()
  })
})