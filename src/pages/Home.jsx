import React from "react";
import "../styles/Calendar.css"; // We'll put the styles in a separate CSS file

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar2">
        <div className="rectangle-5-217"></div>
        <div className="rectangle-77"></div>
        <div className="rectangle-78"></div>
        <div className="rectangle-79"></div>
        <div className="rectangle-80"></div>
        <div className="wed">Wed</div>
        <div className="rectangle-81"></div>
        <div className="rectangle-82"></div>
        <div className="rectangle-83"></div>
        <div className="sun">Sun</div>
        <div className="mon">Mon</div>
        <div className="tue">Tue</div>
        <div className="thu">Thu</div>
        <div className="fri">Fri</div>
        <div className="sat">Sat</div>
        {/* Numbers */}
        <div className="rectangle-84"></div>
        <div className="_30">30</div>
        {/* ... other date elements ... */}
        <div className="june-2021">June 2021</div>
        <img className="left" src="/left0.svg" alt="Previous" />
        <img className="left2" src="/left1.svg" alt="Next" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Calendar />
    </div>
  );
};

export default Home;
