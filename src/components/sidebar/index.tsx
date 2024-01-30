import { usePageScrollerContext } from "@/hooks/use-page-scroller-context";
import { Container, SectionNavigatorItem, SectionNavigator } from "./styles";

interface SidebarProps {
  sections: number[];
}

const Sidebar = ({ sections }: SidebarProps) => {
  const { currentIndex, setCurrentIndex } = usePageScrollerContext();

  return (
    <Container>
      <SectionNavigator>
        {sections.map((section, index) => {
          const isActive = index === currentIndex;

          return (
            <SectionNavigatorItem
              key={`${section}-${Math.random() * 3}`}
              $isactive={isActive}
              onClick={() => setCurrentIndex(section)}
              animate={isActive && { rotate: [50, 0] }}
            />
          );
        })}
      </SectionNavigator>
    </Container>
  );
};

export default Sidebar;
