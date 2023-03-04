import React from "react";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Body />
      <Right />
    </div>
  );
}

export default Dashboard;
