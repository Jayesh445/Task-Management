import React from "react";
import { Doughnut } from "react-chartjs-2";
import { CardContent } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const StackedPieChart = () => {
  // Data for Stacked Pie Chart
  const data = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "Task Breakdown Level 1",
        data: [40, 30, 30],
        backgroundColor: ["#3b82f6", "#93c5fd", "#d1d5db"],
        hoverOffset: 10,
        borderWidth: 4,
        borderColor: "#ffffff",
        borderRadius: 10,
      },
      {
        label: "Task Breakdown Level 2",
        data: [25, 15, 10],
        backgroundColor: ["#2563eb", "#60a5fa", "#9ca3af"],
        hoverOffset: 10,
        borderWidth: 4,
        borderColor: "#ffffff",
        borderRadius: 15,
      },
      {
        label: "Task Breakdown Level 3",
        data: [15, 10, 5],
        backgroundColor: ["#1d4ed8", "#3b82f6", "#6b7280"],
        hoverOffset: 10,
        borderWidth: 4,
        borderColor: "#ffffff",
        borderRadius: 15,
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    responsive: true,
    cutout: "60%", // Adjust the inner radius for a thinner look
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const datasetLabel = tooltipItem.dataset.label || "Dataset";
            const value = tooltipItem.raw;
            return `${datasetLabel}: ${value}%`;
          },
        },
      },
    },
    animation: {
      animateScale: true, // Smooth scale effect
      animateRotate: true, // Smooth rotation effect
    },
  };

  return <Doughnut data={data} options={options} style={{ padding: 0 }} />;
};

export default StackedPieChart;
