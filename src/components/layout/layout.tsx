import { ReactNode } from "react";
import Header from "src/components/layout/header/Header";
import Footer from "src/components/layout/footer/Footer";
import { useCarShowcase } from "src/hooks/useCarShowcase";

export default function RootLayout({ children }: { children: ReactNode }) {
  const { theme } = useCarShowcase();

  return (
    <>
      <Header theme={theme} />
      {children}
      <Footer theme={theme} />
    </>
  );
}
