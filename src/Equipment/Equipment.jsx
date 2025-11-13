import React from "react";

import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";

export const Equipment = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Equipment Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              <strong>PlanHub Estimators</strong> serves as your reliable
              resource for comprehensive equipment estimation services. We aim
              to provide you with accurate and up-to-date information to assist
              you in your project planning and financial management needs. Our
              equipment estimation information covers a wide range of industries
              and sectors, offering critical insights into varying types of
              equipment essential for successful project finalization.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Construction Equipment
            </h2>

            <h4 className="ServicesSubCommonHeadings mt-2">
              Earthmoving Machinery
            </h4>
            <p className=" paragraph">
              Diggers, dozers, loading machines, and leveling devices. Renting
              or buying expenses, energy usage, and upkeep factors.
            </p>

            <h4 className="ServicesSubCommonHeadings mt-2">
              Concrete and Paving Equipment
            </h4>
            <p className=" paragraph">
              Cement mixers, paving machines, concrete pumps. Expenses for
              equipment utilization, related tools, and workforce hours.{" "}
            </p>

            <h4 className="ServicesSubCommonHeadings mt-2">
              Cranes and Lifting Equipment
            </h4>
            <p className=" paragraph">
              Crane types: tower, mobile, overhead. Price or hire determined by
              load ability, installation necessities, and protective protocols.
            </p>

            <EffincyAccuracyDelivery />
            <h2 className="ServicesSubCommonHeadings mt-2">
              Manufacturing and Industrial Equipment
            </h2>

            <h4 className="ServicesSubCommonHeadings mt-2">
              Machinery and Production Equipment
            </h4>
            <p className=" paragraph">
              CNC milling machines, lathes, presses, and industrial equipment.
              Expenses for acquiring machinery, operating costs, and upkeep.
            </p>

            <h4 className="ServicesSubCommonHeadings mt-2">
              Material Handling Equipment
            </h4>
            <p className=" paragraph">
              Pallet trucks, belts, mechanized transporters. Projections for
              apparatus expenses, weight limits, and personnel for utilization
              and upkeep.
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
