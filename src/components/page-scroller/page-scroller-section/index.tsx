import { ReactNode } from "react";
import { Container } from "./styles";

interface PageScrollerSection {
  children: ReactNode;
}

const PageScrollerSection = ({ children }: PageScrollerSection) => {
  return <Container>{children}</Container>;
};

export default PageScrollerSection;
