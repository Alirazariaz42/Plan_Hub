import React from "react";

import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const InteriorExteriorFinishes = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Interior and Exterior Finishes Estimating services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              In building construction, estimates for both exterior and interior
              finishes are essential. To get work and give customers accurate
              quotes, contractors need to do calculations for painting,
              plastering, stucco, and specialty coatings. Requests for material
              takeoff and bids are frequently issued in order to expedite the
              acquisition of materials. Accurate estimates are vital to
              contractors, who are accountable for any inaccuracies in the
              estimates; for this reason, professionalism, experience, and
              tried-and-true methods are common in the estimation industry. For
              this reason, outsourcing estimations can save a lot of money
              compared to doing it internally—as long as accuracy is guaranteed.
              Exterior and interior coatings, metallics, patinas, and chrome are
              examples of expensive features.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              The Range Of Finishes Estimating Services
            </h2>
            <p className=" paragraph">
              <ul>
                <li>Material Takeoffs</li>
                <li>Flooring Estimates</li>
                <li>Painting Estimates</li>
                <li>Ceiling Estimates</li>
                <li>Drywall Estimates</li>
                <li>Stucco Estimates</li>
                <li>Bid Estimate</li>
                <li>Bid Reviews</li>
                <li>Budget Estimate</li>
                <li>Change Order Estimate</li>
                <li>Project Lead Generation</li>
                <li>Subcontractor Marketing</li>
              </ul>
            </p>
            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/FinishesExtrapic.png")}
                width={"100%"}
                alt=""
              />
            </div>
            <EffincyAccuracyDelivery />
            <h2 className="ServicesSubCommonHeadings mt-2">
              Flooring Estimating Services
            </h2>
            <p className=" paragraph">
              At <b>PlanHub Estimators</b>, our goal is to offer professional
              material calculations and cost projections for flooring
              contractors, installation firms, carpet factories, architects,
              designers, and manufacturers. We customize our precise flooring
              estimation services to limit waste, considering all patterns,
              inserts, and design features. Equipped to manage intricate
              patterns and inserts, we have reliably supplied flooring
              estimates, which include access flooring, stair details, stair
              edging, and more for multi-purpose residential properties,
              commercial structures, apartments, hotels, restaurants, schools,
              hospitals, arenas, banks, libraries, stores, etc. Our professional
              flooring estimators are proficient with tools like Planswift,
              OST(on-screen takeoff), Bluebeam, etc., to perform accurate
              material calculations and achieve the correct figures. We also
              provide easy-to-understand seam diagrams for flooring installers.
              What we deliver in our flooring estimates includes: Digital
              flooring calculation files, Material spreadsheets, color-coded
              plans, seam diagrams, summary of calculations including total
              square footage, seam & welding linear feet, wall base, stair
              information, etc, along with the review of bidding documents and
              addenda.
              <br />
              Our flooring estimate deliverables include:
              <ul>
                <li>Digital flooring takeoff file</li>
                <li>Material spreadsheet</li>
                <li>Color-coded plans</li>
                <li>Seaming diagrams</li>
                <li>
                  Takeoff summary including total square feet, seaming & welding
                  linear feet, wall base, stair information, etc
                </li>
                <li>Review of bid documents and addendums</li>
              </ul>
            </p>

            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/FinishesExtrapic2.png")}
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
