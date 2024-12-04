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
} from "../src/features/tasksManagement/taskManagerSlice"; 
import AddTaskComponent from "./AddTaskComponent"; 

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [modalOpen, setModalOpen] = useState(false); 
  const [editTask, setEditTask] = useState(null); 
  const dispatch = useDispatch();

  const isOverdue = (task) => new Date(task.deadLine) < new Date() && task.status !== TaskStatus.COMPLETED;

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

  const openEditModal = (task) => {
    setEditTask(task); 
    setModalOpen(true);
  };

  const handleToggleStatus = (taskId) => {
    dispatch(toggleTaskStatus(taskId));
  };

  const handleEdit = (task) => {
    openEditModal(task);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
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
      <AddTaskComponent
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        taskToEdit={editTask} 
      />
    </div>
  );
};

export default TaskList;
