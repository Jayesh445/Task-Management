import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <div className="calendar-card">
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DateCalendar />
      </LocalizationProvider>
    </div>
  );
}
