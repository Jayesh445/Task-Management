import React from "react";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import InboxIcon from "@mui/icons-material/Inbox";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Sidebar = () => {
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
            <a href="#" className="nav-link active">
              <SpaceDashboardIcon className="icon" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <InsightsIcon className="icon" /> Tracking
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <WorkHistoryIcon className="icon" /> Work History
            </a>
          </li>
        </ul>
        <div>
          <p className="nav-link-header">Tools</p>
        </div>
        <ul>
          <li>
            <a href="#" className="nav-link">
              <InboxIcon className="icon" /> Inbox
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <SettingsIcon className="icon" /> Setting
            </a>
          </li>
        </ul>
      </nav>
      <div className="add-task-section">
        <button className="add-task-button">
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
    </div>
  );
};

export default Sidebar;
