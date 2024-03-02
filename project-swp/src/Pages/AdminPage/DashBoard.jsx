import React from "react";
import "./DashBoard.css";
import Sidebar from "./components/Sidebar";
import MainDash from "./components/MainDash";
import RightSide from "./components/RigtSide";

export default function DashBoard() {
  return (
    <div classname="dashboard">
      <Sidebar />
      <MainDash />
      <RightSide />
    </div>
  );
}
