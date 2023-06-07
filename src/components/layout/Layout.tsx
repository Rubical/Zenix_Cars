"use client";

import { ReactNode } from "react";
import Header from "src/components/layout/header/Header";
import Footer from "src/components/layout/footer/Footer";
import { useCar } from "src/hooks/useCar";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme } = useCar();

  return (
    <>
      <Header theme={theme} />
      {children}
      <Footer theme={theme} />
    </>
  );
}
