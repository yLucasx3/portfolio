import { useSidebarContext } from "@/hooks/use-sidebar-contenxt";
import { Button, Line } from "./styles";

const ToggleButton = () => {
  const { isOpen, setIsOpen } = useSidebarContext();

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const variantsA = {
    opened: {
      rotate: 45,
      width: "90%",
    },
    closed: {
      rotate: 0,
      width: "100%",
    },
    transtion: { duration: 0.3 },
  };

  const variantsB = {
    opened: {
      rotate: -45,
      width: "90%",
      marginTop: 0,
    },
    closed: {
      rotate: 0,
      width: "65%",
      marginTop: 32,
    },
    transtion: { duration: 0.3 },
  };

  return (
    <Button onClick={toggleButton}>
      <Line
        animate={isOpen ? variantsA.opened : variantsA.closed}
        transition={variantsA.transtion}
      />
      <Line
        initial={false}
        animate={isOpen ? variantsB.opened : variantsB.closed}
        transition={variantsB.transtion}
      />
    </Button>
  );
};

export default ToggleButton;
