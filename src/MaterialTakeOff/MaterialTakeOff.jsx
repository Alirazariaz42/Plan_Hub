import React from "react";

import { ServicesSidebar } from "../CommonComponents/ServicesSidebar";
import { Link } from "react-router-dom";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const MaterialTakeOff = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-xl">
        <h1 className="ServicesCommonHeadings">Material Takeoff Services</h1>
        <div>
          <div className=" row m-0 w-100 ">
            <div className="col-lg-3 col-12 hideonMediumScreen  ">
              <ServicesSidebar servicename="TakeOffServices" />
            </div>
            <div className="col-lg-9 col-12">
              <div>
                <p className="paragraph">
                  Our material estimation services aid in effectively
                  strategizing your project budget. By utilizing our services,
                  you boost efficiency and save time. We provide comprehensive
                  reports of expected expenses and materials needed for your
                  project, allowing you to submit competitive bids and begin
                  work promptly. Planning ahead with accurate quantity
                  estimations will preserve time and resources by ensuring you
                  have everything essential. Our team has confidently delivered
                  extensive material estimation services and consulting
                  solutions for a wide range of projects. We excel in both new
                  construction endeavors and renovations across various sectors.
                  Through our expertise, we assure precise and reliable
                  outcomes, contributing to the accomplishment of every project.
                  Depend on us to handle your quantity estimation needs with
                  confidence and professionalism, irrespective of the project's
                  scale or complexity.
                </p>
                <h2 className="ServicesSubCommonHeadings">
                  Material Takeoff List - Quantity Takeoff Services{" "}
                </h2>
                <div className="row m-0 w-100">
                  <div className="col-md-6">
                    <p className=" paragraph">
                      <ul>
                        <li> General Requirement</li>
                        <li> Site Works </li>
                        <li> Concrete </li>
                        <li>Masonry </li>
                        <li> Finishes</li>
                        <li> Specialties</li>
                        <li>Equipment </li>
                        <li>Furnishings </li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className=" paragraph">
                      <ul>
                        <li>Metals </li>
                        <li>Wood and Plastics </li>
                        <li> Thermal and Moisture Protection </li>
                        <li>Doors and Windows </li>
                        <li> Special Construction</li>
                        <li>Conveying Systems </li>
                        <li> Mechanical/Plumbing</li>
                        <li>Electrical </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <EffincyAccuracyDelivery />
                <h2 className="ServicesSubCommonHeadings">
                  construction software
                </h2>
                <p className=" paragraph">
                  Our estimators are skilled in various construction software
                  tools such as PlanSwift, Bluebeam, On Screen Takeoff (OST) and
                  MS Project (Scheduling) .
                </p>
                <h2 className="ServicesSubCommonHeadings">take-off formate</h2>
                <p className=" paragraph">
                  {" "}
                  Our work would be in editable excel sheet – if required, we
                  can use your template or can put your company details on the
                  estimate/proposal. For to do quantities takeoff – we use
                  software Planswift, BlueBeam, On Screen Takeoff (OST). Mostly
                  we use Planswift. We will be very happy to provide Software
                  files as well as Markups/color drawings (if required).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
