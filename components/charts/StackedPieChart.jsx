import React from "react";
import { useSelector } from "react-redux"; 
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { TaskStatus } from "../../src/features/tasksManagement/taskManagerSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const StackedPieChart = () => {
  const tasks = useSelector((state) => state.tasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === TaskStatus.COMPLETED).length;
  const inProgressTasks = tasks.filter(task => task.status === TaskStatus.IN_PROCESS).length;
  const pendingTasks = tasks.filter(task => task.status === TaskStatus.PENDING).length;

  const completedPercentage = (completedTasks / totalTasks) * 100;
  const inProgressPercentage = (inProgressTasks / totalTasks) * 100;
  const pendingPercentage = (pendingTasks / totalTasks) * 100;

  const data = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "Task Breakdown Level 1",
        data: [completedPercentage, inProgressPercentage, pendingPercentage],
        backgroundColor: ["#3b82f6", "#93c5fd", "#d1d5db"],
        hoverOffset: 10,
        borderWidth: 4,
        borderColor: "#ffffff",
        borderRadius: 10,
      },
      {
        label: "Task Breakdown Level 2",
        data: [completedPercentage * 0.6, inProgressPercentage * 0.6, pendingPercentage * 0.6],
        backgroundColor: ["#2563eb", "#60a5fa", "#9ca3af"],
        hoverOffset: 10,
        borderWidth: 4,
        borderColor: "#ffffff",
        borderRadius: 15,
      },
      {
        label: "Task Breakdown Level 3",
        data: [completedPercentage * 0.4, inProgressPercentage * 0.4, pendingPercentage * 0.4],
        backgroundColor: ["#1d4ed8", "#3b82f6", "#6b7280"],
        hoverOffset: 10,
        borderWidth: 4,
        borderColor: "#ffffff",
        borderRadius: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%", 
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
            return `${datasetLabel}: ${value.toFixed(2)}%`; 
          },
        },
      },
    },
    animation: {
      animateScale: true, 
      animateRotate: true, 
    },
  };

  return <Doughnut data={data} options={options} style={{ padding: 0 }} />;
};

export default StackedPieChart;
