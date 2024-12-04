import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, Button, Modal, TextField } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import InboxIcon from "@mui/icons-material/Inbox";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {
  addTask,
  TaskStatus,
} from "../src/features/tasksManagement/taskManagerSlice"
import { nanoid } from "@reduxjs/toolkit";

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title && description && deadLine) {
      const newTask = {
        id:nanoid(),
        title:title,
        description:description,
        taskAddedTime: new Date().toISOString(),
        deadLine: new Date(deadLine).toISOString(),
        status: TaskStatus.PENDING,
      };
      console.log(newTask);
      
      dispatch(addTask(newTask));
      setTitle("");
      setDescription("");
      setDeadLine("");
      setModalOpen(false);
    }
  };

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
          <button
            className="add-task-button"
            onClick={() => setModalOpen(true)}
          >
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
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="add-task-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Add New Task
          </Typography>
          <TextField
            label="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={3}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Deadline"
            type="date"
            value={deadLine}
            onChange={(e) => setDeadLine(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTask}
            fullWidth
          >
            Add Task
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Sidebar;
