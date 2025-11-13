import React from "react";
import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import MassonaryEstimationPic from "../Images/MassonaryEstimationPic.png";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";

export const Massonary = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">
          Masonry Estimating Services
        </h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              <strong>PlanHub Estimators</strong> should be your first choice
              for high-quality masonry estimate solutions. Our extensive
              proficiency across the United States demonstrates our ability to
              provide accurate and timely estimates. Our expert masonry cost
              predictor is well-versed in Division 4, having worked with
              brickwork, CMU walls, and various masonry styles, among other
              things. Our dedicated Masonry Estimating Services team ensures
              perfection and precision in each evaluation by utilizing advanced
              tools such as OST(on-screen takeoff), Planswift, and Bluebeam,
              Feel free to contact us at{" "}
              <a style={{ color: "black" }} href="tel:+1 917 300 1079">
                {" "}
                +1 917 300 1079
              </a>{" "}
              or via email ({" "}
              <a
                style={{ color: "black" }}
                href="mailto:AM@planhubestimating.com"
              >
                AM@planhubestimating.com
              </a>
              )
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              The Range Of Masonry Estimating Services
            </h2>
            <p className=" paragraph">
              With real-world expertise and years of experience in the AEC
              industry, we excel at providing timely and accurate estimates for
              masonry work to our clients, which include general contractors,
              masonry contractors, masonry repair contractors, vendors, masons,
              developers, architects, designers, and home builders. Our Masonry
              Estimating services are customized to meet the individual
              requirements of our clients. Our deliverables often include:
              <ul>
                <li>EXCEL spreadsheet</li>
                <li>Labor and material rates</li>
                <li>Man Hours</li>
                <li>Color-coded plans</li>
                <li>
                  Detailed summary comprising material lay rate and unit costs.
                  labor rates, crew size, equipment, overhead, profit
                  percentage, etc.
                </li>
                <li>Review of addendums</li>
              </ul>
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              What Do We Take In The Division 4 Masonry Trade?
            </h2>

            <div className=" row w-100 mt-sm-4 m-sm-0">
              <div
                className=" col-md-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <ul className=" paragraph">
                  <li>CMU Masonry</li>
                  <li>Glass unit masonry</li> <li>Clay unit masonry</li>
                  <li>Architectural & glazed masonry</li>{" "}
                  <li>Stonemasonry walls</li>
                  <li>Granite</li> <li>Limestone</li>
                  <li>Marble</li>
                  <li>Sandstone</li>
                  <li>Soapstone</li>
                </ul>
              </div>
              <div
                className=" col-md-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <ul className=" paragraph">
                  <li>Slate</li> <li>Cast stone</li>
                  <li>Mortar and grout</li> <li>Masonry Flashing</li>
                  <li>Masonry Anchorage</li> <li>Masonry Insulation</li>
                  <li>Chimney brick</li> <li>Brick tuckpointing</li>
                  <li>brick wall tiles</li> <li>Brick Veneer</li>
                  <li>Stucco work</li>
                </ul>
              </div>
            </div>
            <h2 className="ServicesSubCommonHeadings mt-2">
              Our Portfolio In Masonry Takeoff
            </h2>
            <p className=" paragraph">
              We have served many contractors across the globe by providing
              highly precise and comprehensive estimates for home facades,
              flooring, chimneys, fireplaces, combustion chamber, patios,
              driveways, sidewalks, walls, and columns, etc. for the following
              projects:
              <ul>
                <li>Public</li>
                <li>Bridges</li>
                <li>Commercial</li>
                <li>Residential</li>
                <li>Industrial</li>
                <li>Institutional</li>
                <li>Educational</li>
                <li>Landscaping</li>
                <li>Restoration/Repair</li>
              </ul>
            </p>

            {/* <h2 className="ServicesSubCommonHeadings mt-2">
              Our estimation is for masonry
            </h2>
            <p className=" paragraph">
              {" "}
              Our wide-ranging experience and practical understanding in the AEC
              industry positions us as authorities in delivering detailed and
              prompt quotations for masonry projects to an assortment of
              clientele. This list insists of general contractors, masonry
              specialists, masonry repair experts, suppliers, stone workers,
              developers, architects, designers, and residential builders.
            </p> */}
            <img
              src={MassonaryEstimationPic}
              className="ConcreteEstimationPic mt-4"
              alt=""
            />
            <EffincyAccuracyDelivery />
            <h2 className="ServicesSubCommonHeadings mt-4">
              Why should you outsource your masonry estimate?
            </h2>
            <p className=" paragraph">
              {" "}
              Detailed masonry estimates require expertise in materials, labor,
              transportation, and software – a significant time commitment.
              PlanHub Estimating can help! Outsource your estimates and unlock a
              range of benefits.
              <br></br>
              Outsourcing can be an important factor in the following scenarios:
            </p>
            <div className=" " style={{ paddingLeft: "15px" }}>
              <p className=" paragraph">1. Save Time</p>

              <p className=" paragraph">2. Improve Accuracy</p>

              <p className=" paragraph">3. Win More Bids</p>

              <p className=" paragraph"> 4. Increase Profitability</p>
              <p className=" paragraph"> 5. Focus on What Matters Most</p>
            </div>
            <p className=" paragraph">
              PlanHub's team delivers accurate estimates quickly, using the
              latest technology. Contact us today for a free quote.
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
