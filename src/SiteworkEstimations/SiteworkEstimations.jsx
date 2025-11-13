import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";

export const SiteworkEstimations = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Sitework Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              <strong>PlanHub Estimators</strong> goes beyond just providing
              estimates – we allow sitework contractors, landscaping
              contractors, land developers, general contractors, and site
              contractors to lead bids and streamline workflows. Our team of
              estimators uses latest and cost-effective software to accurately
              analyze drawings and plans, delivering precise takeoffs for
              materials and labor (including manhours) within 24-48 hour. Our
              Sitework Estimating Services understand the unique challenges
              faced by excavation contractors and give reliable and
              cost-effective extension, freeing up valuable time for your team
              to focus on managing busy sites. Our Division 2 specialists, with
              diverse experience in public, commercial, and residential projects
              provide accurate estimates that consider everything from materials
              and labor to permits and contingencies, giving you a clear picture
              of your project's total cost. We offer a range of flexible options
              beyond the Sitework Estimating Services (check out our pricing!),
              And because we understand the importance of constant
              communication, we provide 24/7 support via chat and email ({" "}
              <a
                style={{ color: "black" }}
                href="mailto:AM@planhubestimating.com"
              >
                AM@planhubestimating.com
              </a>{" "}
              ) or Feel Free to Reach us Via Call{" "}
              <a style={{ color: "black" }} href="tel:+1 917 300 1079">
                {" "}
                +1 917 300 1079
              </a>
            </p>
            <h2 className="ServicesSubCommonHeadings mt-2">
              Our Sitework estimating services Portfolio
            </h2>
            {/* <ul>
              <li className=" paragraph">Residential Site work</li>
              <li className=" paragraph">Commercial Site work</li>
              <li className=" paragraph">Industrial Site work</li>
            </ul> */}
            <p className=" paragraph">
              Each sitework project is unique, and{" "}
              <strong>PlanHub Estimators </strong>
              understands this. We use modern equipment and experienced
              estimators to thoroughly examine your drawings and plans,
              producing precise takeoffs for materials, labor, and everything in
              between. Our sitework estimating services provide approach beyond
              the materials and labor, taking into account equipment, insurance,
              logistics, permits, and other expenses to provide a clear view of
              your project's total cost. Looking for cost-effective sitework
              estimating solutions? We provide flexible options to match your
              budget:
              <ul>
                <li>Cost-effective Solutions (check prices)</li>
                <li>Efficiency & Accuracy</li>
                <li>Fast Turnaround Times</li>
                <li>Confidentiality</li>
                <li>Certified Estimators</li>
                <li>24/7 Support on Chat & Email</li>
              </ul>
            </p>
            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/SiteworkExtrapic.png")}
                width={"100%"}
                alt=""
              />
            </div>
            <EffincyAccuracyDelivery />
            <h2 className="ServicesSubCommonHeadings mt-2">
              Scope Of Work In Our Sitework Estimating Services
            </h2>
            <div className=" row w-100 mt-sm-4 m-sm-0">
              <div
                className=" col-md-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <ul className=" paragraph">
                  <li>Clearing & Demolition</li>
                  <li>Earthwork</li>
                  <li>Grading</li>
                  <li>Drainage</li>
                  <li>Utility Spoils</li>
                  <li>Storm Sewer</li>
                  <li>Water distribution</li>
                  <li>Roadways</li>
                  <li>Sidewalk</li>
                  <li>Driveways</li>
                  <li>Pavements</li>
                </ul>
              </div>
              <div
                className=" col-md-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <ul className=" paragraph">
                  <li>Site Furnishing</li> <li>Concrete Flatwork</li>
                  <li>Retaining Walls</li> <li>Climbing Walls</li>
                  <li>Fences & Gates</li> <li>Landscaping</li>
                  <li>Irrigation</li> <li>Fountains</li>
                  <li>Patio</li> <li>Gabions</li>
                  <li>Docks</li>
                </ul>
              </div>
            </div>
            <h2 className="ServicesSubCommonHeadings mt-2">
              Earthwork Estimating Services
            </h2>
            <p className=" paragraph">
              Excavators, site engineers, and specialized contractors require
              earthwork estimating services to determine the overall cost of
              land preparation before beginning construction.{" "}
              <strong>PlanHub Estimators </strong>
              deliver timely and dependable earthwork volumes and material
              takeoffs for bid preparation, allowing them to fulfill important
              deadlines. Our sitework estimating team ensures that quantity
              takeoffs include every high and low elevation point, ridge, swale,
              breakline, hook, top/bottom of the wall, and pad height. Our
              earthwork estimate includes:
              <ul>
                <li>Site excavation report</li>
                <li>Cut/Fill Quantities</li>
                <li>Export or Import Quantities</li>
                <li>Volume Reports</li>
                <li>Top Soil Spreads</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
