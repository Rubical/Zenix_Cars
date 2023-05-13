import React, { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useCarShowcase } from "../../hooks/useCarShowcase";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { logo } = useCarShowcase();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header logo={logo} />
      {children}
      <Footer logo={logo} />
    </div>
  );
};

export default Layout;
