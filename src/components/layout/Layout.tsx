import React, { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
