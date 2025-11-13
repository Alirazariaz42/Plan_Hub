import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Services.css";
import CenteralImage from "../Images/CenteralImage.png";
import { CirculerCard } from "../CommonComponents/CirculerCard";
import { AllServicesCardContainer } from "../CommonComponents/AllServicesCardContainer";
import { Banner } from "../CommonComponents/Banner/Banner";
import { PageNameContainer } from "../CommonComponents/PageNameContainer";
import { Link } from "react-router-dom";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";

import AOS from "aos";
import "aos/dist/aos.css";

export const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const text = (
    <>
      <strong>Your Trusted PlanHub Estimators</strong>
      <p>
        <b>PlanHub Estimators </b> is your go-to destination for specialized
        construction cost estimating and material takeoff services, exclusively
        designed for clients within the United States. Our dedicated expertise
        serves individuals and businesses across the nation.
      </p>
    </>
  );
  const img = (
    <>
      <img
        style={{ borderRadius: "20px", boxShadow: "3px 3px 8px 0px black" }}
        className=" ourTradeHTHIclass"
        src={require("../Images/servicex.png")}
        alt=""
      />
    </>
  );
  return (
    <div style={{ backgroundColor: " #CFF0C5" }} className=" ">
      <Helmet>
        <title>
          Construction Cost Estimating & Takeoffs - Your Trusted Partner
        </title>
        <meta
          name="description"
          content="Get accurate construction cost estimating and takeoffs with PlanHub Estimators. We ensure precise project budgeting and planning."
        />
      </Helmet>
      <PageNameContainer pageName="Services" />
      <div className=" mt-4 mb-5">
        <HalfTextHalfImg text={text} img={img} />
      </div>
      {/* Section No.1 */}
      <div className=" container-xl slide-in-left">
        <div className="Section1Container">
          <div className="CenteralImgContainer">
            <img src={CenteralImage} className="CenteralImg" alt="" />
            <Link to="/construction-takeoff-services/">
              <div className="MainServicsNamesContainer1">
                <h6 className="MainServicsNames2 m-0 fw-bold">
                  Construction Takeoff{" "}
                </h6>
              </div>
            </Link>
            <Link className="" to="/cost-estimating-services/">
              {" "}
              <div className="MainServicsNamesContainer2">
                <h6 className="MainServicsNames1 m-0 fw-bold ">
                  Cost Estimating
                </h6>
              </div>
            </Link>
            <Link to="/planning/">
              <div className="MainServicsNamesContainer3 ">
                <h6 className="MainServicsNames3 m-0 fw-bold">Planning</h6>
              </div>
            </Link>
            <Link to="/cost-scheduling/ ">
              <div className="MainServicsNamesContainer4">
                <h6 className="MainServicsNames4 m-0 fw-bold">
                  Cost scheduling
                </h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Section No.2 */}
      {/* <div
        className=" p-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fuga magni
        nemo cupiditate porro quas esse odit, minima animi aut adipisci quis
        quo, inventore ad. Facere nam et pariatur itaque?
      </div> */}
      <Banner />
    </div>
  );
};
