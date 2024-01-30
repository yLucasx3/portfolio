import { ReactNode } from "react";
import { PageScrollerProvider } from "./context/page-scroller.context";
import { SidebarProvider } from "./context/sidebar.context";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <PageScrollerProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </PageScrollerProvider>
  );
};

export default Providers;
