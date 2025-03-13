import {render, screen} from "@testing-library/react"
import {Quiz} from "@/components/pages/quiz/Quiz";
import {Provider} from 'react-redux';
import {makeStore} from "@/store/store";
import {initialState} from "@/store/quizSlice";
import {FIXTURE_PLUGINS} from "@/__tests__/emblaCarousel/plugins.fixture";
import {mockTestElements} from "@/__tests__/emblaCarousel/mocks";

vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe("quiz tests", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockTestElements(FIXTURE_PLUGINS)
  })

  it("one", async () => {
    render(
      <Provider store={makeStore(initialState)}>
        <Quiz/>
      </Provider>
    )

    expect(await screen.findByTestId('carousel-content')).toBeInTheDocument()
  })
})