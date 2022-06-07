import React, { useState, useEffect } from "react";
import classes from "./MeetingScheduled.module.css";
import greenTick from "./Assets/greenTick.svg";
import clock from "./Assets/clock.svg";
import markedDate from "./Assets/markedDate.svg";
import calendar from "./Assets/calendar.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const MeetingScheduled = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <React.Fragment>
      {screenWidth > 767 && (
        <div
          className={`${classes.boxShadow} d-flex flex-column justify-content-center align-items-center container-fluid mt-5`}
        >
          <img src={greenTick} alt="" />
          <div className={`${classes.meetingScheduledText} mt-4`}>
            Your Meeting is Scheduled
          </div>
          <div
            className={`${classes.meetingDetailsFlexbox} d-flex justify-content-evenly my-3`}
          >
            <div className="d-flex justify-content-between align-items-center">
              <img src={calendar} alt="" className="me-4" />
              <div className={classes.meetingsDetails}>Sun, Mar 21</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <img src={clock} alt="" className="me-4" />
              <div className={classes.meetingsDetails}>10 hours ago</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <img src={markedDate} alt="" className="me-4" />
              <div className={classes.meetingsDetails}>
                11:45 am - 12:30 am IST
              </div>
            </div>
          </div>
          <div className="my-3">
            <Button id={classes.addToCalendar}>Add to Calendar</Button>
            <Link to="/dashboard">
              <Button id={classes.goToDashboard}>Go to Dashboard</Button>
            </Link>
          </div>
        </div>
      )}
      {screenWidth < 767 && (
        <div
          className={`${classes.boxShadowMob} d-flex flex-column justify-content-center align-items-center container-fluid mt-5`}
        >
          <img src={greenTick} alt="" />
          <div className={`${classes.meetingScheduledTextMob} mt-4`}>
            Your Meeting is Scheduled
          </div>
          <div
            className={`${classes.meetingDetailsFlexboxMob} d-flex flex-column justify-content-evenly my-3`}
          >
            <div className="d-flex justify-content-center align-items-center my-2">
              <img src={calendar} alt="" className="me-3" />
              <div className={classes.meetingsDetailsMob}>Sun, Mar 21</div>
            </div>
            <div className="d-flex justify-content-center align-items-center my-2">
              <img src={clock} alt="" className="me-3" />
              <div className={classes.meetingsDetailsMob}>10 hours ago</div>
            </div>
            <div className="d-flex justify-content-center align-items-center my-2">
              <img src={markedDate} alt="" className="me-3" />
              <div className={classes.meetingsDetailsMob}>
                11:45 am - 12:30 am IST
              </div>
            </div>
          </div>
          <div className="my-3 d-flex flex-column">
            <Button id={classes.addToCalendarMob}>Add to Calendar</Button>
            <Link to="/dashboard">
              <Button id={classes.goToDashboardMob}>Go to Dashboard</Button>
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MeetingScheduled;
