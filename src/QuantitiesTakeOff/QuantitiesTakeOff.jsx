import React from "react";

import { ServicesSidebar } from "../CommonComponents/ServicesSidebar";
import { Link } from "react-router-dom";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const QuantitiesTakeOff = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-xl">
        <h1 className="ServicesCommonHeadings">Quantity Takeoff Services</h1>
        <div>
          <div className=" row m-0 w-100 ">
            <div className="col-lg-3 col-12 hideonMediumScreen   ">
              <ServicesSidebar servicename="TakeOffServices" />
            </div>
            <div className="col-lg-9 col-12">
              <div>
                <p className="paragraph">
                  Our team provides high Quality Takeoff Services to many
                  construction companies. Our experienced team, equipped with
                  the latest technologies and tools, provides fast and accurate
                  quantity takeoff numbers for labor and material. Even on short
                  notice, we can provide many takeoff services within 24 hours.
                  With 10 years of experience in the US construction industry,
                  we have successfully provided integrated quantity takeoff
                  services and solutions for a variety of projects, including
                  remodeling and renovations in different parts of the project.
                </p>
                <h2 className="ServicesSubCommonHeadings">Service Area</h2>
                <p className="paragraph">
                  We have clients that have construction projects being built in
                  many parts of the country. So no matter where you are located
                  or the project you are bidding, we provide Estimating services
                  all over the United States. We specialize in material takeoffs
                  and quantity surveys for both labor and materials and for most
                  construction trades. One of our construction Estimators will
                  quantify from the blueprints, all the materials and
                  accessories needed for your trade. It will be in Microsoft
                  Excel or Adobe , in the format you need, so you can send it
                  out to bid quickly. We can quantify building materials faster
                  and more accurate than most Estimators. We calculate every
                  material item required to build any size construction project.
                  Our Estimator will list the items by location as well. Your
                  superintendents and sub-contractors benefit from this because
                  it helps them identify easily where every item goes.
                </p>

                <h2 className="ServicesSubCommonHeadings">
                  We Provide Quantity Takeoff Services To Our Clients In All CSI
                  Divisions:
                </h2>
                <div className=" row">
                  <div className=" col-md-6 col-12">
                    <p className=" paragraph">
                      <ul>
                        <li>Sitework Takeoff</li>
                        <li>Masonry Takeoff</li>
                        <li>Concrete Takeoff</li>
                        <li>Drywall Takeoff</li>
                        <li>Painting Takeoff</li>
                        <li>Insulation Takeoff</li>
                        <li>Roofing Takeoff</li>
                      </ul>
                    </p>
                  </div>
                  <div className=" col-md-6 col-12">
                    <p className=" paragraph">
                      <ul>
                        <li>Lumber Takeoff</li>
                        <li> Millwork Takeoff </li>
                        <li> Cabinet Takeoff </li>
                        <li> Mechanical Takeoff</li>
                        <li> HVAC Takeoff</li>
                        <li> Plumbing Takeoff </li>
                        <li> Electrical Takeoff </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <EffincyAccuracyDelivery />
                <h2 className="ServicesSubCommonHeadings">
                  construction software
                </h2>
                <p className=" paragraph">
                  Our estimators are skilled in various construction software
                  tools such as PlanSwift, Bluebeam, On Screen Takeoff (OST) and
                  MS Project (Scheduling) .
                </p>
                <h2 className="ServicesSubCommonHeadings">take-off format</h2>
                <p className=" paragraph">
                  {" "}
                  Our work would be in editable excel sheet – if required, we
                  can use your template or can put your company details on the
                  estimate/proposal. For to do quantities takeoff – we use
                  software Planswift, BlueBeam, On Screen Takeoff (OST). Mostly
                  we use Planswift. We will be very happy to provide Software
                  files as well as Markups/color drawings (if required).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
