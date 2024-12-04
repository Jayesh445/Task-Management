import React from 'react'
import BasicDateCalendar from "./DateCalendar";
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import TaskStatsGrid from './TaskStatsGrid';
import ChartsGrid from './ChartsGrid';
import UpcomingCard from './UpcomingCard';

const MainContent = () => {
    return (
      <div className="main-content">
        <div className="left-content">
          <Header />
          <WelcomeSection />
          <TaskStatsGrid />
          <ChartsGrid />
        </div>
        <div className="right-content">
          <BasicDateCalendar />
          {/* <GanttChartComponent/> */}
          <UpcomingCard />
        </div>
      </div>
    );
  };

export default MainContent