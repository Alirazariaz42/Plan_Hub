import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
export const WoodAndPlastic = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Lumber Takeoff Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              Welcome to <b> PlanHub Estimators</b>, where our expertise lies in
              delivering top-notch wooden and plastic materials tailored for
              construction endeavors. Our comprehensive selection of products,
              coupled with proficient consultation, guarantees that your
              ventures reap the advantages of both natural and man-made
              materials
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              What Do We Deliver In Our Lumber Takeoffs?
            </h2>
            <p className=" paragraph">
              Our lumber takeoffs include all the details like timber or lumber,
              labor cost, labor-hours, and transportation cost. Through these
              details, we have helped them in winning the bids and in getting
              good markups. Furthermore, our estimates have also helped General
              contractors and builders to negotiate with their suppliers. Moving
              forward, we also include an accurate lumber cut list. It eases the
              woodworkers with the lineal foot to board foot conversions. This
              ensures that the most of the timber is used with minimum wastage.
              <br />
              Our Deliverables for The Lumber Takeoff Comprises
              <ul>
                <li>Lumber takeoff EXCEL sheets</li>
                <li>Labor and material costs</li>
                <li>Man Hours</li>
                <li>Marked up drawing plans</li>
                <li>Lumber cut list</li>
                <li>
                  Bid Summary comprising total material. labor & equipment
                  costs, profit percentage, overheads, insurance, logistics,
                  permits, taxes, and various other costs.
                </li>
                <li>Complete review of inclusions and exclusions</li>
              </ul>
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Our Lumber Estimator Expertise
            </h2>

            {/* <h2 className="ServicesSubCommonHeadings mt-2">
              Our Lumber Estimator Expertise
            </h2> */}
            <p className=" paragraph">
              We have a dedicated lumber estimator for woodwork and lumber, who
              has past experience of working with various contractors in
              America. Our team of construction cost estimators ensures each
              project is met with strict policies and guidelines of the
              certified American estimators organization like American
              Association of Cost Engineers (AACE) and the Australian Institute
              of Quantity Surveyors (AIDS). Our Lumber estimator figures out
              each and every wood sill, structural and non-structural lumber and
              fascia in your plans and takeoff and describes them in detail. Our
              wood-plastic composites estimating services are reliable and
              accurate.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              our range of lumber estimating services
            </h2>
            <p className=" paragraph">
              <ul>
                <li>Lumber Takeoffs</li>
                <li>Framing Takeoffs</li>
                <li>Lumber Cut Lists</li>
                <li>Bid Estimates</li>
                <li>Budget Estimates</li>
                <li>Project Lead Generation</li>
                <li>Preliminary Estimates</li>
                <li>Bidding Assistance</li>
                <li>Subcontractor Marketing</li>
                <li>Change Orders</li>
                <li>Value Engineering</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
