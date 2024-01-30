import { SidebarContext } from "@/context/sidebar.context";
import { useContext } from "react";

export const useSidebarContext = () => {
  const sidebarContext = useContext(SidebarContext);
  if (sidebarContext === undefined) {
    throw new Error("useSidebarContext must be inside a PageScrollerProvider");
  }
  return sidebarContext;
};
