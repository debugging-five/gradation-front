import React from "react";
import { Outlet } from "react-router-dom";
import UpcyclingMain from "./UpcyclingMain";

const UpcyclingMainContainer = () => {
  return (
    <>
      <UpcyclingMain />;
      <Outlet />
    </>
  );
};

export default UpcyclingMainContainer;
