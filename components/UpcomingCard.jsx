import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { formattedDate } from "../src/utils/date";

const upcomingItems = [
  {
    title: "Research",
    time: "10:00 AM",
    deadline: "11:00 AM",
    description: "Research on market trends and competitors.",
    bgColor: "#eff6ff",
    peopleCount: 3,
  },
  {
    title: "Landing Page Design",
    time: "11:00 AM",
    deadline: "12:00 PM",
    description: "Designing the landing page for the website.",
    bgColor: "#fecaca",
    peopleCount: 3,
  },
  {
    title: "Dashboard Design",
    time: "12:00 PM",
    deadline: "1:00 PM",
    description: "Creating the dashboard layout and wireframes.",
    bgColor: "#d1fae5",
    peopleCount: 5,
  },
  {
    title: "Design Theory",
    time: "1:00 PM",
    deadline: "2:00 PM",
    description: "Discussion of various design theories and practices.",
    bgColor: "#bbf7d0",
    peopleCount: 9,
  },
  // Add more tasks as needed
];

const UpcomingCard = () => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: "#f9fafb",
        padding: 2,
        maxHeight: "350px",
        overflowY: "scroll",
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 2 }}>
          Upcoming
        </Typography>
        <Box display="flex" justifyContent="space-between" marginBottom={3}>
          <Typography variant="body1" sx={{ color: "#6b7280" }}>
            {formattedDate}
          </Typography>
        </Box>
        <Grid container direction="column" spacing={2}>
          {upcomingItems.map((item, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 2,
                  backgroundColor: item.bgColor,
                  borderRadius: 3,
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  {item.time} - {item.deadline}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: 1, color: "#374151" }}
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: 1, color: "#6b7280" }}
                >
                  {item.peopleCount} People
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UpcomingCard;
