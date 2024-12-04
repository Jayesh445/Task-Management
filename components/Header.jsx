import React from 'react';
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { formattedDate } from '../src/utils/date';

const Header = () => {
    
  
    return (
      <div className="header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="date">{formattedDate}</p>
        </div>
        <div className="header-actions">
          <button className="date-button">
            <TodayOutlinedIcon />
            {formattedDate}
          </button>
        </div>
      </div>
    );
  };

export default Header