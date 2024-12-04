import React, { useState } from "react";
import "../styles/Dashboard.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <MainContent />
    </div>
  );
};









export default Dashboard;
