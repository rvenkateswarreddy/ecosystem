import React from "react";
import Menubar from "./Menubar";
import { Outlet } from "react-router-dom";

const Sharecomp = () => {
  return (
    <>
      <Menubar />
      <Outlet />
    </>
  );
};

export default Sharecomp;
