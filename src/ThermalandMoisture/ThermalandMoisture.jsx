import React from "react";

import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const ThermalandMoisture = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Thermal & Moisture Protection Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              At <b>PlanHub Estimators</b>, we acknowledge the paramount
              importance of effective heat and dampness management for
              construction projects. Our calculated projections are designed to
              aid you in planning and assigning provisions for these essential
              elements, ensuring your undertaking's longevity and resilience to
              natural happenings.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Thermal Insulation Estimating Services
            </h2>
            <p className=" paragraph">
              Our team of project evaluators inspect and meticulously detail
              each sector, using cutting-edge takeoff software to digitally map
              every facet of roofing works. These evaluations involve projected
              costs for internet-based roofing fixes, tin roofing, steel tops,
              carport roofs, metal coverings, slate toppings, shingle rooftops,
              and level roofs, all being precisely measured and accurately
              presented in a detailed Excel sheet. The majority of our clientele
              seek us out for their domestic rooftopping needs. We undertake
              each task based on given blueprints or guidelines. With our
              extensive expertise and proven recent accomplishments, we
              efficiently handle each project and provide a cost approximation
              for building a residential roof within sixty minutes.
            </p>
            <EffincyAccuracyDelivery />
            <h2 className="ServicesSubCommonHeadings mt-2">
              Thermal & Moisture Protection Takeoffs
            </h2>
            <div className=" row">
              <div className="col-md-6 col-12">
                <ul>
                  <li className=" paragraph">
                    fire retardant cable sprays takeoffs
                  </li>
                  <li className=" paragraph">damproofing takeoffs</li>
                  <li className=" paragraph">waterproofing takeoffs</li>
                  <li className=" paragraph">chemical grouting takeoffs</li>
                  <li className=" paragraph">traffic coatings takeoffs</li>
                  <li className=" paragraph">fiber insulation takeoffs</li>
                  <li className=" paragraph">plastic insulation takeoffs</li>
                  <li className=" paragraph">cellulose insulation takeoffs</li>
                  <li className=" paragraph">reflective insulation takeoffs</li>
                  <li className=" paragraph">cladding takeoffs</li>
                  <li className=" paragraph">
                    roof and deck installation takeoffs
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-12">
                <ul>
                  <li className=" paragraph">
                    EIFS( Exterior Insulation and Finish Systems) takeoffs
                  </li>
                  <li className=" paragraph">Weather Barriers takeoffs</li>
                  <li className=" paragraph">
                    Vapor Resistive Barriers takeoffs
                  </li>
                  <li className=" paragraph">
                    Vapor Permeable Barriers takeoffs
                  </li>
                  <li className=" paragraph">Steep Slope Roofing takeoffs</li>
                  <li className=" paragraph">
                    Shingles (Asphalt, Metal, Slate) takeoffs
                  </li>
                  <li className=" paragraph">Siding Panels takeoffs</li>
                  <li className=" paragraph">Metal Siding takeoffs</li>
                  <li className=" paragraph">Vinyl Siding takeoffs</li>
                </ul>
              </div>
            </div>

            {/* <h2 className="ServicesSubCommonHeadings mt-2">
              Thermal & Moisture Protection Takeoffs
            </h2>
            <p className=" paragraph">
              <ul>
                <li>fire retardant cable sprays takeoffs</li>
                <li>damproofing takeoffs</li>
                <li>waterproofing takeoffs</li>
                <li>chemical grouting takeoffs</li>
                <li>traffic coatings takeoffs</li>
                <li>fiber insulation takeoffs</li>
                <li>plastic insulation takeoffs</li>
                <li>cellulose insulation takeoffs</li>
                <li>reflective insulation takeoffs</li>
                <li>cladding takeoffs</li>
                <li>roof and deck installation takeoffs</li>
                <li>EIFS( Exterior Insulation and Finish Systems) takeoffs</li>
                <li>Weather Barriers takeoffs</li>
                <li>Vapor Resistive Barriers takeoffs</li>
                <li>Vapor Permeable Barriers takeoffs</li>
                <li>Steep Slope Roofing takeoffs</li>
                <li>Shingles (Asphalt, Metal, Slate) takeoffs</li>
                <li>Siding Panels takeoffs</li>
                <li>Metal Siding takeoffs</li>
                <li>Vinyl Siding takeoffs</li>
              </ul>
            </p> */}
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
