import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

// Data for each timeframe
const months = [
  new Date(2023, 0, 1),
  new Date(2023, 1, 1),
  new Date(2023, 2, 1),
  new Date(2023, 3, 1),
  new Date(2023, 4, 1),
  new Date(2023, 5, 1),
  new Date(2023, 6, 1),
  new Date(2023, 7, 1),
  new Date(2023, 8, 1),
  new Date(2023, 9, 1),
  new Date(2023, 10, 1),
  new Date(2023, 11, 1),
];

const quarterlyDates = [
  new Date(2023, 0, 1),
  new Date(2023, 3, 1),
  new Date(2023, 6, 1),
  new Date(2023, 9, 1),
];

const sixMonthsDates = [new Date(2023, 0, 1), new Date(2023, 6, 1)];

const currentYearTasks = [70, 80, 60, 90, 100, 85, 95, 110, 120, 130, 125, 140];
const lastYearTasks = [50, 60, 55, 70, 85, 75, 80, 95, 105, 115, 110, 120];

const weeklyCurrentYearTasks = Array.from({ length: 48 }, (_, i) =>
  Math.floor(50 + Math.random() * 50)
);
const weeklyLastYearTasks = Array.from({ length: 48 }, (_, i) =>
  Math.floor(40 + Math.random() * 50)
);
const chartData = {
  weekly: {
    xData: Array.from(
      { length: 48 },
      (_, i) => new Date(2023, Math.floor(i / 4), (i % 4) * 7 + 1)
    ),
    currentTasks: weeklyCurrentYearTasks,
    lastTasks: weeklyLastYearTasks,
  },
  monthly: {
    xData: months,
    currentTasks: currentYearTasks,
    lastTasks: lastYearTasks,
  },
  fullYear: {
    xData: sixMonthsDates,
    currentTasks: [85, 130], // First and second half of the year
    lastTasks: [75, 120], 
  },
};

const monthFormatter = (date) =>
  date.toLocaleString("default", { month: "short" });
const weekFormatter = (date) => `W${Math.ceil(date.getDate() / 7)}`;

const SimpleLineChart = ({timeframe}) => { // Default timeframe is 'monthly'

  // Data for the selected timeframe
  const data = chartData[timeframe];

  return (
    <div>
      <LineChart
        width={350}
        height={250}
        series={[
          {
            label: "Current Year Tasks",
            data: data.currentTasks,
            color: "#3b82f6", // Blue for current year
            area: false,
          },
          {
            label: "Last Year Tasks",
            data: data.lastTasks,
            color: "#d1d5db", // Light gray for last year
            area: false,
          },
        ]}
        xAxis={[
          {
            data: data.xData,
            scaleType: "time",
            valueFormatter:
              timeframe === "weekly" ? weekFormatter : monthFormatter,
          },
        ]}
        yAxis={[
          {
            label: "Tasks",
            tickSize: 5,
            showGrid: true,
          },
        ]}
        grid={{
          x: { show: true },
          y: { show: true },
        }}
      />
    </div>
  );
};

export default SimpleLineChart;
