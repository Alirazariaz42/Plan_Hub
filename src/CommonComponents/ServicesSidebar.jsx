import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ServicesSidebar = (props) => {
  const [initialclassTakeOff, setinitialclassTakeOff] = useState(
    "QuantitiesMaterialTakeoff"
  );
  const displayTakeoff = () => {
    setinitialclassTakeOff("QuantitiesMaterialTakeoffAfter");
  };
  const hideTakeoff = () => {
    setinitialclassTakeOff("QuantitiesMaterialTakeoff");
  };
  return (
    <>
      <div className="servicesSidebarContainer">
        <h2 className="SERVICESheading fw-bolder">SERVICES</h2>
        <div className="servicesContainer">
          <div>
            <Link
              className={`servicesNamesLink`}
              to="/cost-estimating-services/"
            >
              <h3
                className={`servicesNames ${
                  props.servicename === "CostEstimation" ? "Active" : ""
                } `}
              >
                COST ESTIMATING
              </h3>
            </Link>
          </div>
          <div>
            <Link
              onMouseEnter={displayTakeoff}
              onMouseLeave={hideTakeoff}
              style={{ textDecoration: "none" }}
              className={`TakeOffService ${
                props.servicename === "TakeOffServices" ? "Active" : ""
              } `}
              to="/construction-takeoff-services/"
            >
              <h3
                className={` ${
                  props.servicename === "TakeOffServices" ? "Active" : ""
                } `}
              >
                CONSTRUCTION TAKEOFF SERVICES ⇅
              </h3>
              <div className={initialclassTakeOff}>
                <Link
                  style={{ color: "black" }}
                  to="/quantity-takeoff-services/"
                >
                  {" "}
                  <h3 className="subPage">Quantity Takeoff </h3>
                </Link>
                <Link
                  style={{ color: "black" }}
                  to="/material-takeoff-services/"
                >
                  {" "}
                  <h3 className="subPage">Material Takeoff</h3>
                </Link>
              </div>
            </Link>
          </div>

          <div>
            <Link className="servicesNamesLink" to="/cost-scheduling/">
              <h3
                className={`servicesNames ${
                  props.servicename === "Scheduling" ? "Active" : ""
                } `}
              >
                COST SCHEDULING
              </h3>
            </Link>
          </div>

          <div>
            <Link className="servicesNamesLink" to="/planning/">
              <h3
                className={`servicesNames ${
                  props.servicename === "PLANNING" ? "Active" : ""
                } `}
              >
                PLANNING
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
