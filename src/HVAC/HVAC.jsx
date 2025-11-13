import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";

export const HVAC = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          HVAC Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              HVAC contractors rely on <b>PlanHub Estimators</b> for expert
              estimating services.
              <b>PlanHub Estimators</b> MEP estimators are experts in HVAC,
              meticulously calculating quantities for materials like ducts,
              hangers, and fixtures. We also provide marked-up plans with
              detailed descriptions for fabricators and sheet metal contractors,
              ensuring everyone's on the same page. Our goal? To empower you
              with a clear picture of your upfront costs for accurate bidding
              and planning. We provide 24/7 support via chat and email ({" "}
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
            <EffincyAccuracyDelivery />

            <h2 className="ServicesSubCommonHeadings mt-2">
              The Items We Quantify In HVAC Estimating And Takeoffs:
            </h2>

            <p className=" paragraph">
              <ul>
                <li>Ductwork</li>
                <li>Condensing units </li>
                <li>Casings </li>
                <li> Duct insulation</li>
                <li>Exhaust Fan </li>
                <li> Pumps </li>
                <li> Piping</li>
                <li>Hangers and Supports </li>
                <li> Building Automation and control</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
