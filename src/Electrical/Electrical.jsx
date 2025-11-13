import React from "react";

import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const Electrical = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Electrical Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
            <strong>PlanHub Estimators</strong> goes beyond basic electrical estimating. Our team of
              experienced estimators, engineers, and industry experts
              collaborate to create customized solutions for your project, from
              material takeoffs to value engineering. We use the latest software
              like Planswift and Bluebeam to deliver accurate, detailed
              electrical estimates that give you a competitive edge in the
              bidding process. We provide 24/7 support via chat and email ({" "}
              <a
                style={{ color: "black" }}
                href="mailto:AM@planhubestimating.com"
              >
                AM@planhubestimating.com
              </a>{" "}
              ) or Feel Free to Reach us Via Call
              <a style={{ color: "black" }} href="tel:+1 917 300 1079">
                {" "}
                +1 917 300 1079
              </a>
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Residential Electrical Estimating Services
            </h2>

            <p className=" paragraph">
              Our detailed takeoffs ensure accurate pricing for every component,
              from power lines to lighting. PlanHub's residential estimating
              gets your bids right, fast. We handle new builds, renovations,
              smart homes, eco-homes, etc . Our detailed takeoffs ensure
              accurate estimates for:
              <ul>
                <li> Power source & distribution </li>

                <li> Electrical infrastructure</li>

                <li> Lighting & appliances </li>
              </ul>
            </p>
            <h2 className="ServicesSubCommonHeadings mt-2">Our Benefits:</h2>
            <p className=" paragraph">
              <ul>
                <li> Win more projects: Accurate bids = happy clients.</li>
                <li> Focus on what matters: Let us handle the estimating.</li>
                <li>
                  {" "}
                  Streamlined procurement: Get the right materials, on time, on
                  budget.
                </li>
              </ul>
            </p>
            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/ElectricalExtrapic.png")}
                width={"100%"}
                alt=""
              />
            </div>
            <EffincyAccuracyDelivery />

            <h2 className="ServicesSubCommonHeadings mt-2">
              Commercial Electrical Estimating Services
            </h2>
            <p className=" paragraph">
              Electricians and contractors, win bids with PlanHub's residential
              electrical estimating! We handle all projects, from new builds to
              smart homes, with careful takeoffs covering everything from power
              sources to lighting. Our meticulous takeoff process ensures
              accurate estimates for:
              <ol>
                <li> Power source & distribution</li>
                <li> Electrical infrastructure</li>
                <li> Lighting & appliances</li>
              </ol>
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Industrial Electrical Estimating Services
            </h2>
            <p className=" paragraph">
              Industrial electrical estimating is a critical skill for ensuring
              successful electrical projects within factories, warehouses, and
              other large-scale facilities. By accurately calculating labor
              costs, materials, and unforeseen factors, industrial electrical
              estimators can provide competitive bids and keep projects on
              budget. This not only benefits electrical contractors but also
              guarantees a smooth and efficient electrical installation process
              for the client.
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
