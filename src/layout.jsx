import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./components/header/header";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
