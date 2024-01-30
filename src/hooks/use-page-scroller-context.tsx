import { PageScrollerContext } from "@/context/page-scroller.context";
import { useContext } from "react";

export const usePageScrollerContext = () => {
  const pageScrollerContext = useContext(PageScrollerContext);
  if (pageScrollerContext === undefined) {
    throw new Error(
      "usePageScrollerContext must be inside a PageScrollerProvider"
    );
  }
  return pageScrollerContext;
};
