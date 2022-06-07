import React, { useEffect, useState } from "react";
import classes from "./Dashboard.module.css";
import clock from "../MeetingScheduled/Assets/clock.svg";
import calendar from "../MeetingScheduled/Assets/calendar.svg";
import markedDate from "../MeetingScheduled/Assets/markedDate.svg";
import upload from "../Project Details/Assets/upload.svg";
import blueCard from "./Assets/blueCard.svg";
import rateAdvice from "../BOQ Assistance/Assets/rateAdvice.svg";
import advisoryService from "../BOQ Assistance/Assets/advisoryService.svg";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import videoCall from "../Schedule Consultation/Assets/videoCall.svg";
import scheduleNewMeetingLogo from "./Assets/scheduleNewMeetingLogo.svg";
import Calendar from "react-calendar";
import filesIcon from "./Assets/filesIcon.svg";
import assistanceBy from "./Assets/assistanceBy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [componentsToRender, setComponentToRender] = useState("Upcoming");
  const [rescheduleSectionVisibility, setRescheduleSectionVisibility] =
    useState(false);
  const [cancelModalVisibility, setCancelModalVisibility] = useState(false);
  const [scheduleNewMeeting, setScheduleNewMeeting] = useState(false);
  const [meetingDetailsVisibility, setMeetingDetailsVisibility] =
    useState(false);

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
        <div className={`${classes.mainLayout} container-fluid mt-5`}>
          <div className="">
            <div className="d-flex">
              {
                <div
                  className="me-5"
                  style={{
                    position:
                      componentsToRender === "Upcoming" ? "relative" : "",
                    top: componentsToRender === "Upcoming" ? "12px" : "",
                    cursor: "pointer",
                  }}
                  onClick={
                    () => setComponentToRender("Upcoming")

                    // (window.location.href = "/findprofessionals2")
                  }
                >
                  <div className="d-flex align-items-center">
                    <div
                      className={
                        componentsToRender === "Upcoming"
                          ? `${classes.titleSelectedTab}`
                          : `${classes.navTextMob}`
                      }
                    >
                      Upcoming
                      <div className="ms-2" id={classes.upcomingMeetingsBadge}>
                        1
                      </div>
                    </div>
                  </div>
                </div>
              }
              {
                <div
                  className="me-5"
                  style={{
                    position:
                      componentsToRender === "Schedule new meeting"
                        ? "relative"
                        : "",
                    top:
                      componentsToRender === "Schedule new meeting"
                        ? "12px"
                        : "",
                    cursor: "pointer",
                  }}
                  onClick={
                    () => setComponentToRender("Schedule new meeting")
                    // (window.location.href = "/findprofessionals2/contractor2")
                  }
                >
                  <div
                    className={
                      componentsToRender === "Schedule new meeting"
                        ? `${classes.titleSelectedTab}`
                        : componentsToRender ===
                          "Schedule new meeting- Calendar and Time Slots"
                        ? `${classes.titleSelectedTabBoq}`
                        : `${classes.navTextMob}`
                    }
                  >
                    Schedule new meeting
                  </div>
                </div>
              }
            </div>
            <hr style={{ position: "relative", bottom: "16px" }} />
            <div className="tabContents">
              {componentsToRender === "Upcoming" && (
                <>
                  <div className={`${classes.boxShadow} p-5`}>
                    <div className="d-flex justify-content-between">
                      <div className={classes.boqAssistance}>
                        BOQ Assistance with&nbsp;
                        <span className={classes.assistanceNameStyling}>
                          Vijay Raj
                        </span>
                      </div>
                      <div className={classes.detailsDropdown}>
                        Details
                        {!meetingDetailsVisibility && (
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            className="ms-2"
                            onClick={() => {
                              setMeetingDetailsVisibility(true);
                            }}
                            size={"1x"}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                        {meetingDetailsVisibility && (
                          <FontAwesomeIcon
                            icon={faAngleUp}
                            className="ms-2"
                            onClick={() => {
                              setMeetingDetailsVisibility(false);
                            }}
                            size={"1x"}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className={`${classes.meetingDetailsFlexbox} d-flex justify-content-start my-3`}
                    >
                      <div
                        className={`${classes.meetingDetails} d-flex justify-content-between align-items-center`}
                      >
                        <img src={calendar} alt="" className="me-4" />
                        <div className={classes.meetingsDetails}>
                          Sun, Mar 21
                        </div>
                      </div>
                      <div
                        className={`${classes.meetingDetails} d-flex justify-content-between align-items-center`}
                      >
                        <img src={clock} alt="" className="me-4" />
                        <div className={classes.meetingsDetails}>
                          10 hours ago
                        </div>
                      </div>
                      <div
                        className={`${classes.meetingDetails} d-flex justify-content-between align-items-center`}
                      >
                        <img src={markedDate} alt="" className="me-4" />
                        <div className={classes.meetingsDetails}>
                          11:45 am - 12:30 am IST
                        </div>
                      </div>
                    </div>
                    {!meetingDetailsVisibility && (
                      <div>
                        <div className="d-flex align-items-center mt-5">
                          <div
                            className={classes.rescheduleBtn}
                            onClick={() => {
                              setRescheduleSectionVisibility(
                                !rescheduleSectionVisibility
                              );
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            Reschedule
                          </div>
                          <div
                            className={classes.cancelBtn}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setCancelModalVisibility(true);
                            }}
                          >
                            Cancel
                          </div>
                        </div>
                      </div>
                    )}
                    {meetingDetailsVisibility && (
                      <div>
                        <div
                          className="mt-4"
                          style={{ borderBottom: "1px solid #E0E0E0" }}
                        />
                        <div className="d-flex justify-content-between align-items-center mt-5">
                          <div className={classes.assistanceBy}>
                            Assistance by:
                          </div>
                          <div>
                            <span className={classes.createdOn}>
                              Created on:
                            </span>{" "}
                            <span className={classes.dateOfMeetingCreation}>
                              14 Feb 22
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                          <img src={assistanceBy} style={{ width: "73px" }} />
                          <div className="d-flex flex-column mx-3">
                            <div className={classes.assistantNameMoreDetails}>
                              Mohammad Wazir
                            </div>
                            <div
                              className={
                                classes.assistantDesignationMoreDetails
                              }
                            >
                              Sr. Designer, Markz Dzyn{" "}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-column mt-4">
                          <div className={classes.locationMoreDetails}>
                            Location
                          </div>
                          <div className={classes.addressMoreDetails}>
                            DLF Park, Gurugram
                          </div>
                        </div>
                        <div className="d-flex flex-column mt-4">
                          <div className={classes.descriptionMoreDetails}>
                            Description
                          </div>
                          <div className={classes.descriptionTextMoreDetails}>
                            Floor planning and BOQ corrections
                          </div>
                        </div>
                        <div className="d-flex flex-column mt-4">
                          <span className={classes.filesMoreDetails}>
                            Files
                          </span>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="d-flex justify-content-evenly">
                              <div className="d-flex flex-column align-items-center">
                                <img src={filesIcon} alt="" />
                                <div className={classes.boqMoreDetails}>
                                  BOQ
                                </div>
                              </div>
                              <div className="d-flex flex-column align-items-center mx-5">
                                <img src={filesIcon} alt="" />
                                <div className={classes.drawingsMoreDetails}>
                                  Drawings
                                </div>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div
                                className={classes.rescheduleBtnMoreDetails}
                                onClick={() => {
                                  setRescheduleSectionVisibility(
                                    !rescheduleSectionVisibility
                                  );
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                Reschedule
                              </div>
                              <div
                                className={classes.cancelBtnMoreDetails}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setCancelModalVisibility(true);
                                }}
                              >
                                Cancel
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {rescheduleSectionVisibility && (
                    <div className="d-flex my-5">
                      <div className={`ms-5 me-4 ${classes.flexbox2Layout}`}>
                        <Calendar />
                      </div>
                      <div className={`ms-4 me-5 ${classes.flexbox3Layout}`}>
                        <div
                          className={`mb-5 ${classes.chosenDateInUpcomingTab}`}
                        >
                          Thursday, December 21
                        </div>
                        <div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            1:00 PM
                          </div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            2:30 PM
                          </div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            4:00 PM
                          </div>
                          <Link to="/meeting-rescheduled">
                            <Button className="py-2 mt-4" id={classes.nextBtn}>
                              Reschedule Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              {componentsToRender === "Schedule new meeting" && (
                <div className="d-flex justify-content-between align-items-start">
                  <div className={`${classes.projectDetailsForm}`}>
                    <Form className="mt-4">
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="name"
                          placeholder="Building Name"
                          id={classes.buildingName}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="city"
                          placeholder="City"
                          id={classes.cityName}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Select id={classes.projectStatus}>
                          <option id={classes.options}>Project Status</option>
                        </Form.Select>
                      </Form.Group>
                      <FloatingLabel
                        // controlId="floatingTextarea2"
                        label="Project Description"
                        id={classes.projectDescription}
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="i.e 3 BH apartment with false ceiling works, and furniture"
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel>
                      <Form.Group>
                        <Form.Label
                          className={`${classes.uploadProjectLabel} mt-4`}
                        >
                          <span>Upload Project Drawing & BOQs </span>
                        </Form.Label>
                        <div className="d-flex justify-content-between">
                          <div className={`${classes.uploadBoxes} w-100 me-1`}>
                            <div>
                              <img className="me-3" src={upload} alt="" />
                            </div>
                            <div>
                              <div className={classes.uploadBoxCaption}>
                                Upload Drawings
                              </div>
                              <div className={classes.optional}>
                                PDF,XLS are allowed
                              </div>
                            </div>{" "}
                            <input
                              type="file"
                              className={`${classes.dragDropInputBoxes} form-control`}
                              multiple=""
                            />
                          </div>
                          <div className={`${classes.uploadBoxes} w-100 ms-1`}>
                            <div>
                              <img className="me-3" src={upload} alt="" />
                            </div>
                            <div>
                              <div className={classes.uploadBoxCaption}>
                                Upload BOQ
                              </div>
                              <div className={classes.optional}>
                                PDF are allowed
                              </div>
                            </div>{" "}
                            <input
                              type="file"
                              class="form-control"
                              multiple=""
                              className={`${classes.dragDropInputBoxes} form-control`}
                            />
                          </div>
                        </div>
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        id={classes.continueBtn}
                        className="mt-4"
                        onClick={() =>
                          setComponentToRender(
                            "Schedule new meeting- Calendar and Time Slots"
                          )
                        }
                      >
                        Continue
                      </Button>
                    </Form>
                  </div>
                  <div className="d-flex flex-column mt-4">
                    <div className="d-flex justify-content-between p-2">
                      <div className={`${classes["benefit-card-shadow"]}`}>
                        <div className="d-flex flex-column align-items-center ">
                          <img
                            src={rateAdvice}
                            alt="benefits"
                            className={classes["benefit-card-logo"]}
                          />
                          <div className={classes["benefit-card-logo-caption"]}>
                            Connect with <b>Experts</b> and get{" "}
                            <b>Rate Advice</b>
                          </div>
                        </div>
                      </div>
                      <div className={classes["benefit-card-shadow"]}>
                        <div className="d-flex flex-column align-items-center justify-content-evenly align-content-between ">
                          <img
                            src={advisoryService}
                            alt="benefits"
                            className={classes["benefit-card-logo"]}
                          />
                          <div className={classes["benefit-card-logo-caption"]}>
                            <b>45 min + 15 min</b> Advisory Service
                          </div>
                        </div>
                      </div>
                    </div>
                    <img src={blueCard} alt="" />
                  </div>
                </div>
              )}
              {componentsToRender ===
                "Schedule new meeting- Calendar and Time Slots" && (
                <div className="d-flex justify-content-between align-items-start">
                  <div className="">
                    <div className="d-flex justify-content-between mt-4">
                      <div className={`${classes.flexbox1Layout}`}>
                        <div className={classes.vivek}>Vivek Verma</div>
                        <div className={classes.boqHeading}>BOQ Assistance</div>
                        <div className="d-flex my-2">
                          <div>
                            <img src={clock} alt="" />
                          </div>
                          <div className={`${classes.clockTxt} ms-2`}>
                            60 Minutes
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <div>
                            <img src={videoCall} alt="" />
                          </div>
                          <div className={`${classes.videoCallTxt}  ms-1`}>
                            Video conferencing details will be provided 30 min
                            prior to the call
                          </div>
                        </div>
                        <span className={`${classes.proTip} mt-5`}>
                          Please find a time that work best for you to learn
                          more about our product
                        </span>
                      </div>
                      {/* <div className={classes.seperatorLine} /> */}
                      <div className={`ms-5 me-4 ${classes.flexbox2Layout}`}>
                        <Calendar />
                      </div>
                      <div className={`ms-4 me-5 ${classes.flexbox3Layout}`}>
                        <div className={`mb-4 ${classes.chosenDate}`}>
                          Thursday, December 21
                        </div>
                        <div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            1:00 PM
                          </div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            2:30 PM
                          </div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            4:00 PM
                          </div>
                          <Link to="/checkout">
                            <Button className="py-2 mt-2" id={classes.nextBtn}>
                              Schedule Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {screenWidth < 767 && (
        <div className={`${classes.mainLayoutMob} container-fluid mt-5`}>
          {!scheduleNewMeeting && (
            <>
              <div
                className={`${classes.scheduleNewMeetingBtnMob} d-flex justify-content-evenly py-3`}
                onClick={() => {
                  setScheduleNewMeeting(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={scheduleNewMeetingLogo} alt="" />
                <div>Schedule a new meeting</div>
              </div>
              <div
                className="mt-5 mb-4 pb-3"
                style={{ borderTop: "0.447498px solid #E0E0E0" }}
              />
            </>
          )}
          {scheduleNewMeeting && componentsToRender === "Upcoming" && (
            <div className={classes.scheduleNewMeetingsHeadingMob}>
              Schedule Meetings
            </div>
          )}
          <div className="">
            <div className="d-flex">
              {
                <div
                  className="me-5"
                  style={{
                    position:
                      componentsToRender === "Upcoming" ? "relative" : "",
                    top: componentsToRender === "Upcoming" ? "12px" : "",
                    cursor: "pointer",
                  }}
                  onClick={() => setComponentToRender("Upcoming")}
                >
                  <div className="d-flex align-items-center">
                    <div
                      className={
                        componentsToRender === "Upcoming"
                          ? `${classes.titleSelectedTabMob}`
                          : `${classes.navTextMobMob}`
                      }
                    >
                      Upcoming
                      <div
                        className="ms-2"
                        id={classes.upcomingMeetingsBadgeMob}
                        style={{ display: scheduleNewMeeting ? "none" : "" }}
                      >
                        1
                      </div>
                    </div>
                  </div>
                </div>
              }
              {
                <div
                  className="me-5"
                  style={{
                    position:
                      componentsToRender === "Schedule new meeting"
                        ? "relative"
                        : "",
                    top:
                      componentsToRender === "Schedule new meeting"
                        ? "12px"
                        : "",
                    cursor: "pointer",
                  }}
                  onClick={() => setComponentToRender("Schedule new meeting")}
                ></div>
              }
            </div>
            <hr style={{ position: "relative", bottom: "16px" }} />
            <div className="tabContents">
              {componentsToRender === "Upcoming" && !scheduleNewMeeting && (
                <>
                  <div className={`${classes.boxShadow} p-4`}>
                    <div className={classes.boqAssistanceMob}>
                      BOQ Assistance with{" "}
                      <span className={classes.assistanceNameStylingMob}>
                        Vijay Raj
                      </span>
                    </div>
                    <div
                      className={`${classes.meetingDetailsFlexbox} d-flex flex-column justify-content-start my-3`}
                    >
                      <div
                        className={`${classes.meetingDetails} my-2 d-flex justify-content-start align-items-center`}
                      >
                        <img src={calendar} alt="" className="me-4" />
                        <div className={classes.meetingsDetails}>
                          Sun, Mar 21
                        </div>
                      </div>
                      <div
                        className={`${classes.meetingDetails} my-2 d-flex justify-content-start align-items-center`}
                      >
                        <img src={clock} alt="" className="me-4" />
                        <div className={classes.meetingsDetails}>
                          10 hours ago
                        </div>
                      </div>
                      <div
                        className={`${classes.meetingDetails} my-2 d-flex justify-content-start align-items-center`}
                      >
                        <img src={markedDate} alt="" className="me-4" />
                        <nobr className={classes.meetingsDetails}>
                          11:45 am - 12:30 am IST
                        </nobr>
                      </div>
                      <div
                        className={`${classes.detailsDropdownMob} d-flex align-items-center ms-1 mt-2`}
                      >
                        Details
                        {!meetingDetailsVisibility && (
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            className="ms-2"
                            onClick={() => {
                              setMeetingDetailsVisibility(true);
                            }}
                            size={"1x"}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                        {meetingDetailsVisibility && (
                          <FontAwesomeIcon
                            icon={faAngleUp}
                            className="ms-2"
                            onClick={() => {
                              setMeetingDetailsVisibility(false);
                            }}
                            size={"1x"}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      {meetingDetailsVisibility && (
                        <div>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className={classes.assistanceByMob}>
                              Assistance by:
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-4">
                            <img src={assistanceBy} style={{ width: "51px" }} />
                            <div className="d-flex flex-column mx-3">
                              <div
                                className={classes.assistantNameMoreDetailsMob}
                              >
                                Mohammad Wazir
                              </div>
                              <div
                                className={
                                  classes.assistantDesignationMoreDetailsMob
                                }
                              >
                                Sr. Designer, Markz Dzyn{" "}
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-column mt-4">
                            <div className={classes.locationMoreDetailsMob}>
                              Location
                            </div>
                            <div className={classes.addressMoreDetailsMob}>
                              DLF Park, Gurugram
                            </div>
                          </div>
                          <div className="d-flex flex-column mt-4">
                            <div className={classes.descriptionMoreDetailsMob}>
                              Description
                            </div>
                            <div
                              className={classes.descriptionTextMoreDetailsMob}
                            >
                              Floor planning and BOQ corrections
                            </div>
                          </div>
                          <div className="d-flex flex-column mt-4">
                            <span className={classes.filesMoreDetailsMob}>
                              Files
                            </span>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <div className="d-flex justify-content-evenly">
                                <div className="d-flex flex-column align-items-center">
                                  <img src={filesIcon} alt="" />
                                  <div className={classes.boqMoreDetailsMob}>
                                    BOQ
                                  </div>
                                </div>
                                <div className="d-flex flex-column align-items-center mx-5">
                                  <img src={filesIcon} alt="" />
                                  <div
                                    className={classes.drawingsMoreDetailsMob}
                                  >
                                    Drawings
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="d-flex align-items-center mt-5">
                        <div
                          className={classes.rescheduleBtnMob}
                          onClick={() => {
                            setRescheduleSectionVisibility(
                              !rescheduleSectionVisibility
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Reschedule
                        </div>
                        <div
                          className={classes.cancelBtnMob}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setCancelModalVisibility(true);
                          }}
                        >
                          Cancel
                        </div>
                      </div>
                    </div>
                  </div>
                  {rescheduleSectionVisibility && (
                    <div className="d-flex flex-column my-5">
                      <div className={`${classes.flexbox2LayoutMob}`}>
                        <Calendar />
                      </div>
                      <div className={`mt-4 ${classes.flexbox3LayoutMob}`}>
                        <div
                          className={`mb-5 ${classes.chosenDateInUpcomingTab}`}
                        >
                          Thursday, December 21
                        </div>
                        <div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            1:00 PM
                          </div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            2:30 PM
                          </div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            4:00 PM
                          </div>
                          <Link to="/meeting-rescheduled">
                            <Button className="py-2 mt-4" id={classes.nextBtn}>
                              Reschedule Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              {componentsToRender === "Upcoming" && scheduleNewMeeting && (
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <div className={classes.noUpcomingBookings}>
                    You have no upcoming bookings - start connecting now
                  </div>
                  <div className="my-5">
                    <div
                      className={`${classes.scheduleNewMeetingBtnMob} d-flex justify-content-evenly py-3`}
                      onClick={() => {
                        setScheduleNewMeeting(true);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={scheduleNewMeetingLogo} alt="" />
                      <div>
                        <Link
                          to="/schedule-meeting"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Schedule a new meeting
                        </Link>
                      </div>
                    </div>
                    <div className="my-5">
                      <img style={{ width: "100%" }} src={blueCard} alt="" />
                    </div>
                  </div>
                </div>
              )}
              {componentsToRender === "Schedule new meeting" && (
                <div className="d-flex justify-content-between align-items-start">
                  <div className={`${classes.projectDetailsForm}`}>
                    <Form className="mt-4">
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="name"
                          placeholder="Building Name"
                          id={classes.buildingName}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="city"
                          placeholder="City"
                          id={classes.cityName}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Select id={classes.projectStatus}>
                          <option id={classes.options}>Project Status</option>
                        </Form.Select>
                      </Form.Group>
                      <FloatingLabel
                        // controlId="floatingTextarea2"
                        label="Project Description"
                        id={classes.projectDescription}
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="i.e 3 BH apartment with false ceiling works, and furniture"
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel>
                      <Form.Group>
                        <Form.Label
                          className={`${classes.uploadProjectLabel} mt-4`}
                        >
                          <span>Upload Project Drawing & BOQs </span>
                        </Form.Label>
                        <div className="d-flex justify-content-between">
                          <div className={`${classes.uploadBoxes} w-100 me-1`}>
                            <div>
                              <img className="me-3" src={upload} alt="" />
                            </div>
                            <div>
                              <div className={classes.uploadBoxCaption}>
                                Upload Drawings
                              </div>
                              <div className={classes.optional}>
                                PDF,XLS are allowed
                              </div>
                            </div>{" "}
                            <input
                              type="file"
                              className={`${classes.dragDropInputBoxes} form-control`}
                              multiple=""
                            />
                          </div>
                          <div className={`${classes.uploadBoxes} w-100 ms-1`}>
                            <div>
                              <img className="me-3" src={upload} alt="" />
                            </div>
                            <div>
                              <div className={classes.uploadBoxCaption}>
                                Upload BOQ
                              </div>
                              <div className={classes.optional}>
                                PDF are allowed
                              </div>
                            </div>{" "}
                            <input
                              type="file"
                              class="form-control"
                              multiple=""
                              className={`${classes.dragDropInputBoxes} form-control`}
                            />
                          </div>
                        </div>
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        id={classes.continueBtn}
                        className="mt-4"
                        onClick={() =>
                          setComponentToRender(
                            "Schedule new meeting- Calendar and Time Slots"
                          )
                        }
                      >
                        Continue
                      </Button>
                    </Form>
                  </div>
                </div>
              )}
              {componentsToRender ===
                "Schedule new meeting- Calendar and Time Slots" && (
                <div className="d-flex justify-content-between align-items-start">
                  <div className="">
                    <div className="d-flex justify-content-between mt-4">
                      <div className={`${classes.flexbox1Layout}`}>
                        <div className={classes.vivek}>Vivek Verma</div>
                        <div className={classes.boqHeading}>BOQ Assistance</div>
                        <div className="d-flex my-2">
                          <div>
                            <img src={clock} alt="" />
                          </div>
                          <div className={`${classes.clockTxt} ms-2`}>
                            60 Minutes
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <div>
                            <img src={videoCall} alt="" />
                          </div>
                          <div className={`${classes.videoCallTxt}  ms-1`}>
                            Video conferencing details will be provided 30 min
                            prior to the call
                          </div>
                        </div>
                        <span className={`${classes.proTip} mt-5`}>
                          Please find a time that work best for you to learn
                          more about our product
                        </span>
                      </div>
                      <div className={`ms-5 me-4 ${classes.flexbox2Layout}`}>
                        <Calendar />
                      </div>
                      <div className={`ms-4 me-5 ${classes.flexbox3Layout}`}>
                        <div className={`mb-4 ${classes.chosenDate}`}>
                          Thursday, December 21
                        </div>
                        <div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            1:00 PM
                          </div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            2:30 PM
                          </div>
                          <div className={`${classes.timeslot} my-3 py-2`}>
                            4:00 PM
                          </div>
                          <Link to="/checkout">
                            <Button className="py-2 mt-2" id={classes.nextBtn}>
                              Schedule Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {cancelModalVisibility && (
        <div
          style={{
            position: "fixed",
            top: "0",
            background: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: "2",
          }}
        >
          <div
            className={
              screenWidth > 767
                ? classes.cancelMeetingModal
                : classes.cancelMeetingModalMob
            }
          >
            <div
              className={`${
                screenWidth > 767
                  ? classes.cancelMeetingModalContent
                  : classes.cancelMeetingModalContentMob
              } d-flex flex-column justify-content-center align-items-between`}
            >
              <div
                className={
                  screenWidth > 767
                    ? classes.cancelMeetingQuery
                    : classes.cancelMeetingQueryMob
                }
              >
                Are you sure you want to cancel the scheduled meeting?
              </div>
              <div
                className={`d-flex justify-content-between align-items-center pt-5`}
                style={{ flexDirection: screenWidth < 767 ? "column" : "" }}
              >
                <div
                  className={
                    screenWidth > 767 ? classes.noMistake : classes.noMistakeMob
                  }
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCancelModalVisibility(false);
                  }}
                >
                  No, It’s a mistake
                </div>
                <div
                  className={
                    screenWidth > 767 ? classes.yesCancel : classes.yesCancelMob
                  }
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCancelModalVisibility(false);
                  }}
                >
                  Yes, Cancel
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
