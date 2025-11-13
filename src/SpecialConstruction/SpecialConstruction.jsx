import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";

export const SpecialConstruction = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Special Construction Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              Our appraisal company focuses on delivering precise and
              comprehensive predictions for tailor-made building endeavors. Our
              team of specialists is committed to assisting you in strategizing
              and distributing resources for the distinctive aspects that make
              your project stand out.
            </p>

            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/SCExtrapic.png")}
                width={"100%"}
                style={{ borderRadius: "10px" }}
                alt=""
              />
            </div>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Our Special Construction Estimation Process
            </h2>

            <p className=" paragraph">
              <strong>Initial Consultation:</strong>
              We start by discussing your project goals, design preferences, and
              budget constraints. This allows us to understand the unique needs
              and vision of your specialized construction project.
            </p>
            {/* <p className=" paragraph">
              <strong>Site Evaluation: </strong>
              If necessary, we conduct a thorough site analysis to determine any
              specific factors that may influence construction methods, material
              choices, or project timelines.
            </p>Comprehensive Estimate
            <p className=" paragraph">
              <strong>Specialized Material and Equipment Suggestions:</strong>
              Based on your project's details, we recommend a variety of
              materials, machines, and equipment tailored to your specific
              needs, whether it be for an industrial facility, a healthcare
              center, a commercial building, or an educational institution.
            </p> */}
            <p className=" paragraph">
              <strong>Comprehensive Estimate: </strong>
              Our team provides an in-depth evaluation of the estimated costs
              for each type of material, equipment, and labor involved. This
              includes quantities and any additional expenses such as
              specialized installations or safety
            </p>
            <p className=" paragraph">
              <strong> Presentation and Approval:</strong>We present the
              estimate to you, explaining each element and addressing any
              questions or concerns you may have.
            </p>
            {/* <p className=" paragraph">
              <strong>Presentation and Approval: </strong>
              We reveal the estimate to you, clarifying each component and
              addressing any questions or concerns you may have. Once approved,
              we proceed with procurement.
            </p> */}
            {/* <p className=" paragraph">
              <strong>Procurement and Construction Oversight:</strong>
              We manage the procurement process to ensure that materials and
              equipment meet the established criteria. Our team can also work
              with contractors to oversee proper construction and
              implementation.
            </p> */}

            <EffincyAccuracyDelivery />

            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/SchedulingExtrapic.png")}
                width={"100%"}
                alt=""
              />
            </div>
            <h2 className="ServicesSubCommonHeadings mt-2">What We Estimate</h2>
            <p className=" paragraph">
              <strong>Specialized Materials</strong> <br />
              Featuring high-strength alloys, tailored concrete mixtures, and
              distinct building materials designed to meet your project's
              demands.
            </p>

            <p className=" paragraph">
              <strong>Safety Measures and Compliance </strong> <br />
              Incorporating specialized safety gear, fire control systems, and
              other precautions necessary to fulfill sector-specific
              regulations.
            </p>

            <p className=" paragraph">
              <strong>Specialized Equipment: </strong> <br />
              This includes heavy machinery, precise instruments, or dedicated
              tools needed for the bespoke requirements of your specialized
              construction project.
            </p>

            <p className=" paragraph">
              <strong>Technology Integration: </strong> <br />
              Examples include state-of-the-art HVAC systems, intelligent
              building technologies, or custom infrastructure essential for
              contemporary facilities.
            </p>

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
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
