import React from 'react';
import { Outlet } from "react-router-dom";
import { NavBar } from './';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
