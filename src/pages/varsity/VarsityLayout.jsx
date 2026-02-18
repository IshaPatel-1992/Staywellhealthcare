import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";


export default function VarsityLayout() {
  return (
    <>
      <Navbar />
      {/* Push content below fixed navbar */}
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}
