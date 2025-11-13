import React from "react";

import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const CommericalEstimation = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Commercial Construction Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              {/* Precise, fast, and professional quote services tailored for
              commercial general contractors, subcontractors, commercial area
              developers, lenders, architecture, engineering, and design
              companies. Commercial pricing demands robust technical
              comprehension coupled with exactness and experience. We perceive a
              correct estimate as a fundamental instrument for setting a budget
              and maintaining cost management throughout the project's duration.
              Our Estimators are highly experienced in commercial takeoffs and
              costing with a varied portfolio spanning North America, the
              Caribbean, and Australian construction sectors covering
              renovation, restoration, augmentation, and brand-new construction.
              Each assignment undergoes review by experienced project managers
              that have a vast commercial project history. Need consultation on
              the estimation and timeline of commercial construction tasks?
              Lacking the required skills to execute a bill of materials for a
              specific trade, size, or complexity? Or unsure on how to prepare
              and submit a bidding proposal? We've got your back. Our team of
              expert cost consultants and engineers can provide timely and
              precise services customized to your specific requirements. We
              assist you in achieving your goals, be it drafting estimates,
              defining profit margins, or shrewdly submitting bidding proposals
              that make you stand out from competitors. */}
              We understand the technical complexities of commercial projects
              and the importance of accurate budgeting from start to finish.
            </p>
            <EffincyAccuracyDelivery />

            <h2 className="ServicesSubCommonHeadings mt-2">
              Our team of experts:
            </h2>
            <p className=" paragraph">
              <ul>
                <li>
                  <b>Experienced Estimators:</b> Possess extensive knowledge of
                  commercial takeoffs and costing across North America, the
                  Caribbean, and Australia.
                </li>
                <li>
                  <b>Project Managers:</b> Review every estimate, ensuring its accuracy
                  and alignment with your project goals.
                </li>
                <li>
                  <b>Cost Consultants & Engineers:</b> Provide tailored services to
                  help you achieve your goals, including:{" "}
                  <ul>
                    <li> Estimate creation</li>
                    <li> Profit margin definition</li>
                    <li> Winning bid proposals</li>
                  </ul>
                </li>
              </ul>
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Our services include:
            </h2>

            <p className=" paragraph">
              <ul>
                <li>Bid Estimates</li>
                <li>Assistance on smartly filing bids</li>
                <li>Project Lead Generation </li>
                <li>Subcontractor Marketing</li>
                <li>Precise material & labor takeoffs for procurement </li>
                <li>Change Order Management </li>
                <li>Project Scheduling</li>
                <li>Cost Management</li>
                <li> Value engineering</li>
                <li>Legal claims</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
