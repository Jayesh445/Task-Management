import React from "react";
import "../styles/Dashboard.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <MainContent />
    </div>
  );
};

export default Dashboard;
