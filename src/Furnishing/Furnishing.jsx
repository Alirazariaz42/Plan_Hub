import React from "react";

import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";

export const Furnishing = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Furnishings Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              <b>PlanHub Estimators</b> are committed to providing our clients
              with reliable and affordable furniture cost estimating services.
              Utilizing the latest tools and techniques, our team of experienced
              and proficient furniture cost estimators generates detailed and
              accurate furniture cost projections to help our customers make
              well-informed decisions and keep their expenses within their
              budget constraints. We stand ready to support you throughout every
              phase of your project, be it residential or commercial. In
              addition, digital estimation can provide quotes for: Concrete
              Countertops, Stone Countertops, Plastic Laminates, Wood
              Countertops, Cultured Marble, Solid Surfacing, Glass Countertops,
              Tile, Laboratory Countertops, and Specialty Sinks and countertops.
              <br />
              {/* Digital estimating can provide estimates for:
              <ul>
                <li>Concrete Countertops</li>
                <li>Stone Countertops</li>
                <li>Plastic Laminates</li>
                <li>Wood Countertops</li>
                <li>Cultured Marble</li>
                <li>Solid Surfacing</li>
                <li>Glass Countertops</li>
                <li>Tile</li>
                <li>Laboratory Countertops</li>
                <li>Specialty Sinks and countertops</li>
              </ul> */}
            </p>
            <EffincyAccuracyDelivery />
            <h2 className="ServicesSubCommonHeadings mt-2">
              Home Furnishing Estimating Services
            </h2>

            <p className=" paragraph">
              Our team of experts can accurately estimate the cost of furnishing
              your home based on your specific needs and preferences. The size
              of your house, the type and quality of furniture you choose, and
              any customizations you may want are all considered by our home
              furnishing cost estimator. As everyone has different interests and
              spending limits, we collaborate with you to create a customized
              estimate that satisfies your needs. Plan your budget wisely and
              set priorities for your home furnishing needs by getting a house
              furnishing estimate from us. Whether you want to make significant
              changes to your living area or add a few essential pieces, our
              team is ready to support you at every stage. To begin, get in
              touch with us today!
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
