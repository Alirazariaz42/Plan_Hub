import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import ConcreteEstimationPic from "../Images/ConcreteEstimationPic.png";
import "./ConcreteEstimation.css";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const ConcreteEstimation = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Concrete Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              We provide an invaluable service for builders, contractors, and
              homeowners alike in analyzing the financial implications of their
              concrete projects through our concrete estimating services. Our
              comprehensive concrete pricing procedure factors in all expenses
              related to the completion of the build. Our expert team of
              concrete cost estimators are skillfully versed in current market
              costs and fluctuations. They generate accurate and reliable
              concrete cost forecasts using the latest in technology and
              methodologies.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Our Estimation Process
            </h2>
            <p className=" paragraph">
              Concrete estimation involves an in-depth analysis of the client's
              submitted design plans to determine the scope of the task.
              Following that, a digital takeoff is carried out utilizing
              software packages like Bluebeam, Planswift, or OST(on-screen
              takeoff). The generated values are then transferred to EXCEL
              spreadsheets and labeled with detailed line item descriptions. we
              provide 24/7 support via chat and email ({" "}
              <a
                style={{ color: "black" }}
                href="mailto:AM@planhubestimating.com"
              >
                AM@planhubestimating.com
              </a>
              ). Our Concrete Estimating Services provide takeoff spreadsheet
              includes the breakdown of the following quantities:
              <ul>
                <li>
                  The amount of concrete needed for slabs, piers, footings,
                  headers, grade beams, tie beams, foundation walls, columns,
                  lintels, platforms, steps, etc. It also includes an estimate
                  of transportation costs and required equipment, such as
                  cranes, pumps, mixers, and so on.
                </li>

                <li>
                  The costs of concrete structure which is determined by the
                  type of framework, whether it is purchased or rented, repairs,
                  accompanying equipment, shipping expenses, manpower, and other
                  factors.
                </li>
                {/* <li>
                  Concrete reinforcements including structural rebar, wire mesh,
                  plastic mesh, stirrups, dowels, anchors, etc.{" "}
                </li> */}
              </ul>
              Concrete reinforcements include structural rebar, wire mesh,
              plastic mesh, stirrups, dowels, anchors, and more.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              The Range of Concrete Estimating Services
            </h2>

            <ul>
              <li className=" paragraph">Concrete Quantity Takeoffs</li>{" "}
              <li className=" paragraph">Budget & Bid Estimates</li>
              <li className=" paragraph">Bid Preparation</li>{" "}
              <li className=" paragraph">Design Estimates</li>
              <li className=" paragraph">Change Order Estimates</li>{" "}
              <li className=" paragraph"> Value Engineering</li>
              <li className=" paragraph">Project Lead Generation</li>{" "}
              <li className=" paragraph">Concrete Contractor Marketing</li>
              <li className=" paragraph">Expert Witness</li>{" "}
              <li className=" paragraph">Litigation Assistance</li>
            </ul>

            <img
              src={ConcreteEstimationPic}
              className="ConcreteEstimationPic"
              alt=""
            />
            <EffincyAccuracyDelivery />
            <h2
              style={{ textTransform: "capitalize" }}
              className="ServicesSubCommonHeadings mt-4"
            >
              our portfolio in concrete takeoff services
            </h2>
            <p className=" paragraph">
              <ul>
                <li>Dams</li>
                <li>Bridges</li>
                <li>Residential Buildings</li>
                <li>Commercial Buildings</li>
                <li>Foundations For High Rise Buildings</li>
                <li>Highways</li>
                <li>Driveways</li>
                <li>Culverts And Sewers</li>
                <li>Marine Structures</li> <li>Fences</li>
              </ul>
              From big construction companies to small businesses, we have
              served many{" "}
              <b>
                {" "}
                general contractors, concrete contractors, asphalt contractors,
                foundation contractors, vendors, and pavers{" "}
              </b>{" "}
              with the most accurate and highly detailed concrete estimating
              services and material takeoffs services.
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
