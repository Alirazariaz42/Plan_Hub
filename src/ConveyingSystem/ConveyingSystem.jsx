import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const ConveyingSystem = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Conveying Systems Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              At <strong>PlanHub Estimators </strong>, our primary aim is to
              deliver precise and exhaustive assessments for transporting
              systems across diverse sectors. Our panel of specialists is
              dedicated to assisting you in choosing and establishing the ideal
              transport solutions to boost the effectiveness and output of your
              functions.
            </p>

            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/ConveyingExtrapic.png")}
                width={"100%"}
                alt=""
              />
            </div>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Our Conveying Systems Cost Estimation Process
            </h2>

            <p className=" paragraph">
              <strong>Initial Consultation:</strong>
              We begin by exploring your project objectives, particular material
              handling requirements, and budget limitations. This enables us to
              comprehend the scope and vision of your operations.
            </p>
            {/* <p className=" paragraph">
              <strong>Site Assessment: </strong>
              If needed, we carry out an in-depth site evaluation to account for
              any specific factors that may influence conveyor system selection,
              such as layout, material kind, and flow necessities.
            </p>
            <p className=" paragraph">
              <strong>Conveyor System Selection:</strong>
              Based on your project's specifications, we suggest a variety of
              conveyor systems customized for your distinctive material handling
              wants, whether it's for bulk materials, packages, or specialized
              items.
            </p> */}
            <p className=" paragraph">
              <strong>Detailed Estimate:</strong>
              Our team offers a complete summary of the projected costs for each
              conveyor system type, encompassing equipment costs, installation,
              and any supplementary expenses like controls and integration.
            </p>
            {/* <p className=" paragraph">
              <strong>Initial Consultation</strong>
              We begin by exploring your project objectives, particular material
              handling requirements, and budget limitations. This enables us to
              comprehend the scope and vision of your operations.
            </p> */}
            <p className=" paragraph">
              <strong>Presentation and Approval: </strong>
              We reveal the estimate to you, clarifying each component and
              addressing any questions or concerns you may have.
            </p>
            {/* <p className=" paragraph">
              <strong>Procurement and Installation Management:</strong>
              We handle the procurement process to guarantee that the conveyor
              systems meet the set criteria. Our team can also collaborate with
              equipment providers to supervise proper installation and
              integration.
            </p> */}

            <EffincyAccuracyDelivery />

            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/ConveyingExtrapic2.png")}
                width={"100%"}
                alt=""
              />
            </div>
            {/* <h2 className="ServicesSubCommonHeadings mt-2">
              Operation and Maintenance
            </h2>

            <ul>
              <li className=" paragraph">
                Maintenance and Operation of Elevators
              </li>
              <li className=" paragraph">
                Furniture’s Maintenance and Operation
              </li>
              <li className=" paragraph">
                Dumbwaiter’s Maintenance and Operation
              </li>
              <li className=" paragraph">
                tilities’ Maintenance and Operation
              </li>
              <li className=" paragraph">
                Transportation Maintenance and Operation
              </li>
              <li className=" paragraph">
                Airfield’s Maintenance and Operation
              </li>
              <li className=" paragraph">
                Storefront’s Maintenance and Operation
              </li>
              <li className=" paragraph">Dust smoke detector</li>
            </ul> */}

            {/* <h2 className="ServicesSubCommonHeadings mt-2">Elevators</h2> */}

            {/* <ul>
              <li className=" paragraph">Residential Elevators</li>
              <li className=" paragraph">Electric Traction Elevators</li>
              <li className=" paragraph">
                Electric Traction Elevators for Freight Purposes
              </li>
              <li className=" paragraph">
                Electric Traction Elevators for Passengers
              </li>
              <li className=" paragraph">
                Electric Traction Elevators for Residential Purposes
              </li>
              <li className=" paragraph">
                Electric Traction Service Elevators
              </li>
              <li className=" paragraph">Hydraulic Elevators</li>
             
            </ul> */}

            {/* <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/ConveyingExtrapic3.png")}
                width={"100%"}
                alt=""
              />
            </div> */}

            {/* <h2 className="ServicesSubCommonHeadings mt-2">
            Mechanical Piping Estimating
          </h2>
          <p className=" paragraph">
            Being the best MEP estimating team in the market, we offer highly
            precise estimates to mechanical piping contractors involved in
            welding and installation of the piping systems. Our reliable and
            comprehensive estimates help them in bidding, budgeting,
            procurement, and scheduling. With having the practical knowledge
            of serving commercial and industrial piping projects, we have the
            expertise and skill to perform the cost analysis of the piping
            project of any complexity. We have vast exposure in process and
            utility industries such as petrochemical, paper, pharmaceutical,
            wastewater treatment, power generation, biofuels, etc. We have the
            portfolio of providing estimating solutions for the following
            mechanical piping systems:
            <ul>
              <li>HVAC piping</li>
              <li> Power boilers</li>
              <li>Process piping</li>
              <li>Hydraulic piping</li>
              <li>Control piping</li>
              <li>Gas piping</li>
              <li>Utility piping</li>
              <li>Power plant piping</li>
              <li>Steel mill piping</li>
              <li>Prefabricated piping systems</li>
              <li>Pre insulated piping systems</li>{" "}
              <li>Grooved piping systems</li>
            </ul>
          </p> */}

            {/* <h2 className="ServicesSubCommonHeadings mt-2">
            Moving Walks and Escalators
            </h2>
            <ul>
              <li className=" paragraph">Moving Walks</li>
              <li className=" paragraph">Moving Ramps</li>
              <li className=" paragraph">
              Escalators
              </li>
              <li className=" paragraph">
              Moving Walks and Escalator’s Commissioning
              </li>
              <li className=" paragraph">
              Moving Walks and Escalator’s Rehabilitation
              </li>
              <li className=" paragraph">
              Moving Walks and Escalator’s Maintenance and Operation
              </li>
              <li className=" paragraph">Powered Ramps</li>
              <li className=" paragraph">Motorized Ramps</li>
            </ul> */}
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
