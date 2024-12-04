import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { toggleTaskStatus, deleteTask } from "../src/features/tasksManagement/taskManagerSlice";

const TaskManager = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggleStatus = (id) => {
    dispatch(toggleTaskStatus(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
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
                <Grid item key={task.id}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: 2,
                      backgroundColor: "#eff6ff",
                      borderRadius: 3,
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {task.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {new Date(task.taskAddedTime).toLocaleString()} -{" "}
                      {new Date(task.deadLine).toLocaleString()}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: 1, color: "#374151" }}
                    >
                      {task.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: 1, color: "#6b7280" }}
                    >
                      Status: {task.status}
                    </Typography>
                    <Box display="flex" gap={2} marginTop={2}>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => handleToggleStatus(task.id)}
                      >
                        Toggle Status
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: "#6b7280" }}>
                No tasks available.
              </Typography>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TaskManager;
