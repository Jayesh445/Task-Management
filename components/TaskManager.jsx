import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import TaskCard from "./TaskCard";
import { deleteTask, toggleTaskStatus } from "../src/features/tasksManagement/taskManagerSlice";
import AddTaskComponent from "./AddTaskComponent";

const TaskManager = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  
  const handleToggleStatus = (taskId) => {
    dispatch(toggleTaskStatus(taskId)); // Dispatch toggle status action
  };

  const handleEdit = (task) => {
    setEditTask(task); // Set the task that will be edited
    setModalOpen(true);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch delete action
  };

  return (
    <Box display="flex" flexDirection="column" gap={3} padding={3}>
      {/* Tasks Section */}
      <Card
        sx={{
          borderRadius: 2,
          backgroundColor: "#f9fafb",
          padding: 2,
          maxHeight: "288px",
          overflowY: "scroll",
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 2 }}>
            Task List
          </Typography>
          <Grid container direction="column" spacing={2}>
            {tasks && tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskCard  key={task.id}
                task={task}
                onToggleStatus={handleToggleStatus}
                onEdit={handleEdit}
                onDelete={handleDelete}/>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: "#6b7280" }}>
                No tasks available.
              </Typography>
            )}
          </Grid>
        </CardContent>
      </Card>

      {/* Add Task Modal */}
      <AddTaskComponent
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        taskToEdit={editTask} // Pass the task to edit (if any)
      />
    </Box>
  );
};

export default TaskManager;
