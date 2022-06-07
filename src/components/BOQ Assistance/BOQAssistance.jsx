import React, { useState, useEffect } from "react";
// import Header from "../Header";
import classes from "./BOQAssistance.module.css";
import blueBanner from "./Assets/blueBanner.svg";
import blueBannerMob from "./Assets/blueBannerMob.svg";
import rateAdvice from "./Assets/rateAdvice.svg";
import advisoryService from "./Assets/advisoryService.svg";
import feedback from "./Assets/feedback.svg";
import assistance from "./Assets/assistance.svg";
import arrow from "./Assets/arrow.svg";
import arrowDown from "./Assets/arrowDown.svg";
import { Modal, Button, Form, CloseButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

const BOQAssistance = () => {
  const [backdropVisibility, setBackdropVisibility] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const openTnCHandler = () => {
    setBackdropVisibility(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <React.Fragment>
      {screenWidth > 767 && (
        <>
          <Modal show={backdropVisibility} onHide={openTnCHandler} centered>
            <Modal.Body>
              <CloseButton
                style={{ float: "right" }}
                onClick={openTnCHandler}
              />
              <div>
                <div className={`${classes.TnCHeading} my-4 ms-2`}>
                  Terms & Conditions
                </div>
                <ul className={classes.termsUl}>
                  <li className="my-2">
                    This is a advisory service and Commercial Manager will not
                    calculate detailed quantities
                  </li>
                  <li className="my-2">
                    The team cannot guarantee complete validation, but will only
                    guide you to validate better
                  </li>
                  <li className="my-2">Rates will be advisory only</li>
                </ul>
                <Form.Group
                  className="mb-3 ms-3"
                  controlId="formBasicCheckbox"
                  id={classes.agreementCheckbox}
                >
                  <Form.Check
                    type="checkbox"
                    label={`I understand the Terms and Conditions mentioned above`}
                    id={classes.checkboxColor}
                    onClick={() => setCheckboxChecked(!checkboxChecked)}
                  />
                </Form.Group>
                {!checkboxChecked && (
                  <Button id={classes.agreebutton} disabled>
                    I Agree
                  </Button>
                )}
                {checkboxChecked && (
                  <Link to="/project-details">
                    <Button id={classes.agreebutton}>I Agree</Button>
                  </Link>
                )}
              </div>
            </Modal.Body>
          </Modal>
          <div className="d-flex">
            <div
              className="container-fluid mt-5 ms-5"
              id={classes["firstPage"]}
            >
              <div className={classes["BOQheading"]}>BOQ ASSISTANCE</div>
              <div className="d-flex">
                <div className={classes["BOQSubheading"]}>
                  Get advice on rates and specifications for Vendors and Client
                  quotations
                </div>
                <div className={classes.benefitstxt}>Benefits</div>
              </div>

              <div className="d-flex">
                <div className={`${classes.blueBannerImg}`}>
                  <img src={blueBanner} alt="" />
                  <div
                    className={`${classes.continueBtnText}`}
                    onClick={() => {
                      setBackdropVisibility(true);
                    }}
                  >
                    Continue
                  </div>
                </div>
                <div>
                  <div className="d-flex m-4">
                    <div className={`${classes["benefit-card-shadow"]} mx-4 `}>
                      <div className="d-flex flex-column align-items-center ">
                        <img
                          src={rateAdvice}
                          alt="benefits"
                          className={classes["benefit-card-logo"]}
                        />
                        <div className={classes["benefit-card-logo-caption"]}>
                          Connect with <b>Experts</b> and get <b>Rate Advice</b>
                        </div>
                      </div>
                    </div>
                    <div className={classes["benefit-card-shadow"]}>
                      <div className="d-flex flex-column align-items-center">
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
                  <div className="d-flex m-4">
                    <div className={`${classes["benefit-card-shadow"]} mx-4`}>
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={feedback}
                          alt="benefits"
                          className={classes["benefit-card-logo"]}
                        />
                        <div className={classes["benefit-card-logo-caption"]}>
                          Get Feedback on any <b>missing Items</b>
                        </div>
                      </div>
                    </div>
                    <div className={classes["benefit-card-shadow"]}>
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={assistance}
                          alt="benefits"
                          className={classes["benefit-card-logo"]}
                        />
                        <div className={classes["benefit-card-logo-caption"]}>
                          Get Feedback on <b>Quantitites</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${classes.howItWorks} mb-4`}>
                  How it Works?
                </div>
                <div className="d-flex">
                  <div className="d-flex align-items-center me-4">
                    <div className={`${classes.stepCircle} me-4`}>1</div>
                    <div className={`${classes.stepCircletext}`}>
                      Provide project details and drawings
                    </div>
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center me-4">
                    <div className={`${classes.stepCircle} me-4`}>2</div>
                    <div className={`${classes.stepCircletext}`}>
                      Schedule your consultation
                    </div>
                    <div>
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center me-4">
                    <div className={`${classes.stepCircle} me-4`}>3</div>
                    <div className={`${classes.stepCircletext}`}>
                      Review and Checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {screenWidth < 767 && (
        <>
          <Modal show={backdropVisibility} onHide={openTnCHandler} centered>
            <Modal.Body>
              <CloseButton
                style={{ float: "right" }}
                onClick={openTnCHandler}
              />
              <div>
                <div className={`${classes.TnCHeading} my-4 ms-2`}>
                  Terms & Conditions
                </div>
                <ul className={classes.termsUl}>
                  <li className="my-2">
                    This is a advisory service and Commercial Manager will not
                    calculate detailed quantities
                  </li>
                  <li className="my-2">
                    The team cannot guarantee complete validation, but will only
                    guide you to validate better
                  </li>
                  <li className="my-2">Rates will be advisory only</li>
                </ul>
                <Form.Group
                  className="mb-3 ms-3"
                  controlId="formBasicCheckbox"
                  id={classes.agreementCheckbox}
                >
                  <Form.Check
                    type="checkbox"
                    label={`I understand the Terms and Conditions mentioned above`}
                    id={classes.checkboxColor}
                    onClick={() => setCheckboxChecked(!checkboxChecked)}
                  />
                </Form.Group>
                {!checkboxChecked && (
                  <Button id={classes.agreebuttonMob} disabled>
                    I Agree
                  </Button>
                )}
                {checkboxChecked && (
                  <Link to="/project-details">
                    <Button id={classes.agreebuttonMob}>I Agree</Button>
                  </Link>
                )}
              </div>
            </Modal.Body>
          </Modal>
          <div className="d-flex" style={{width:"100%"}}>
            <div className="container mt-5" id={classes["firstPage"]}>
              <div className={classes["BOQheadingMob"]}>BOQ ASSISTANCE</div>
              <div className="d-flex my-3">
                <div className={classes["BOQSubheadingMob"]}>
                  Get advice on rates and specifications
                </div>
              </div>

              <div className={`${classes.blueBannerImgMob}`}>
                <img src={blueBannerMob} alt="" />
                <div
                  className={`${classes.continueBtnTextMob}`}
                  onClick={() => {
                    setBackdropVisibility(true);
                  }}
                >
                  Continue
                </div>
              </div>
              <Slider {...settings} style={{ width: "100%", margin: "2rem 0" }}>
                <div className={`${classes["benefit-card-shadow-mob"]} px-4 `}>
                  <div className="d-flex justify-content-evenly align-items-center ">
                    <img
                      src={rateAdvice}
                      alt="benefits"
                      className={classes["benefit-card-logo-mob"]}
                    />
                    <div className={classes["benefit-card-logo-caption-mob"]}>
                      Connect with a <b>Commercial Expert</b> and get{" "}
                      <b>Advice on Rates</b>
                    </div>
                  </div>
                </div>
                <div className={`${classes["benefit-card-shadow-mob"]} `}>
                  <div className="d-flex align-items-center ">
                    <img
                      src={advisoryService}
                      alt="benefits"
                      className={classes["benefit-card-logo-mob"]}
                    />
                    <div className={classes["benefit-card-logo-caption-mob"]}>
                      <b>45 min + 15 min</b> Advisory Service
                    </div>
                  </div>
                </div>
                <div className={`${classes["benefit-card-shadow-mob"]} `}>
                  <div className="d-flex align-items-center ">
                    <img
                      src={feedback}
                      alt="benefits"
                      className={classes["benefit-card-logo-mob"]}
                    />
                    <div className={classes["benefit-card-logo-caption-mob"]}>
                      Get Feedback on any <b>missing Items</b>
                    </div>
                  </div>
                </div>
                <div className={`${classes["benefit-card-shadow-mob"]} `}>
                  <div className="d-flex align-items-center ">
                    <img
                      src={assistance}
                      alt="benefits"
                      className={classes["benefit-card-logo-mob"]}
                    />
                    <div className={classes["benefit-card-logo-caption-mob"]}>
                      Get Feedback on <b>Quantitites</b>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="my-5">
                <div className={`${classes.howItWorks} mb-5`}>
                  How it Works?
                </div>
                <div className="d-flex flex-column align-items-evenly align-content-evenly">
                  <div className="d-flex flex-column align-items-center">
                    <div className={`${classes.stepCircletextMobOne}`}>
                      Upload Drawings and Projects
                      <div className={`${classes.stepCircleMob}`}>1</div>
                    </div>
                    <div>
                      <img src={arrowDown} alt="" />
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <div className={`${classes.stepCircletextMobTwo}`}>
                      Schedule your consultation
                      <div className={`${classes.stepCircleMob}`}>2</div>
                    </div>
                    <div>
                      <img src={arrowDown} alt="" />
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <div className={`${classes.stepCircletextMobThree}`}>
                      Checkout & Add Meeting to your Calender
                      <div className={`${classes.stepCircleMob}`}>3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default BOQAssistance;
