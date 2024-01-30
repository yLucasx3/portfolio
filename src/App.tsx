import Header from "./components/header";
import Providers from "./providers";
import { PageScroller } from "./components/page-scroller";

function App() {
  return (
    <Providers>
      <Header />
      <PageScroller.Root>
        <PageScroller.Section>section 1</PageScroller.Section>
        <PageScroller.Section>section 2</PageScroller.Section>
        <PageScroller.Section>section 3</PageScroller.Section>
        <PageScroller.Section>section 4</PageScroller.Section>
        <PageScroller.Section>section 5</PageScroller.Section>
        <PageScroller.Section>section 6</PageScroller.Section>
      </PageScroller.Root>
    </Providers>
  );
}

export default App;
