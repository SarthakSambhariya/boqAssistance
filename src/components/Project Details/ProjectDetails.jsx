import React, { useState, useEffect } from "react";
import classes from "./projectDetails.module.css";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import upload from "./Assets/upload.svg";
import proTip from "./Assets/proTip.svg";
import accountCircle from "./Assets/accountCircle.svg";
import { Link } from "react-router-dom";
const ProjectDetails = () => {
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
        <div className="w-100" style={{ margin: "auto" }}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className={classes.projectDetailsHeading}>
              Enter your Project Detail
            </div>
            <div
              className={`${classes.projectDetailsForm} mt-5 pt-5 pb-4 px-4`}
            >
              <Form className="mt-4">
                <Form.Group className="mb-3" 
                // controlId="name1"
                >
                  <Form.Control
                    type="name"
                    placeholder="Building Name/Area Name"
                    id={classes.buildingName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" 
                // controlId="city1"
                >
                  <Form.Control
                    type="city"
                    placeholder="City"
                    id={classes.cityName}
                  />
                </Form.Group>
                <FloatingLabel
                  // controlId="floatingTextarea21"
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
                  <Form.Label className={`${classes.uploadProjectLabel} mt-4`}>
                    <span>Upload Project Drawing & BOQs </span>
                    <span className={classes.optional}>(Optional)</span>
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
                        <div className={classes.optional}>PDF are allowed</div>
                      </div>{" "}
                      <input
                        type="file"
                        multiple=""
                        className={`${classes.dragDropInputBoxes} form-control`}
                      />
                    </div>
                  </div>
                </Form.Group>
                <div className="d-flex mt-4">
                  <img className="me-3" src={proTip} alt="" />
                  <div className={`${classes.proTip}`}>
                    Pro Tip: Providing drawings or tentative BOQs help in a
                    better consultation
                  </div>
                </div>
                <Link
                  to="/schedule-consultation"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="primary"
                    type="submit"
                    id={classes.continueBtn}
                    className="mt-4"
                  >
                    Continue
                  </Button>
                </Link>
              </Form>
              <img src={accountCircle} alt="" id={classes.accountCircle} />
            </div>
          </div>
        </div>
      )}
      {screenWidth < 767 && (
        <div className="d-flex flex-column" style={{ position: "relative" }}>
          <div className="">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className={`${classes.projectDetailsFormMob} mt-5 pt-5 pb-4 px-4`}
              >
                <Form className="mt-4">
                  <Form.Group className="mb-3" 
                  // controlId="nameMob"
                  >
                    <Form.Control
                      type="name"
                      placeholder="Building Name/Area Name"
                      id={classes.buildingNameMob}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" 
                  // controlId="cityMob"
                  >
                    <Form.Control
                      type="city"
                      placeholder="City"
                      id={classes.cityNameMob}
                    />
                  </Form.Group>
                  <FloatingLabel
                    // controlId="floatingTextarea2Mob"
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
                    <div className={`${classes.proTip}`}>
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
      {screenWidth < 767 && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ position: "fixed", bottom: "0", width: "100%" }}
        >
          <Link to="/" className={`${classes.previousBtn}`}>
            Previous
          </Link>
          <Link to="/schedule-consultation" className={`${classes.nextBtn}`}>
            Next
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProjectDetails;
