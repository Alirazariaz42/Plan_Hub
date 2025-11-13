import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";

export const GeneralRequirements = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          General Requirements
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              General Construction presents a broad view and a detailed
              understanding of the client's project expectations and
              requirements. It stands as an explicit explanation of what the
              client envisions for the project. The General Conditions, a
              section of the Contract Document, distinctly outlines the rights,
              responsibilities, and relationships between the involved parties.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Key Components of General Requirements
            </h2>

            <div>
              <p className=" ULheadingContainer m-0">1. Project Objectives </p>
              <ul>
                <li className=" paragraph">
                  Clearly defined and measurable goals that the project aims to
                  achieve.
                </li>
              </ul>
            </div>

            <div>
              <p className=" ULheadingContainer m-0">2. Scope of Work </p>
              <ul>
                <li className=" paragraph">
                  A detailed description of the tasks, deliverables, and
                  boundaries of the project.
                </li>
              </ul>
            </div>

            <div>
              <p className=" ULheadingContainer m-0">3. Resource Allocation </p>
              <ul>
                <li className=" paragraph">
                  Identifying and assigning the necessary resources, including
                  manpower, materials, and equipment.
                </li>
              </ul>
            </div>

            <div>
              <p className=" ULheadingContainer m-0">4. Quality Standards</p>
              <ul>
                <li className=" paragraph">
                  Specifications for the level of quality expected for project
                  deliverables.{" "}
                </li>
              </ul>
            </div>

            <div>
              <p className=" ULheadingContainer m-0">
                5. Regulatory and Compliance Requirements{" "}
              </p>
              <ul>
                <li className=" paragraph">
                  Ensuring that the project adheres to legal and regulatory
                  standards.{" "}
                </li>
              </ul>
            </div>

            <div>
              <p className=" ULheadingContainer m-0">
                6. Budget and Financial Constraints{" "}
              </p>
              <ul>
                <li className=" paragraph">
                  Defining the financial parameters and constraints within which
                  the project must operate.{" "}
                </li>
              </ul>
            </div>

            <div>
              <p className=" ULheadingContainer m-0">7. Risk Management Plan</p>
              <ul>
                <li className=" paragraph">
                  Identifying potential risks, assessing their impact, and
                  outlining mitigation strategies.{" "}
                </li>
              </ul>
            </div>

            <div>
              <p className=" ULheadingContainer m-0">8. Communication Plan</p>
              <ul>
                <li className=" paragraph">
                  Establishing channels and protocols for communication among
                  team members and stakeholders.{" "}
                </li>{" "}
              </ul>
            </div>
            <EffincyAccuracyDelivery />
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
