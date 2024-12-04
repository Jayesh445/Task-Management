import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import TaskList from "../components/TaskList";

const App = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" replace />} />
          <Route path="/tasks" element={<Dashboard />} />
          <Route path="/task-list" element={<TaskList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
