import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
