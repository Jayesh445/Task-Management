import React from 'react';
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmpty";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutline";

const TaskStatsGrid = () => {
    return (
      <div className="task-stats-grid">
        <div className="stat-card total-tasks">
          <TaskAltOutlinedIcon className="stat-icon" />
          <div className="stat-text">
            <h4 className="stat-number">1220</h4>
            <p className="stat-label">Total Task</p>
          </div>
        </div>
        <div className="stat-card in-progress">
          <HourglassEmptyOutlinedIcon className="stat-icon" />
          <div className="stat-text">
            <h4 className="stat-number">07</h4>
            <p className="stat-label">InProgress</p>
          </div>
        </div>
        <div className="stat-card pending">
          <PendingActionsOutlinedIcon className="stat-icon" />
          <div className="stat-text">
            <h4 className="stat-number">43</h4>
            <p className="stat-label">Pending</p>
          </div>
        </div>
        <div className="stat-card completed">
          <DoneOutlineOutlinedIcon className="stat-icon" />
          <div className="stat-text">
            <h4 className="stat-number">1550</h4>
            <p className="stat-label">Completed</p>
          </div>
        </div>
      </div>
    );
  };

export default TaskStatsGrid