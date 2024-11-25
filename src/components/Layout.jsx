// src/components/Layout.js
import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MavlinFarmsHeader from "./MavlinFarms/MavlinFarmsHeader";
import MavlinFlooringHeader from "./MavlinFlooring/MavlinFlooringHeader";
import MavlinFarmsFooter from "./MavlinFarms/MavlinFarmsFooter";
import MavlinFlooringFooter from "./MavlinFlooring/MavlinFlooringFooter";
import SnowlandHeader from "./SnowlandImmigration/SnowlandHeader";
import SnowlandFooter from "./SnowlandImmigration/SnowlandFooter";

const Layout = () => {
  const location = useLocation();

  let headerComponent;
  let footerComponent;

  // header
  if (location.pathname.startsWith("/mavlin-farms")) {
    headerComponent = <MavlinFarmsHeader />;
  } else if (location.pathname.startsWith("/mavlin-flooring")) {
    headerComponent = <MavlinFlooringHeader />;
  } else if (location.pathname.startsWith("/snowlandimmigration")) {
    headerComponent = <SnowlandHeader />;
  } else {
    headerComponent = <Header />;
  }

  // footer
  if (location.pathname.startsWith("/mavlin-farms")) {
    footerComponent = <MavlinFarmsFooter />;
  } else if (location.pathname.startsWith("/mavlin-flooring")) {
    footerComponent = <MavlinFlooringFooter />;
  } else if (location.pathname.startsWith("/snowlandimmigration")) {
    footerComponent = <SnowlandFooter />;
  } else {
    footerComponent = <Footer />;
  }

  return (
    <>
      {headerComponent}
      <main className="min-h-screen flex flex-col">
        <Outlet />
      </main>
      {footerComponent}
    </>
  );
};

export default Layout;