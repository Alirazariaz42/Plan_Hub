import React from "react";

import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const InsulationEstimating = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Insulation Estimating services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              <strong>PlanHub Estimators</strong> offers unique accuracy and
              speed in insulation estimating services, assisting you in
              fulfilling deadlines and securing bids. From small-scale
              residential projects to substantial industrial jobs, we handle
              projects of all sizes. We carefully measure the walls, floors, and
              ceilings using the latest technology, accounting for doors and
              windows to provide accurate estimates. Our goal is to surpass your
              expectations by providing you with accurate cost data and the
              confidence to bid competitively. All forms of insulation are
              covered by <strong>PlanHub Estimators</strong>, including liquid
              foam, spray board, rolls, batts, loose-fill, and foam board. For a
              free consultation, reach out to us right now at{" "}
              <a style={{ color: "black" }} href="tel:+1 917 300 1079">
                {" "}
                +1 917 300 1079
              </a>
            </p>
            <EffincyAccuracyDelivery></EffincyAccuracyDelivery>
            <h2 className="ServicesSubCommonHeadings mt-2">our clients</h2>

            <div className=" row">
              <div className="col-md-6 col-12">
                <p className=" paragraph">
                  <ul>
                    <li>General Contractors </li>
                    <li>Insulation Contractors </li>
                    <li> Mechanical Piping Contractors</li>
                    <li> Fireproofing Contractors</li>
                    <li>Acoustical Contractors </li>
                    <li>HVAC Contractors </li>
                    <li> Pipeline Contractors</li>
                  </ul>
                </p>
              </div>
              <div className="col-md-6 col-12">
                <p className=" paragraph">
                  <ul>
                    <li> Weatherproofing Contractors</li>
                    <li>Roofing Contractors </li>
                    <li>EPC Contractors </li>
                    <li>Insulation Vendors </li>
                    <li> Architects</li>
                    <li> Installers</li>
                    <li> Distributors</li>
                  </ul>{" "}
                </p>
              </div>
            </div>

            <h2 className="ServicesSubCommonHeadings mt-2">
              our Insulation estimating services
            </h2>
            <p className=" paragraph">
              <ul>
                <li> Residential & Commercial Insulation Estimation </li>
                <li> Industrial Mechanical Insulation Estimation</li>
                <li> Thermal Insulation Estimation </li>
                <li>Fireproofing & Firestopping Estimation </li>
                <li> Roofing Estimation </li>
                <li> Waterproofing & Dampproofing Estimation</li>
                <li> Acoustic & Sound Proofing Estimation </li>
                <li>
                  {" "}
                  Estimation of Insulation for boilers, HVAC systems, ductwork,
                  pipeworks, valves, plumbing, equipment, etc.
                </li>
                <li> Material Takeoffs </li>
                <li>Bid Estimates </li>
                <li> Bid Reviews</li>
                <li>Bidding Assistance </li>
                <li>Change Order Estimates </li>
                <li> Preliminary Estimates</li>
                <li> Pre-built Material Estimate </li>
                <li> Value Engineering </li>
                <li> Project Cost Management </li>
                <li> Project Lead Generation </li>
              </ul>
            </p>

            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/insulationExtrapic.png")}
                width={"100%"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
