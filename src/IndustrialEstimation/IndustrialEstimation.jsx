import React from "react";

import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const IndustrialEstimation = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          industrial construction estimating services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              Use our specialized Industrial estimation services to decrease
              estimating expenses and improve precision, while also benefiting
              from audits and analysis of your estimates and takeoffs by
              experienced construction estimators, provided in the shortest
              possible timeframe. <strong>PlanHub Estimators </strong>is
              well-known for offering complete estimating services to EPC
              contractors, owners, engineering firms, financial backers, and
              collaborators in the North American industrial sector. Our
              estimating services are particularly tailored to our clients'
              specific needs, and range from project conceptualization and A to
              construction. Our extensive methodology for accurate estimates,
              supported by knowledge and the use of cutting-edge technology,
              allows them to predict, orchestrate, and efficiently manage costs
              over the project's entire lifecycle. Contact us via (
              <a
                style={{ color: "black" }}
                href="mailto:AM@planhubestimating.com"
              >
                AM@planhubestimating.com
              </a>
              ) or{" "}
              <a style={{ color: "black" }} href="tel:+1 917 300 1079">
                {" "}
                +1 917 300 1079
              </a>
            </p>

            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/industrialExtrapic.png")}
                width={"100%"}
                alt=""
              />
            </div>
            <EffincyAccuracyDelivery />

            <h2 className="ServicesSubCommonHeadings mt-2">
              Our Range of Industrial Estimating services
            </h2>

            <p className=" paragraph">
              <ul>
                <li>
                  {" "}
                  Comprehensive quantity takeoffs and cost estimates for all
                  divisions{" "}
                </li>
                <li> Estimates for quality assurance and quality control </li>
                <li> Expert eye witnesses</li>
                <li> Cold eyes reviews </li>
                <li>Bid Evaluation & Management </li>
                <li> Procurement Services </li>
                <li> Change Order Preparation & Review </li>
                <li> Feasibility Studies </li>
                <li> Risk Analysis </li>
                <li> Productivity Analysis </li>
                <li> Project Scheduling </li>
                <li>Project Cost Management </li> <li> Value Engineering </li>
              </ul>
            </p>
            <h2 className="ServicesSubCommonHeadings mt-2">
              Industrial Structural Steal Estimating services
            </h2>
            <p className=" paragraph">
              With the team of estimators and engineers skilled in steel
              estimation, we have successfully catered many structural steel
              contractors and design firms involved in the steel erection for
              multi-story buildings and industrial facilities. By employing the
              best estimating practices, our estimators prepare the accurate
              structural steel estimates that not only help in planning,
              bidding, procurement, but also minimize wastages that contribute
              to the green environment. Our takeoffs contain the detailed
              breakdown of all the structural steel design components such as
              channels, beams, angles, plates, connectors and other accessories
              to give you a clear picture of costs involved in your project.
              <br></br>
              We generally quantify the following components:
              <ul>
                <li>Rebar</li>
                <li>Piping</li>
                <li>Roofing</li>
                <li>Siding</li>
                <li>Louvers</li>
                <li>Platforms</li>
                <li>Railings</li>
                <li>Ladders</li>
                <li>Grating</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
