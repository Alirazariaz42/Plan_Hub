import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Images/Biglogo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import FBIcon from "../../Images/FBIcon.png";
import LIicon from "../../Images/LIicon.png";
import { UploadModal } from "../UploadModal/UploadModal";

export const Header = () => {
  const [scrollValue, setScrollValue] = useState(0);
  console.log(scrollValue);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll value from the window's scrollTop property
      const currentScrollValue =
        window.scrollY || document.documentElement.scrollTop;

      // Update the state with the current scroll value
      setScrollValue(currentScrollValue);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [ModalOpen, setModalOpen] = useState(false);

  const changeModal = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <div>
      {ModalOpen ? <UploadModal onCloseBtnClick={changeModal} /> : <div></div>}
      <div className="upperHeader">
        <div className="socialMediaIconContainer">
          <a
            href="https://www.facebook.com/profile.php?id=61553018894291"
            target="blank"
          >
            <img src={FBIcon} alt="" />
          </a>

          <a
            target="blanck"
            href="https://www.linkedin.com/company/81809182/admin/feed/posts/"
          >
            <img src={LIicon} alt="" />
          </a>

          <a
            target="blanck"
            href="https://www.instagram.com/planhubestimating/"
          >
            <img
              src={require("../../Images/LogoInstagram.png")}
              height={23}
              alt=""
            />
          </a>
        </div>
        <div className=" w-100 text-center">
          <span className="displayNoneonSmallDevice" style={{ color: "white" }}>
            TURNAROUND TIME 24-48 HOURS!
          </span>
          <span className="blinking-span">Affordable Estimate (30% off) </span>
        </div>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        className={`bg-body-tertiary p-0 m-0 ${
          scrollValue > 90 ? "PlanHubheader" : ""
        } `}
      >
        <Navbar.Brand href="#home">
          <img className="LogoPic" src={logo} height={47} width={79} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto p-0 m-0">
            <Nav.Link>
              <NavLink className="NavLink  " to="/">
                {" "}
                Home
              </NavLink>
            </Nav.Link>

            <Nav.Link href="#action2">
              <NavLink className="NavLink " to="/service/">
                {" "}
                Services
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#action23">
              <NavLink className="NavLink " to="/our-trades/">
                {" "}
                Our Trades
              </NavLink>
            </Nav.Link>

            <Nav.Link href="#action3">
              <NavLink className="NavLink " to="/about-us/">
                {" "}
                About Us
              </NavLink>
            </Nav.Link>

            <Nav.Link href="#action4">
              <NavLink className="NavLink " to="/payment/">
                {" "}
                Payment
              </NavLink>
            </Nav.Link>

            <Nav.Link href="#action5">
              <NavLink className="NavLink " to="/testimonials/">
                {" "}
                Testimonials{" "}
              </NavLink>
            </Nav.Link>

            {/* <Nav.Link href="#action6">
              <NavLink className="NavLink "> Samples</NavLink>
            </Nav.Link> */}

            <Nav.Link>
              <NavLink className="NavLink " to="/estimating-fee/">
                {" "}
                Estimating Fee
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink className="NavLink " to="/contact-us/">
                {" "}
                Contact Us{" "}
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className=" p-0 m-0">
              <button onClick={setModalOpen} className="GetEstimate">
                Get Estimate
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
