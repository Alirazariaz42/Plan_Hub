import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const FlooringEstimation = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Flooring Estimating & Takeoff Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              Our mission at <strong>PlanHub Estimators</strong> is to provide
              flooring contractors, installation companies, carpet
              manufacturers, architects, designers, and manufacturers with
              expert material calculations and cost estimates. In order to
              reduce waste, we tailor our accurate flooring estimating services,
              taking into account all patterns, inserts, and design elements.
              Our flooring estimates, which include access flooring, stair
              details, stair edging, and more, have been consistently provided
              for multipurpose residential properties, commercial structures,
              apartments, hotels, restaurants, schools, hospitals, arenas,
              banks, libraries, stores, and more. We are equipped to handle
              complex patterns and inserts. Our skilled flooring estimators can
              calculate materials accurately and arrive at the right numbers
              thanks to their proficiency with programs like Planswift, OST,
              Bluebeam, etc. We also give flooring fitters with
              simple-to-understand seam schematics. Our flooring estimate
              deliverables include:
              <br />
              • Digital flooring takeoff file
              <br />
              • Material spreadsheet
              <br />
              • Color-coded plans
              <br />
              • Seaming diagrams
              <br />
              • Takeoff summary including total square feet, seaming & welding
              linear feet, wall base, stair information, etc
              <br />
              • Review of bid documents and addendums
              <br />
            </p>
            <EffincyAccuracyDelivery></EffincyAccuracyDelivery>
            <h2 className="ServicesSubCommonHeadings mt-2">Our Clients</h2>

            <p className=" paragraph">
              <strong>PlanHub Estimators </strong> delivers Floor Estimating
              Services from past many years to different clients that are as
              follows:
              <ul>
                <li>General Contractors </li>
                <li>Flooring Contractors </li>
                <li> Tile Contractors </li>
                <li> Fireproofing Contractors</li>
                <li>Carpet Contractors </li>
                <li>Laminate Flooring Contractors </li>
                <li> Vinyl Flooring Contractors</li>
                <li>Wood Flooring Contractors</li>
              </ul>
            </p>
            <h2 className="ServicesSubCommonHeadings mt-2">
              Our Flooring Estimates
            </h2>
            <p className=" paragraph">
              <strong>PlanHub Estimators </strong> have extensive knowledge of
              how to estimate rapidly to different types of flooring works. It
              mainly includes the following:
              <ul>
                <li> VCT tiles </li>
                <li> LVT floors </li>
                <li>Rubber tiling </li>
                <li>Wooden flooring </li>
                <li> Vinyl Flooring</li>
                <li> Dance Flooring</li>
                <li> Leather Flooring</li>
                <li>Fitness Room Flooring and Mats </li>
                <li> Tile Flooring</li>
                <li>Laminate Flooring </li>
              </ul>{" "}
              Our professional Estimators can handle every particular sort of
              projects, either it’s big in size or small. They usually use
              updated and smart software like Plan Swift for estimating. Our
              Flooring work deals with different types of residential and
              commercial projects that are given below.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Types Of Flooring Estimating Services
            </h2>
            <p className=" paragraph">
              <ul>
                <li> Bid Estimates </li>
                <li> IBudget Estimates </li>
                <li> Change Order Estimates</li>
                <li>Project Lead Generation</li>
                <li> Vendor Quotations </li>
                <li> Design Estimates </li>
                <li>Bid Preparation </li>
              </ul>
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Commercial Flooring Estimating Services
            </h2>
            <p className=" paragraph">
              <ul>
                <li> Arenas </li>
                <li> Schools </li>
                <li>Hospitals </li>
                <li>Shopping Malls</li>
                <li> Airports </li>
                <li> Offices </li>
                <li>Hotels </li>
                <li>Restaurants </li>
                <li>Exhibition Buildings </li>
                <li> Fire Stations</li>
                <li> Warehouses</li>
              </ul>
            </p>
            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/FlooringExtrapic.png")}
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
