import React, { useState } from 'react'
import SimpleLineChart from "./charts/SimpleLineChart";
import StackedPieChart from "./charts/StackedPieChart";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const ChartsGrid = () => {
    const [selectedTimeframe, setSelectedTimeframe] = useState("monthly");
    const timeframeOptions = [
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
      { value: "fullYear", label: "Full Year" },
    ];
    const handleTimeframeChange = (event) => {
      setSelectedTimeframe(event.target.value);
    };
  
    return (
      <div className="charts-grid">
        <div className="chart-card">
          <h4 className="chart-title">Total Work</h4>
          <div className="chart-header">
            <div className="form-div">
              <FormControl>
                <InputLabel>Timeframe</InputLabel>
                <Select
                  value={selectedTimeframe}
                  onChange={handleTimeframeChange}
                  label="Timeframe"
                >
                  {timeframeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <SimpleLineChart timeframe={selectedTimeframe} />
        </div>
        <div className="chart-card">
          <h4 className="chart-title">Task Percentage</h4>
          <StackedPieChart />
        </div>
      </div>
    );
  };

export default ChartsGrid