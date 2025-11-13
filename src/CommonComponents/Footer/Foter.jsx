import React from "react";
import MFBZONE from "../../Images/MFBZONE.png";
import logo from "../../Images/Biglogo.png";
import location from "../../Images/location.png";
import call from "../../Images/call.png";
import mail from "../../Images/mail.png";
import { Link } from "react-router-dom";
export const Foter = () => {
  return (
    <div>
      <div className=" row m-0 w-100 justify-content-center pt-5 pb-5">
        <div
          className=" col-md-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid black",
          }}
        >
          <div>
            <img src={logo} height={47} width={79} alt="" />
          </div>
        </div>
        <div
          className="col-md-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <p className=" p-2">
              <strong style={{ color: "#20B621" }}>PlanHub Estimators </strong>
              are experienced construction estimating professionals dedicated to
              providing you with reliable and detailed construction estimating
              services.
              <strong style={{ color: "#20B621" }}> PlanHub Estimators </strong>
              understand the importance of having accurate estimates in securing
              profitable contracts and managing project costs effectively.
            </p>
          </div>
        </div>
        <div
          className="col-md-2"
          style={{
            display: "flex",

            justifyContent: "center",
            borderRight: "1px solid black",
            borderLeft: "1px solid ",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <h4>
              {" "}
              <Link style={{ color: "black" }} to="/service/">
                {" "}
                Service
              </Link>{" "}
            </h4>
            <h4>
              {" "}
              <Link style={{ color: "black" }} to="/about-us/">
                About Us
              </Link>
            </h4>
            <h4>
              {" "}
              <Link style={{ color: "black" }} to="/payment/">
                Payment
              </Link>{" "}
            </h4>
            <h4>Projects</h4>
          </div>
        </div>
        <div
          className="col-md-4"
          style={{
            display: "flex",

            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <p style={{color:"black"}} className=" fw-bold"> 
              {" "}
              <img src={location} alt="" className=" me-2" />
              1577 Carroll St, Brooklyn, NY 11213, USA
            </p>
            <p>
              {" "}
              <img src={call} alt="" className=" me-2" />
              <a style={{ color: "black" }} href="tel:+1 917 300 1079">
                {" "}
                +1 917 300 1079
              </a>
            </p>
            <p>
              {" "}
              <img src={mail} alt="" className=" me-2" />
              <a
                style={{ color: "black" }}
                href="mailto:AM@planhubestimating.com"
              >
                AM@planhubestimating.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className=" text-center">
        Copyright © 2024 PlanHub Estimators Designed By
        <a
          style={{ marginLeft: "5px" }}
          href="http://mfbzone.com/"
          target="_blank"
        >
          <img src={MFBZONE} alt="" />
        </a>
      </p>
    </div>
  );
};
