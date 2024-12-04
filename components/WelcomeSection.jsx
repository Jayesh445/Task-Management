import React from 'react'

const WelcomeSection = () => {
    return (
      <div className="welcome-section">
        <div className="text-content">
          <h1 className="title">Welcome To</h1>
          <h2 className="main-title">Your Task Management Area</h2>
          <p className="description">
            Streamline your productivity with an intuitive task management
            dashboard for efficiency.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="image-container">
          <img
            className="illustration"
            src="welcome.png"
            alt="Task Management Illustration"
          />
          <div className="icon-container">
            <img className="icon clock" src="clock.png" alt="Clock list image" />
          </div>
        </div>
      </div>
    );
  };

export default WelcomeSection