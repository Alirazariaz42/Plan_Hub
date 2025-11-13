import React from "react";
import { ServicesSidebar } from "../CommonComponents/ServicesSidebar";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
import { Banner } from "../CommonComponents/Banner/Banner";

export const TakeOffServices = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className="  container-xl">
        <h1 className="ServicesCommonHeadings">
          Construction Takeoff Services{" "}
        </h1>

        <div>
          <div className=" row m-0 w-100 ">
            <div className="col-lg-3 col-12 hideonMediumScreen">
              <ServicesSidebar servicename="TakeOffServices" />
            </div>
            <div className="col-lg-9 col-12">
              <div>
                <p className="paragraph">
                  <b>PlanHub Estimators</b> offer a complete suite of
                  construction cost estimating and cost management services,
                  ensuring your project stays on track from the very beginning.
                  With years of experience, we understand the ever-changing
                  market conditions and can handle projects of any complexity.
                  Our team of expert estimators is dedicated to providing you
                  with accurate, timely, and detailed cost estimates. We don't
                  just give your numbers–we provide marked-up plans with
                  thorough detail and precision. Plus, we're there for you every
                  step of the way, from the initial concept to project
                  completion, offering continuous client service and support.
                  Let <b>PlanHub Estimators</b> help you navigate the
                  construction process with confidence and clarity.
                </p>
                <h2 className="ServicesSubCommonHeadings">Service Area</h2>
                <p className=" paragraph">
                  Our clientele, spanning various parts of the nation, are
                  embarking on construction endeavors. Regardless of your
                  geographical location or the specifics of your proposal, we
                  extend our construction estimating services across the United
                  States. At <b>PlanHub Estimators</b>, expertise lies in
                  material takeoffs and quantity surveys, covering both labor
                  and materials across a broad spectrum of construction
                  specialties. Our construction estimators meticulously assess
                  the blueprints to quantify all requisite materials and
                  equipment for your specific trade. Our output is compatible
                  with Microsoft Excel or Adobe, tailored to your formatting
                  needs for a swift bid. We take pride in our ability to
                  identify building materials more quickly and accurately than
                  most estimators. We diligently tally every component necessary
                  to construct projects of any magnitude. The estimator also
                  categorizes materials by location, which greatly benefits your
                  site managers and subcontractors as it facilitates the process
                  of identifying where each item is to be placed.
                </p>
                <h2 className="ServicesSubCommonHeadings">
                  We Provide Quantity Takeoff Services To Our Clients In All CSI
                  Divisions:
                </h2>
                <div className=" row w-100">
                  <div className="col-md-6 col 12">
                    {" "}
                    <p className=" paragraph">
                      <ul>
                        <li className=" ">Sitework Takeoff</li>
                        <li className=" ">Masonry Takeoff</li>
                        <li>Concrete Takeoff</li>
                        <li>Drywall Takeoff</li>
                        <li>Painting Takeoff</li>
                        <li>Insulation Takeoff</li>
                        <li>Roofing Takeoff</li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-md-6 col 12">
                    {" "}
                    <p className=" paragraph">
                      <ul>
                        <li>Lumber Takeoff</li>
                        <li>Millwork Takeoff</li>
                        <li>Cabinet Takeoff</li>
                        <li>Mechanical Takeoff</li>
                        <li>HVAC Takeoff</li>
                        <li>Plumbing Takeoff</li>
                        <li>Electrical Takeoff</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <h4 className="ULheadingContainer">
                  Quantity Takeoff Services
                </h4>
                <p className=" paragraph">
                  Our team offers superior quantity takeoff services, delivering
                  rapid and precise numbers for both labor and material
                  estimations. Even during unexpected requests, we can handle a
                  wide range of estimation tasks within a single day. We have
                  effectively delivered all-inclusive consulting solutions for
                  various projects, including new construction, renovations and
                  projects across different sectors like private, public,
                  commercial, residential, industrial, civil, institutional,
                  educational, and retail.
                </p>
                <EffincyAccuracyDelivery />
                <h4 className="ServicesSubCommonHeadings">
                  Material Takeoff Services
                </h4>
                <p className=" paragraph">
                  We provide detailed resource forecasts, saving you time and
                  money. Our forecasts help you submit winning bids, start
                  projects faster, and avoid material delays. We have extensive
                  experience in new builds, refurbishments, and in various
                  sectors. Let us handle your resource forecasting so you can
                  focus on success. Utilizing our proficiency, we ensure exact
                  and trustworthy results, contributing to the success of every
                  project. Rely on us to manage your resource prediction
                  requirements with certainty and professionalism.
                </p>
                <div className=" mt-5 mb-5">
                  <img
                    src={require("../../src/Images/takeoffextrapic.png")}
                    width={"100%"}
                    alt=""
                  />
                </div>
                <h4 className="ServicesSubCommonHeadings">
                  Material Takeoff List - Quantity Takeoff Services{" "}
                </h4>
                <div className=" row w-100">
                  <div className="col-md-6 col 12">
                    {" "}
                    <p className=" paragraph">
                      <ul>
                        <li className=" ">General Requirement</li>
                        <li className=" "> Sitework</li>
                        <li>Concrete</li>
                        <li>Masonry</li>
                        <li>Finishes</li>
                        <li>Specialties</li>
                        <li>Equipment</li>
                        <li>Furnishings</li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-md-6 col 12">
                    {" "}
                    <p className=" paragraph">
                      <ul>
                        <li>Metals</li>
                        <li>Wood and Plastics</li>
                        <li> Thermal and Moisture Protection</li>
                        <li>Doors and Windows</li>
                        <li>Special Construction</li>
                        <li>Conveying Systems</li>
                        <li>Mechanical/Plumbing</li>
                        <li>Electrical</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <h4 className="ServicesSubCommonHeadings">
                  Construction Software
                </h4>
                <p className=" paragraph">
                  Our calculators are proficient in a variety of building
                  software resources including PlanSwift, Bluebeam, On Screen
                  Takeoff (OST), and MS Project (Scheduling).
                </p>
                <h4 className="ServicesSubCommonHeadings">Take-off Format</h4>
                <p className=" paragraph">
                  Our tasks are accomplished in a modifiable Excel spreadsheet –
                  we're flexible to leverage your template or embed your
                  business information into the quote/proposal. For quantity
                  takeoff activities, we utilize software like Planswift,
                  BlueBeam, and On Screen Takeoff (OST), with a preference for
                  Planswift. We're more than willing to supply Software files
                  and Markup/color diagrams, if necessary.
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
