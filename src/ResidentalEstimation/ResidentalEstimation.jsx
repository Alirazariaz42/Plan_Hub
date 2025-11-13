import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";

export const ResidentalEstimation = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Residential Construction Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              <b>PlanHub Estimators</b> simplifies residential project planning
              with fast, reliable home estimates tailored to your needs.
              <h2 className="ServicesSubCommonHeadings mt-2">
                Here's how we help:
              </h2>
              <p className=" paragraph">
                <ul>
                  <li>
                    {" "}
                    <b> Accurate Detailed Estimates: </b> Our experienced
                    estimators analyze your plans and use advanced software for
                    precise cost predictions, including bidding, procurement,
                    budgeting, and financing goals.
                  </li>
                  <li>
                    {" "}
                    <b> Detailed Breakdowns: </b> We break down labor costs,
                    materials (including zip code specific pricing), and permits
                    for easy budgeting.
                  </li>
                  <li>
                    {" "}
                    <b> Streamlined Communication: </b> Our estimates are
                    delivered in clear formats (Excel spreadsheets, marked-up
                    plans) for easy sharing with vendors.
                  </li>
                  <li>
                    {" "}
                    <b> Digital Takeoff Files: </b> We provide Easily shareable
                    Excel spreadsheets with material quantities and costs.
                  </li>
                  <li>
                    {" "}
                    <b> Marked-Up Plans: </b> We provide Clearly visualization
                    of the scope of work with color-coded plans.
                  </li>
                </ul>
                We provide Clearly visualization of the scope of work with
                color-coded plans.
              </p>
              {/* <ul>
                <li>
                  Residential Detailed Estimate tailored to your specific needs
                  being a contractor, home builder, owner for bidding,
                  procurement, budgeting and financing purposes.
                </li>
                <li>Digital Takeoff EXCEL files</li>
                <li>Material Types & Quantities</li>
                <li>Material & Labor Costs</li>
                <li>Coloured Marked up Plans</li>
                <li>
                  Complete Takeoff Summary containing labor hours, permits,
                  taxes, contingencies, overheads, profit percentages and
                  various other costs.
                </li>
              </ul> */}
            </p>

            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/ResidentalExtrapic.png")}
                width={"100%"}
                alt=""
              />
            </div>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Why Choose Planhub Estimators
            </h2>

            <p className=" paragraph">
              We promise to deliver the following things in our residential
              estimating services:
              <ul>
                <li>Detailed estimates with a high emphasis on accuracy</li>
                <li>
                  Cost-effective solutions at market competitive rates (check
                  prices)
                </li>
                <li>
                  Faster and timely delivery of estimates so you meet your
                  deadlines
                </li>
                <li>Reduce overheads and only pay us when you need us</li>
                <li>
                  Increase efficiency and get more jobs by bidding on more
                  projects
                </li>
                <li>
                  Consultation on smartly filing bids to acquire more projects
                </li>
                <li>Help you Increase your bid-hit ratio and win more bids</li>
                <li>24/7 chat & email support</li>
              </ul>
            </p>
            <EffincyAccuracyDelivery />
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
