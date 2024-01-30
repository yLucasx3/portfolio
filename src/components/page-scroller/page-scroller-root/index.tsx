import { Children, ReactNode, WheelEvent } from "react";
import { Container } from "./styles";
import { useDebouncedCallback } from "use-debounce";
import Sidebar from "@/components/sidebar";
import { usePageScrollerContext } from "@/hooks/use-page-scroller-context";

interface PageScrollerRoot {
  children: ReactNode;
}

const PageScrollerRoot = ({ children }: PageScrollerRoot) => {
  const childrens = Children.toArray(children);

  const { currentIndex, setCurrentIndex } = usePageScrollerContext();

  const handleWheel = useDebouncedCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      if (currentIndex > 0 && event.deltaY < 0) {
        setCurrentIndex(currentIndex - 1);
      }

      if (currentIndex < childrens.length - 1 && event.deltaY > 0) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    150
  );

  console.log("re render");

  return (
    <Container onWheel={handleWheel} animate={{ opacity: [0.25, 0.7, 1] }}>
      <Sidebar sections={childrens.map((_, index) => index)} />
      {childrens.at(currentIndex)}
    </Container>
  );
};

export default PageScrollerRoot;
