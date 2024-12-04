import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, Button, Modal, TextField } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { addTask, TaskStatus, updateTask } from "../src/features/tasksManagement/taskManagerSlice"; // Import updateTask action

const AddTaskComponent = ({ modalOpen, setModalOpen, taskToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const dispatch = useDispatch();

  // If taskToEdit is provided, we are editing an existing task
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDeadLine(taskToEdit.deadLine);
    }
  }, [taskToEdit]);

  const handleSaveTask = (e) => {
    e.preventDefault();

    if (title && description && deadLine) {
      const newTask = {
        id: taskToEdit ? taskToEdit.id : nanoid(), // Keep existing ID if editing
        title,
        description,
        taskAddedTime: taskToEdit ? taskToEdit.taskAddedTime : new Date().toISOString(),
        deadLine: new Date(deadLine).toISOString(),
        status: taskToEdit ? taskToEdit.status : TaskStatus.PENDING, // Preserve status if editing
      };

      if (taskToEdit) {
        dispatch(updateTask(newTask)); // Dispatch the updateTask action if editing
      } else {
        dispatch(addTask(newTask)); // Dispatch the addTask action if adding
      }

      // Reset and close modal
      setTitle("");
      setDescription("");
      setDeadLine("");
      setModalOpen(false);
    }
  };

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="add-task-modal">
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
          {taskToEdit ? "Edit Task" : "Add New Task"}
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
        <Button variant="contained" color="primary" onClick={handleSaveTask} fullWidth>
          {taskToEdit ? "Save Changes" : "Add Task"}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddTaskComponent;
