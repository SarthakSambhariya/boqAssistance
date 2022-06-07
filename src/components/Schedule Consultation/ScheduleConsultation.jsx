import React, { useState, useEffect } from "react";
import classes from "./scheduleConsultation.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import clock from "./Assets/clock.svg";
import videoCall from "./Assets/videoCall.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ScheduleConsultation = () => {
  const [value, onChange] = useState(new Date());
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
        <div className="mt-5">
          <div className="container-fluid">
            <div className={`mx-4 ${classes.scheduleConsultationHeading}`}>
              Schedule your consultation
            </div>
            <div className="d-flex justify-content-between mt-5 mx-4">
              <div className={`${classes.flexbox1Layout} pe-5`}>
                <div className={classes.vivek}>Vivek Verma</div>
                <div className={classes.boqHeading}>BOQ Assistance</div>
                <div className="d-flex my-2">
                  <div>
                    <img src={clock} alt="" />
                  </div>
                  <div className={`${classes.clockTxt} ms-2`}>60 Minutes</div>
                </div>
                <div className="d-flex my-2">
                  <div>
                    <img src={videoCall} alt="" />
                  </div>
                  <div className={`${classes.videoCallTxt}  ms-1`}>
                    Video conferencing details will be provided 30 min prior to
                    the call
                  </div>
                </div>
                <span className={`${classes.proTip} mt-5`}>
                  Please find a time that work best for you to learn more about
                  our product
                </span>
              </div>
              {/* <div className={classes.seperatorLine} /> */}
              <div className={`ms-5 me-4 ${classes.flexbox2Layout}`}>
                <Calendar />
              </div>
              <div className={`ms-4 me-5 ${classes.flexbox3Layout}`}>
                <div className={`mb-5 ${classes.chosenDate}`}>
                  Thursday, December 21
                </div>
                <div>
                  <div className={`${classes.timeslot} my-3 py-2`}>1:00 PM</div>
                  <div className={`${classes.timeslot} my-3 py-2`}>2:30 PM</div>
                  <div className={`${classes.timeslot} my-3 py-2`}>4:00 PM</div>
                  <Link to="/checkout">
                    <Button className="py-2" id={classes.nextBtn}>
                      Next
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {screenWidth < 767 && (
        <div className="d-flex flex-column" style={{ marginBottom: "7rem" }}>
          <div className="mt-5">
            <div className="container-fluid">
              <div className={` ${classes.scheduleConsultationHeadingMob}`}>
                Schedule your consultation
              </div>
              <div className="d-flex flex-column justify-content-between mt-5">
                <div className={`${classes.flexbox1LayoutMob}`}>
                  <div className={classes.vivekMob}>Vivek Verma</div>
                  <div className="d-flex justify-content-between">
                    <div className={classes.boqHeadingMob}>BOQ Assistance</div>
                    <div className={`${classes.clockTxtMob} `}>
                      <img className={`me-2`} src={clock} alt="" />
                      60 Minutes
                    </div>
                  </div>
                  <div className="d-flex my-2"></div>
                  <div className="d-flex my-2">
                    <div className="me-2">
                      <img src={videoCall} alt="" />
                    </div>
                    <div className={`${classes.videoCallTxtMob}`}>
                      Video conferencing details will be provided 30 min prior
                      to the call
                    </div>
                  </div>
                  <div className={`${classes.proTipMob} mt-3 mb-5`}>
                    Please find a time that work best for you to learn more
                    about our product
                  </div>
                </div>
                {/* <div className={classes.seperatorLine} /> */}
                <div className={`${classes.flexbox2LayoutMob}`}>
                  <Calendar />
                </div>
                <div className={`${classes.flexbox3LayoutMob}`}>
                  <div className={`my-5 ${classes.chosenDateMob}`}>
                    Thursday, December 21
                  </div>
                  <div>
                    <div className={`${classes.timeslotMob} my-3 py-2`}>
                      1:00 PM
                    </div>
                    <div className={`${classes.timeslotMob} my-3 py-2`}>
                      2:30 PM
                    </div>
                    <div className={`${classes.timeslotMob} my-3 py-2`}>
                      4:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {screenWidth < 767 && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ position: "fixed", bottom: "0", width: "100%" }}
        >
          <Link to="/project-details" className={`${classes.previousBtn}`}>
            Previous
          </Link>
          <Link to="/checkout" className={`${classes.nextBtn}`}>
            Next
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default ScheduleConsultation;
