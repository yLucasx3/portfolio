import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface PageScrollerContextType {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const PageScrollerContext = createContext<PageScrollerContextType | undefined>(
  undefined
);

const PageScrollerProvider = ({ children }: { children: ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <PageScrollerContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </PageScrollerContext.Provider>
  );
};

export { PageScrollerContext, PageScrollerProvider };
