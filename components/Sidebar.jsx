import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import InboxIcon from "@mui/icons-material/Inbox";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddTaskComponent from "./AddTaskComponent";

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation(); // Hook to get the current route

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <div className="sidebar-rel">
        <div className="user-profile">
          <img src="j-logo.png" alt="User Avatar" className="user-avatar" />
          <div>
            <h2 className="user-name">Jayesh Gupta</h2>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                to="/tasks"
                className={`nav-link ${isActive("/tasks") ? "active" : ""}`}
              >
                <SpaceDashboardIcon className="icon" /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/task-list"
                className={`nav-link ${isActive("/task-list") ? "active" : ""}`}
              >
                <WorkHistoryIcon className="icon" /> Task List
              </Link>
            </li>
            <li>
              <Link
                to="/tracking"
                className={`nav-link ${isActive("/tracking") ? "active" : ""}`}
              >
                <InsightsIcon className="icon" /> Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/inbox"
                className={`nav-link ${isActive("/inbox") ? "active" : ""}`}
              >
                <InboxIcon className="icon" /> Inbox
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={`nav-link ${isActive("/settings") ? "active" : ""}`}
              >
                <SettingsIcon className="icon" /> Setting
              </Link>
            </li>
          </ul>
        </nav>
        <div className="add-task-section">
          <button className="add-task-button" onClick={() => setModalOpen(true)}>
            <AddCircleOutlineOutlinedIcon />
            <p>ADD NEW TASK</p>
          </button>
        </div>
        <div className="team-leader-profile">
          <img src="j-logo.png" alt="User Avatar" className="user-avatar" />
          <div>
            <h2 className="user-name">Jayesh Gupta</h2>
            <p className="user-role">Personal Task</p>
          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      <AddTaskComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default Sidebar;
