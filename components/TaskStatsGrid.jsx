import React from 'react';
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmpty";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutline";
import { useSelector } from 'react-redux';
import { TaskStatus } from '../src/features/tasksManagement/taskManagerSlice';

const TaskStatsGrid = () => {
  const tasks = useSelector(state => state.tasks)
  const inProcessTasks = tasks.filter(task => task.status === TaskStatus.IN_PROCESS).length
  const completedTasks = tasks.filter(task => task.status === TaskStatus.COMPLETED).length
  const pendingTasks = tasks.filter(task => task.status === TaskStatus.PENDING).length
    return (
      <div className="task-stats-grid">
        <div className="stat-card total-tasks">
          <TaskAltOutlinedIcon className="stat-icon" />
          <div className="stat-text">
            <h4 className="stat-number">{tasks.length}</h4>
            <p className="stat-label">Total Task</p>
          </div>
        </div>
        <div className="stat-card in-progress">
          <HourglassEmptyOutlinedIcon className="stat-icon" />
          <div className="stat-text">
            <h4 className="stat-number">{inProcessTasks}</h4>
            <p className="stat-label">InProgress</p>
          </div>
        </div>
        <div className="stat-card pending">
          <PendingActionsOutlinedIcon className="stat-icon" />
          <div className="stat-text">
            <h4 className="stat-number">{pendingTasks}</h4>
            <p className="stat-label">Pending</p>
          </div>
        </div>
        <div className="stat-card completed">
          <DoneOutlineOutlinedIcon className="stat-icon" />
          <div className="stat-text">
            <h4 className="stat-number">{completedTasks}</h4>
            <p className="stat-label">Completed</p>
          </div>
        </div>
      </div>
    );
  };

export default TaskStatsGrid