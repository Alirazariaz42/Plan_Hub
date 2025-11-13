import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const LandscapingEstimatins = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Landscaping Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              Our expert landscape estimators provide accurate bids and maximize
              your profits. Industry data shows consistent profitability is
              possible for landscaping contractors, but only with precise
              estimates. <strong>PlanHub Estimators</strong> uses professional
              estimating software for Landscaping Estimating Services with
              features like auto-count and arc functionality to streamline the
              takeoff process, saving you time and money. Let us handle the
              complex calculations while you focus on creating beautiful
              landscapes.
            </p>
            <h2 className="ServicesSubCommonHeadings mt-2">
              How Do We Deliver Accurate Landscaping Estimating Services With
              Landscaping Estimating Software?
            </h2>

            <p className=" paragraph">
              <b>PlanHub Estimators</b> takes the guesswork out of landscaping
              estimates with our user-friendly, cloud-based estimating software
              - Plan Swift. This powerful tool empowers you to:
              <ul>
                <li>
                  Effortlessly Measure Everything: From square footage and
                  volumes to linear dimensions, Plan Swift handles it all, even
                  curved lines!
                </li>
                <li>
                  One-Click Accuracy: Get instant and accurate area calculations
                  for sod, gravel, mulch, and other materials with just a single
                  click.
                </li>
                <li>
                  Professional Estimates Made Easy: Point, click, and
                  drag-and-drop your way to professional-looking estimates that
                  impress clients.
                </li>
                <li>
                  Save Time, Boost Profits: Plan Swift's speed and accuracy free
                  up your time to focus on what matters most - creating stunning
                  landscapes and increasing your bottom line.
                </li>
                <li>
                  {" "}
                  Accurate Material Lists: Our Landscaping Estimating Services
                  Generate precise material lists, from yards of sod needed for
                  a city park to edging for a residential property.
                </li>
                <li>
                  {" "}
                  Master Any Curve: Plan Swift's advanced tools make measuring
                  complex curves a breeze.
                </li>
                <li>
                  {" "}
                  Precise Plant Counts: Quickly determine the exact number and
                  placement of plants needed for your project.{" "}
                </li>
              </ul>
              {/* Our usage of Plan swift manages to generate exact material lists
              that enclose the number of yards anyone acquires for a city park
              and several feet edging for any residential area. Plan Swift can
              effectively assist through its different tools to measure areas,
              volumes and lengths to follow complex curves with a certain ease.
              It is a useful count tool to evaluate the exact amount of plants
              to order and their placement. */}
            </p>
            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/landingpageextraimg.png")}
                width={"100%"}
                alt=""
              />
            </div>
            <h2 className="ServicesSubCommonHeadings mt-2">
              Our Range Of Landscaping Takeoff Services
            </h2>
            <p className=" paragraph">
              We provide professional platform with the appropriate tools to
              deliver the following range of Landscaping takeoff services.
              <ul>
                <li> landscaping estimating </li>
                <li> hardscape estimating </li>
                <li> softscape estimating </li>
                <li> irrigation estimating </li>
                <li> sprinkler system installation cost estimate </li>
                <li> drip irrigation cost estimate </li>
                <li> sprinkler system estimates </li>
                <li> sprinkler system cost estimate </li>
                <li> sprinkler estimate </li>
                <li> sprinkler system price estimate </li>
              </ul>
            </p>
            <EffincyAccuracyDelivery></EffincyAccuracyDelivery>
            <h2 className="ServicesSubCommonHeadings mt-2">
              How To Perform Landscaping Estimating?
            </h2>
            <p className=" paragraph">
              There are a few typical methods that anyone can follow to estimate
              landscaping services for clients all around the world. The
              following are the main measures to take:
              <ul>
                <li>Talk to a client</li>
                <li>Effectively estimate an overhead cost</li>
                <li>Reliable estimate materials costs</li>
                <li>Estimate a subcontractor cost</li>
                <li>Estimate labor costs</li>
                <li>Add a markup</li>
                <li>Calculate the total price</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
