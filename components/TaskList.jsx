import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import TaskCard from "./TaskCard";
import {
  deleteTask,
  TaskStatus,
  toggleTaskStatus,
} from "../src/features/tasksManagement/taskManagerSlice"; // Assuming you have task status constants
import AddTaskComponent from "./AddTaskComponent"; // Importing the add task modal

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // Default to 'all' tasks
  const [modalOpen, setModalOpen] = useState(false); // For managing modal visibility
  const [editTask, setEditTask] = useState(null); // Store the task to edit
  const dispatch = useDispatch();

  // Helper to determine if a task is overdue
  const isOverdue = (task) => new Date(task.deadLine) < new Date() && task.status !== TaskStatus.COMPLETED;

  // Filtering tasks based on the search and status filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "all"
        ? true
        : filterStatus === "overdue"
        ? isOverdue(task)
        : task.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Open Edit Task modal
  const openEditModal = (task) => {
    setEditTask(task); // Set the task that will be edited
    setModalOpen(true);
  };

  const handleToggleStatus = (taskId) => {
    dispatch(toggleTaskStatus(taskId)); // Dispatch toggle status action
  };

  const handleEdit = (task) => {
    openEditModal(task);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch delete action
  };

  return (
    <div className="tasklist">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 2,
          maxWidth: "60%",
        }}
      >
        <TextField
          label="Search Tasks"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <FormControl sx={{ width: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            label="Status"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="overdue">Overdue</MenuItem>
            <MenuItem value={TaskStatus.PENDING}>Pending</MenuItem>
            <MenuItem value={TaskStatus.IN_PROCESS}>In Process</MenuItem>
            <MenuItem value={TaskStatus.COMPLETED}>Completed</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{maxHeight:620,overflowY:'scroll'}}>
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleStatus={handleToggleStatus}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </Box>

      {/* Add Task Modal */}
      <AddTaskComponent
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        taskToEdit={editTask} // Pass the task to edit (if any)
      />
    </div>
  );
};

export default TaskList;
