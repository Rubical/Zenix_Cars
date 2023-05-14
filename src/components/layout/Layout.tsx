import React, { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useCarShowcase } from "../../hooks/useCarShowcase";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { theme } = useCarShowcase();
  return (
    <>
      <Header theme={theme} />
      {children}
      <Footer theme={theme} />
    </>
  );
};

export default Layout;
