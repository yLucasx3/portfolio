import { useSidebarContext } from "@/hooks/use-sidebar-contenxt";
import ToggleButton from "../toggle-button";
import { Container, NavigationContainer } from "./styles";

const Header = () => {
  const { isOpen } = useSidebarContext();

  const animationVariants = {
    closed: { width: 0, height: 0, opacity: 0 },
    opened: {
      width: isOpen ? "22.223em" : 0,
      height: isOpen ? "100%" : 0,
      opacity: isOpen ? 1 : 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <Container>
      <span>Luska</span>

      <NavigationContainer
        initial="closed"
        animate="opened"
        variants={animationVariants}
      >
        <ul>
          <li>
            <a>My Work</a>
          </li>
          <li>
            <a>My Summary</a>
          </li>
        </ul>
      </NavigationContainer>

      <ToggleButton />
    </Container>
  );
};

export default Header;
