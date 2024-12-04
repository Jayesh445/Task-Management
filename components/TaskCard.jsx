import React from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";

const TaskCard = ({ task, onEdit, onDelete, onToggleStatus }) => {
  return (
    <Grid2 item key={task.id}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 2,
          backgroundColor: "#eff6ff",
          borderRadius: 3,
          marginBottom:2,
          maxWidth:350
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {task.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          {new Date(task.taskAddedTime).toLocaleString()} -{" "}
          {new Date(task.deadLine).toLocaleString()}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1, color: "#374151" }}>
          {task.description}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1, color: "#6b7280" }}>
          Status: {task.status}
        </Typography>
        <Box display="flex" gap={2} marginTop={2}>
          {/* Toggle Status Button */}
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => onToggleStatus(task.id)} // Trigger toggle status with task ID
          >
            Toggle Status
          </Button>
          
          {/* Edit Button */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => onEdit(task)} // Trigger edit with the task object
          >
            Edit
          </Button>

          {/* Delete Button */}
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => onDelete(task.id)} // Trigger delete with task ID
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Grid2>
  );
};

export default TaskCard;
