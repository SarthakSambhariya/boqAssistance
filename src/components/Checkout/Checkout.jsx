import React, { useState, useEffect } from "react";
import classes from "./Checkout.module.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Checkout = () => {
  const [gstRequired, setGstRequired] = useState(false);
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
        <div className="d-flex justify-content-center container-fluid" style={{width:"80%"}}>
          <div className="d-flex flex-column container-fluid mt-5">
            <div className={classes.checkoutHeading}>Checkout</div>
            <div className="d-flex" style={{width:"100%"}}>
              <div className="me-5" style={{width:"60%"}}>
                <div className="d-flex">
                  <div className={classes.flexBox1Layout}>
                    <div className={classes.productDetails}>
                      Product Details
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className={classes.boqAssistanceProduct}>
                        BOQ Assistance
                      </div>
                      <div className={classes.boqAssistanceProduct}>
                        ₹ 499/session
                      </div>
                    </div>
                    <div className="my-2">
                      <ul className={classes.productDetailsUl}>
                        <li className="my-2">
                          Get Feedback on any missing Items{" "}
                        </li>
                        <li className="my-2">Get Feedback on Quantitites </li>
                        <li className="my-2">
                          45 min + 15 min Advisory Service{" "}
                        </li>
                      </ul>
                      <Form.Group
                        className="mb-3 d-flex align-items-center"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          //   label="I agree the Terms & Conditions"
                        />
                        <Form.Label
                          className={`${classes.tncCheckbox} ms-2 pt-2`}
                        >
                          I agree to the <b>Terms & Conditions</b>
                        </Form.Label>
                      </Form.Group>
                    </div>
                  </div>
                </div>
                <div className={`mt-3 ${classes.flexBox2Layout}`}>
                  <div className={classes.billingDetails}>
                    Billing Details&nbsp;&nbsp;&nbsp;
                    <span id={classes.optional}>(Optional)</span>
                  </div>
                  <div>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control
                          id={classes.companyName}
                          type="name"
                          placeholder="Company Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          id={classes.billingAddress}
                          type="address"
                          placeholder="Billing address"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3 d-flex align-items-center"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" />
                        <Form.Label
                          className="ms-2 pt-2"
                          id={classes.defaultAddress}
                        >
                          Make this my default address
                        </Form.Label>
                      </Form.Group>
                      <div className="d-flex justify-content-between">
                        <div id={classes.gstRequired}>
                          Do you want a GST Invoice?
                        </div>
                        <div className="d-flex">
                          <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type={"radio"}
                            onClick={() => {
                              setGstRequired(true);
                            }}
                            style={{
                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontWeight: "500",
                              lineHeight: "20px",
                            }}
                          />
                          <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type={"radio"}
                            onClick={() => {
                              setGstRequired(false);
                            }}
                            style={{
                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontWeight: "500",
                              lineHeight: "20px",
                            }}
                          />
                        </div>
                      </div>
                      {gstRequired && (
                        <Form.Group className="mt-3">
                          <Form.Control
                            type="gstnumber"
                            placeholder="GST Number"
                            id={classes.gstNumber}
                          />
                        </Form.Group>
                      )}
                    </Form>
                  </div>
                </div>
              </div>
              <div className={classes["flexBox3Layout"]}>
                <div className={classes["order-border"]}>
                  <div className={classes.productDetails}>Order Summary</div>
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                      <div className={classes.orderDetails}>Order Summary</div>
                      <div className={classes.orderDetails}>499</div>
                    </div>
                    <div id={classes.shippingAndTaxSection}>
                      <div className="d-flex justify-content-between">
                        <div className={`${classes.orderDetails} py-2`}>
                          Shipping
                        </div>
                        <div className={`${classes.orderDetails} py-2`}>--</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className={`${classes.orderDetails} py-2`}>
                          Tax
                        </div>
                        <div className={`${classes.orderDetails} py-2`}>0</div>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      id={classes["orderSummaryTotal"]}
                    >
                      <div className={classes.orderDetails}>Total</div>
                      <div className={classes.orderDetails}>499</div>
                    </div>
                  </div>
                </div>
                <Link to="/meeting-scheduled">
                  <Button className="mt-5 py-2" id={classes.placeOrderBtn}>
                    Place Order
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {screenWidth < 767 && (
        <div className="d-flex p-2 justify-items-center flex-column" style={{width:"100%"}}>
          <div className="d-flex flex-column container-fluid mt-5">
            <div className={classes.checkoutHeadingMob}>Checkout</div>
            <div className="d-flex flex-column">
              <div className="">
                <div className="d-flex">
                  <div className={classes.flexBox1LayoutMob}>
                    <div className={classes.productDetails}>
                      Product Details
                    </div>
                    <div className="d-flex justify-content-between">
                      <div
                        className={`${classes.boqAssistanceProductMob} mt-2`}
                      >
                        BOQ Assistance
                      </div>
                    </div>
                    <div className="my-1">
                      <ul className={classes.productDetailsUlMob}>
                        <li className="my-1">
                          Get Feedback on any missing Items{" "}
                        </li>
                        <li className="my-1">Get Feedback on Quantitites </li>
                        <li className="my-1">
                          45 min + 15 min Advisory Service{" "}
                        </li>
                      </ul>
                      <Form.Group
                        className="mb-3 d-flex align-items-center"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          //   label="I agree the Terms & Conditions"
                        />
                        <Form.Label
                          className={`${classes.tncCheckbox} ms-2 pt-2`}
                        >
                          I agree to the <b>Terms & Conditions</b>
                        </Form.Label>
                      </Form.Group>
                    </div>
                  </div>
                </div>
                <div className={`mt-3 ${classes.flexBox2Layout}`}>
                  <div className={classes.billingDetailsMob}>
                    Billing Details{" "}
                  </div>
                  <div>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control
                          id={classes.companyName}
                          type="name"
                          placeholder="Company Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          id={classes.billingAddress}
                          type="address"
                          placeholder="Billing address"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3 d-flex align-items-center"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" />
                        <Form.Label
                          className="ms-2 pt-2"
                          id={classes.defaultAddress}
                        >
                          Make this my default address
                        </Form.Label>
                      </Form.Group>
                      <div className="">
                        <div id={classes.gstRequired}>
                          Do you want a GST Invoice?
                        </div>
                        <div className="d-flex mt-3">
                          <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type={"radio"}
                            onClick={() => {
                              setGstRequired(true);
                            }}
                            style={{
                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontWeight: "500",
                              lineHeight: "20px",
                            }}
                          />
                          <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type={"radio"}
                            onClick={() => {
                              setGstRequired(false);
                            }}
                            style={{
                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontWeight: "500",
                              lineHeight: "20px",
                            }}
                          />
                        </div>
                      </div>
                      {gstRequired && (
                        <Form.Group className="mt-3">
                          <Form.Control
                            type="gstnumber"
                            placeholder="GST Number"
                            id={classes.gstNumber}
                          />
                        </Form.Group>
                      )}
                    </Form>
                  </div>
                </div>
              </div>
              <div className={classes["flexBox3LayoutMob"]}>
                <div className={classes["order-border"]}>
                  <div className={classes.productDetails}>Order Summary</div>
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                      <div className={classes.orderDetails}>Order Summary</div>
                      <div className={classes.orderDetails}>499</div>
                    </div>
                    <div id={classes.shippingAndTaxSection}>
                      <div className="d-flex justify-content-between">
                        <div className={`${classes.orderDetails} py-2`}>
                          Shipping
                        </div>
                        <div className={`${classes.orderDetails} py-2`}>--</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className={`${classes.orderDetails} py-2`}>
                          Tax
                        </div>
                        <div className={`${classes.orderDetails} py-2`}>0</div>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      id={classes["orderSummaryTotal"]}
                    >
                      <div className={classes.orderDetails}>Total</div>
                      <div className={classes.orderDetails}>499</div>
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
          <Link to="/meeting-scheduled" className={`${classes.nextBtn}`}>
            Place Order
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default Checkout;
