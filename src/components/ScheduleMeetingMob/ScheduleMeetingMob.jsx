import React, { useState, useEffect } from "react";
import classes from "./scheduleMeetingMob.module.css";
import { Form, FloatingLabel } from "react-bootstrap";
import upload from "../Project Details/Assets/upload.svg";
import proTip from "../Project Details/Assets/proTip.svg";
import { Link } from "react-router-dom";
import clock from "../Schedule Consultation/Assets/clock.svg";
import videoCall from "../Schedule Consultation/Assets/videoCall.svg";
import Calendar from "react-calendar";
const ScheduleMeetingMob = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [uploadedProjectDetails, setUploadedProjectDetails] = useState(false);
  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <React.Fragment>
      {screenWidth < 767 && !uploadedProjectDetails && (
        <div className="d-flex flex-column" style={{ position: "relative" }}>
          <div className="">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className={`${classes.projectDetailsFormMob} mt-5 pb-4 px-4`}
              >
                <span className={classes.scheduleMeetingsHeading}>
                  Schedule Meetings
                </span>
                <Form className="mt-4">
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                      type="name"
                      placeholder="Building Name/Area Name"
                      id={classes.buildingNameMob}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="city">
                    <Form.Control
                      type="city"
                      placeholder="City"
                      id={classes.cityNameMob}
                    />
                  </Form.Group>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Project Description"
                    id={classes.projectDescriptionMob}
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="i.e 3 BH apartment with false ceiling works, and furniture"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                  <Form.Group>
                    <Form.Label
                      className={`${classes.uploadProjectLabelMob} mt-4`}
                    >
                      <span>Upload Project Drawing & BOQs </span>
                      <span className={classes.optional}>(Optional)</span>
                    </Form.Label>
                    <div className="d-flex flex-column justify-content-between ">
                      <div className={`${classes.uploadBoxes}`}>
                        <div>
                          <img className="me-3" src={upload} alt="" />
                        </div>
                        <div>
                          <div className={classes.uploadBoxCaptionMob}>
                            Upload Drawings
                          </div>
                          <div className={classes.optional}>
                            PDF,XLS are allowed
                          </div>
                        </div>
                        <input
                          type="file"
                          className={`${classes.dragDropInputBoxesMob1} form-control`}
                          multiple=""
                        />
                      </div>
                      <div className={`${classes.uploadBoxes} mt-3`}>
                        <div>
                          <img
                            className=""
                            src={upload}
                            alt=""
                            style={{ marginRight: "3.8rem" }}
                          />
                        </div>
                        <div>
                          <div className={classes.uploadBoxCaptionMob}>
                            Upload BOQ
                          </div>
                          <div className={classes.optional}>
                            PDF are allowed
                          </div>
                        </div>
                        <input
                          type="file"
                          className={`${classes.dragDropInputBoxesMob1} form-control`}
                          multiple=""
                        />
                      </div>
                    </div>
                  </Form.Group>
                  <div className="d-flex align-items-start mt-4">
                    <img className="me-2 " src={proTip} alt="" />
                    <div className={classes.proTipMob}>
                      Pro Tip: Providing drawings or tentative BOQs help in a
                      better consultation
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
      {screenWidth < 767 && uploadedProjectDetails && (
        <div className="d-flex flex-column" style={{ marginBottom: "7rem" }}>
          <div className="mt-5">
            <div className="container-fluid">
              <div className={`${classes.scheduleConsultationHeadingMob}`}>
                Schedule Meetings
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
      {screenWidth < 767 && !uploadedProjectDetails && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ position: "fixed", bottom: "0", width: "100%" }}
        >
          <div
            onClick={() => {
              setUploadedProjectDetails(true);
            }}
            className={`${classes.nextBtn}`}
            style={{ cursor: "pointer" }}
          >
            Next
          </div>
        </div>
      )}
      {screenWidth < 767 && uploadedProjectDetails && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ position: "fixed", bottom: "0", width: "100%" }}
        >
          <div
            onClick={() => {
              setUploadedProjectDetails(false);
            }}
            className={`${classes.previousBtn}`}
            style={{ cursor: "pointer" }}
          >
            Previous
          </div>
          <Link
            to="/checkout"
            className={`${classes.nextBtn2}`}
            style={{ cursor: "pointer" }}
          >
            Next
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default ScheduleMeetingMob;
