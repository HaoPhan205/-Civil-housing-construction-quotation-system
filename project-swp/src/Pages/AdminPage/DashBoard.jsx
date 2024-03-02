import React from "react";
import "./DashBoard.css";
import Sidebar from "./components/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";

export default function DashBoard() {
  return (
    <div classname="dashboard">
      <Sidebar />
      <MainDash />
      <RightSide />
    </div>
  );
}
