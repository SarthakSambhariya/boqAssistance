import React, { useState, useEffect } from "react";
// import cartIcon from "../../../../Assets/Dashboard/headerone.svg";
import { SIDE_MENU } from "../Common/navBar";
import user from "./Assets/user.png";
import bell from "./Assets/bell.svg";
import {
  NavDropdown,
  FormControl,
  Button,
  Offcanvas,
  Nav,
  Form,
} from "react-bootstrap";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavItem,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Assets/logo.svg";
import "./header.css";
const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const logoutHandler = () => {
    setSideMenu(false);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const itemClick = () => {
    setSideMenu(false);
  };
  return (
    <React.Fragment>
      {screenWidth > 767 && (
        <div className="header dashboard-header">
          <Container fluid>
            <Row>
              <Col md={12}>
                <Navbar expand="lg" expanded={sideMenu}>
                  <Navbar.Toggle onClick={() => setSideMenu(true)}>
                    <span className="navbar-toggler-icon"></span>
                  </Navbar.Toggle>
                  <img src={Logo} alt="iDesign" />

                  <div
                    className="collapse navbar-collapse justify-content-end interFont"
                    id="navbarSupportedContent"
                  >
                    <div className="d-flex color-change">
                      <NavItem>
                        <div className="dash-head d-flex align-items-center interFont">
                          {/* <img src={cartIcon} alt="user pic" /> */}
                          {}
                          <DropdownButton
                            variant="outline-secondary"
                            title={
                              <div className="pull-left">
                                <img
                                  className="thumbnail-image me-3"
                                  src={bell}
                                  alt="bell"
                                />
                                <img
                                  className="thumbnail-image me-3"
                                  src={user}
                                  alt="user pic"
                                />
                              </div>
                            }
                            id="input-group-dropdown-1"
                          >
                            <Dropdown.Item>
                              <FontAwesomeIcon icon="user" className="me-3" />
                              Profile
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logoutHandler}>
                              <FontAwesomeIcon
                                icon="sign-out-alt"
                                className="me-3"
                              />
                              Logout
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </NavItem>
                    </div>
                  </div>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {screenWidth < 767 && (
        <>
          {["xxl"].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
              <Container fluid>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "100%" }}
                >
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Brand href="#">
                    <img src={Logo} className={classes.Logo} />
                  </Navbar.Brand>
                  <div>
                    <img src={user} alt="" />
                  </div>
                </div>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  style={{ width: "100%" }}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    ></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">
                        <img src={bell} alt="" />
                      </Nav.Link>
                      <Nav.Link href="#action2">
                        <img src={user} alt="" />
                      </Nav.Link>
                    </Nav> */}
                    <div className={classes.sidebarLead}>
                      <ul>
                        {SIDE_MENU.map((item, i) => (
                          <li key={i} className="">
                            <div className={classes.ulBoth}>
                              {item?.target ? (
                                <nobr>
                                  <a
                                    href={item.to}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <img src={item.icon} alt="menu" />
                                    <span>{item.label}</span>
                                  </a>
                                </nobr>
                              ) : (
                                <nobr>
                                  <img src={item.icon} alt="menu" />
                                  <span>{item.label}</span>
                                </nobr>
                              )}
                            </div>
                            {/* {<img src={lock} alt="lock" />} */}
                          </li>
                        ))}
                      </ul>
                      {/* {
          <div className={classes.completeProfile}>
            <h5>
              Complete profile to
              <br />
              Unlock all features.
            </h5>
            <img src={caution} alt="error" />
          </div>
        } */}
                    </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      )}
    </React.Fragment>
  );
};

export default Header;
// {screenWidth>767 && <div className="header dashboard-header">
//         <Container fluid>
//           <Row>
//             <Col md={12}>
//               <Navbar expand="lg" expanded={sideMenu}>
//                 <Navbar.Toggle onClick={() => setSideMenu(true)}>
//                   <span className="navbar-toggler-icon"></span>
//                 </Navbar.Toggle>
//                 <img src={Logo} alt="iDesign" />

//                 <div
//                   className="collapse navbar-collapse justify-content-end interFont"
//                   id="navbarSupportedContent"
//                 >
//                   <div className="d-flex color-change">
//                     <NavItem>
//                       <div className="dash-head d-flex align-items-center interFont">
//                         {}
//                         <DropdownButton
//                           variant="outline-secondary"
//                           title={
//                             <div className="pull-left">
//                               <img
//                                 className="thumbnail-image me-3"
//                                 src={bell}
//                                 alt="bell"
//                               />
//                               <img
//                                 className="thumbnail-image me-3"
//                                 src={user}
//                                 alt="user pic"
//                               />
//                             </div>
//                           }
//                           id="input-group-dropdown-1"
//                         >
//                           <Dropdown.Item>
//                             <FontAwesomeIcon icon="user" className="me-3" />
//                             Profile
//                           </Dropdown.Item>
//                           <Dropdown.Divider />
//                           <Dropdown.Item onClick={logoutHandler}>
//                             <FontAwesomeIcon
//                               icon="sign-out-alt"
//                               className="me-3"
//                             />
//                             Logout
//                           </Dropdown.Item>
//                         </DropdownButton>
//                       </div>
//                     </NavItem>
//                   </div>
//                 </div>
//               </Navbar>
//             </Col>
//           </Row>
//         </Container>
//       </div>}
//       {screenWidth<767 &&
//       <div className="header dashboard-header" style={{width:"100%"}}>
//         <Container fluid>
//           <Row>
//             <Col md={12}>
//               <Navbar expand="lg" expanded={sideMenu}>
//                 <Navbar.Toggle onClick={() => setSideMenu(true)}>
//                   <span className="navbar-toggler-icon"></span>
//                 </Navbar.Toggle>
//                 <img src={Logo} alt="iDesign" />

//                 <div
//                   className="collapse navbar-collapse justify-content-end interFont"
//                   id="navbarSupportedContent"
//                 >
//                   <div className="d-flex color-change">
//                     <NavItem>
//                       <div className="dash-head d-flex align-items-center interFont">
//                         <DropdownButton
//                           variant="outline-secondary"
//                           title={
//                             <div className="pull-left">
//                               <img
//                                 className="thumbnail-image me-3"
//                                 src={bell}
//                                 alt="bell"
//                               />
//                               <img
//                                 className="thumbnail-image me-3"
//                                 src={user}
//                                 alt="user pic"
//                               />
//                             </div>
//                           }
//                           id="input-group-dropdown-1"
//                         >
//                           <Dropdown.Item>
//                             <FontAwesomeIcon icon="user" className="me-3" />
//                             Profile
//                           </Dropdown.Item>
//                           <Dropdown.Divider />
//                           <Dropdown.Item onClick={logoutHandler}>
//                             <FontAwesomeIcon
//                               icon="sign-out-alt"
//                               className="me-3"
//                             />
//                             Logout
//                           </Dropdown.Item>
//                         </DropdownButton>
//                       </div>
//                     </NavItem>
//                   </div>
//                 </div>
//               </Navbar>
//             </Col>
//           </Row>
//         </Container>
//       </div>}
