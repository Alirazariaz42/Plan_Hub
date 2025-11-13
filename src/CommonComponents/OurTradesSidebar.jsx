import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const OurTradesSidebar = () => {
  const [initialclass, setinitialclass] = useState("");
  const [initialclass2, setinitialclass2] = useState("");
  const [initialclass3, setinitialclass3] = useState("");
  const [initialclass4, setinitialclass4] = useState("");
  const [initialclass5, setinitialclass5] = useState("");
  const showLandscapingEstimation = () => {
    setinitialclass("arrowdown1");
  };
  const hideLandscapingEstimation = () => {
    setinitialclass("");
  };

  const showThermaldownpages = () => {
    setinitialclass2("arrowdown2");
  };
  const hideThermaldownpages = () => {
    setinitialclass2("");
  };

  const showFramingdownpages = () => {
    setinitialclass3("arrowdown3");
  };
  const hideFramingdownpages = () => {
    setinitialclass3("");
  };

  const showFinshesdownpages = () => {
    setinitialclass4("arrowdown4");
  };
  const hideFinshesdownpages = () => {
    setinitialclass4("");
  };

  const showMEPpages = () => {
    setinitialclass5("arrowdown5");
  };
  const hideMEPpages = () => {
    setinitialclass5("");
  };
  return (
    <>
      <div className="OurTradesPagesContainer">
        <h2 className=" ULheadingContainer">Our Trades</h2>
        <div className="lateronclassAdded">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/general-requirements/"
          >
            <p className="OurTradesPagesName">General Requirements</p>{" "}
          </Link>
          <div
            onMouseEnter={showLandscapingEstimation}
            onMouseLeave={hideLandscapingEstimation}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/sitework-estimating-services/"
            >
              <p className="OurTradesPagesName">Sitework Estimating ↴</p>
            </Link>
            <div className={`downpageContainer ${initialclass}`}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/landscaping-estimating-services/"
              >
                <p className="OurTradesPagesName"> Landscaping Estimating</p>
              </Link>
            </div>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/concrete-estimating-services/"
          >
            <p className="OurTradesPagesName">Concrete Estimating</p>{" "}
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/masonry-estimating-services/"
          >
            <p className="OurTradesPagesName">Masonry Estimating </p>{" "}
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/metals-estimating-services/"
          >
            <p className="OurTradesPagesName">Metals Estimating</p>{" "}
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/lumber-takeoff-services/"
          >
            <p className="OurTradesPagesName">Lumber Takeoff</p>{" "}
          </Link>

          <div
            onMouseEnter={showThermaldownpages}
            onMouseLeave={hideThermaldownpages}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/thermal-moisture-protection-estimating-services/"
            >
              <p className="OurTradesPagesName">
                Thermal & Moisture Protection Estimating ↴
              </p>
            </Link>
            <div className={`downpageContainer2 ${initialclass2}`}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/roofing-estimating-services/"
              >
                {" "}
                <p className="OurTradesPagesName"> Roofing Estimating </p>{" "}
              </Link>
              {/* <Link style={{ textDecoration: "none", color: "white" }} to="">
                {" "}
                <p className="OurTradesPagesName"> Fire Proofing</p>
              </Link> */}
              {/* <Link style={{ textDecoration: "none", color: "white" }} to="">
                {" "}
                <p className="OurTradesPagesName"> Water Proofing</p>
              </Link> */}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/insulation-estimating-services/"
              >
                {" "}
                <p className="OurTradesPagesName"> Insulation Estimating</p>
              </Link>
            </div>
          </div>
          <div
            onMouseEnter={showFramingdownpages}
            onMouseLeave={hideFramingdownpages}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/framing-estimating-services/"
            >
              <p className="OurTradesPagesName">Framing Estimating </p>
            </Link>
            {/* <div className={`downpageContainer3 ${initialclass3}`}>
              <Link style={{ textDecoration: "none", color: "white" }} to="">
                {" "}
                <p className="OurTradesPagesName">
                  {" "}
                  Wood Framing Estimating{" "}
                </p>{" "}
              </Link>
              <Link style={{ textDecoration: "none", color: "white" }} to="">
                {" "}
                <p className="OurTradesPagesName"> Metal Framing Estimating</p>
              </Link>
            </div> */}
          </div>
          <div
            onMouseEnter={showFinshesdownpages}
            onMouseLeave={hideFinshesdownpages}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/interior-exterior-finishes/"
            >
              <p className="OurTradesPagesName">
                Interior & Exterior Finishes ↴
              </p>
            </Link>
            <div className={`downpageContainer4 ${initialclass4}`}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/drywall-estimating-services/"
              >
                {" "}
                <p className="OurTradesPagesName">
                  {" "}
                  DryWall Estimating Services{" "}
                </p>{" "}
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/flooring-estimating-services/"
              >
                {" "}
                <p className="OurTradesPagesName">
                  {" "}
                  Flooring Estimating Services
                </p>
              </Link>
            </div>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/specialties/"
          >
            <p className="OurTradesPagesName">Specialties</p>{" "}
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/equipment-estimating-services/"
          >
            <p className="OurTradesPagesName">Equipment Estimating</p>{" "}
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/furnishing-estimating-services/"
          >
            <p className="OurTradesPagesName">Furnishings Estimating</p>{" "}
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/special-construction-estimating-services/"
          >
            <p className="OurTradesPagesName">
              Special Construction Estimating
            </p>{" "}
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/conveying-system-estimating-services/"
          >
            <p className="OurTradesPagesName">Conveying Systems Estimating</p>{" "}
          </Link>
          <div onMouseEnter={showMEPpages} onMouseLeave={hideMEPpages}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/mechanical-estimating-services/"
            >
              <p className="OurTradesPagesName">MEP Estimating ↴</p>
            </Link>
            <div className={`downpageContainer5 ${initialclass5}`}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/mechanical-estimating-services/"
              >
                {" "}
                <p className="OurTradesPagesName">
                  {" "}
                  Mechanical Estimating Services{" "}
                </p>{" "}
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/plumbing-estimating-services/"
              >
                {" "}
                <p className="OurTradesPagesName">
                  {" "}
                  Plumbing Estimating Services{" "}
                </p>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/electrical-estimating-services/"
              >
                {" "}
                <p className="OurTradesPagesName">
                  {" "}
                  Electrical Estimating Services{" "}
                </p>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Gutter-estimating-services/"
              >
                {" "}
                <p className="OurTradesPagesName"> Gutter Estimating Service</p>
              </Link>
            </div>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/hvac-estimating-services/"
          >
            <p className="OurTradesPagesName">HVAC Estimating</p>{" "}
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/commercial-estimating-services/"
          >
            <p className="OurTradesPagesName">Commercial Estimating</p>{" "}
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/industrial-estimating-services/"
          >
            <p className="OurTradesPagesName">Industrial Estimating </p>{" "}
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/residential-estimating-services/"
          >
            <p className="OurTradesPagesName">Residential Estimating</p>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
