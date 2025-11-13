import React from "react";
import "./AboutUs.css";
import Vectarytexture from "../Images/Vectary texture.png";
import OurMission from "../Images/OurMission.png";
import OurVission from "../Images/OurVission.png";
import { Banner } from "../CommonComponents/Banner/Banner";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Helmet } from "react-helmet";

export const AboutUs = () => {
  const img = (
    <>
      <img src={Vectarytexture} className="AboutUsMainImg" alt="img" />
    </>
  );

  const OurMissionImg = (
    <>
      <img src={OurMission} height={200} width={170} alt="img" />
    </>
  );

  const OurVissionImg = (
    <>
      <img src={OurVission} height={150} width={170} alt="img" />
    </>
  );
  const text = (
    <>
      <b>PlanHub Estimators</b> is dedicated to delivering a full range of
      construction planning services, such as cost estimation, material
      takeoffs, and scheduling. We serve a wide range of clients, including
      contractors, subcontractors, material suppliers and manufacturers. To
      provide accurate and dependable estimates, our skilled staff focuses
      knowing each client's unique requirements. We are proud of our great track
      record of serving developers, architectural firms, and contracting
      organizations across the United States.
    </>
  );

  const text2 = (
    <>
      Our Mission Our goal is to establish and maintain successful business
      relationships by providing uncompromising quality, reliable accuracy, and
      fast turnaround times to General Contractors, Home Builders,
      Subcontractors, Architects, Developers, and Homeowners.
    </>
  );

  const text3 = (
    <>
      We are committed to developing and sustaining long-term, mutually
      beneficial partnerships with our clients. Our commitment to satisfying
      customer demands in terms of delivery time, cost-effectiveness, and
      precision is what defines us. If you have any questions or would want to
      learn more about our skills, knowledge, and track record, please do not
      hesitate to inquire. We are convinced that we will meet and exceed your
      expectations.
    </>
  );
  return (
    <div style={{ backgroundColor: "#CFF0C5" }}>
      <Helmet>
        <title>About- PlanHub Estimators - Our Story & Expertise</title>
        <meta
          name="description"
          content="Discover the story of PlanHub Estimators. Learn about our expertise in providing precise construction cost estimates. Your trusted partner in Estimating."
        />
      </Helmet>
      <div className="slide-in-left">
        <div className=" pt-5">
          <CommonHeading text="About us" />
          <div className="mt-5 ">
            <HalfTextHalfImg img={img} text={text} />
          </div>
        </div>

        <div className=" mt-5">
          <div className="">
            <CommonHeading text="Our Mission" />
          </div>
          <div className="">
            <HalfTextHalfImg img={OurMissionImg} text={text2} />
          </div>
        </div>

        <div className=" mt-5 mb-5">
          <CommonHeading text="Our Vision" />
          <HalfImgHalfText img={OurVissionImg} text={text3} />
        </div>

        <div className=" container-lg">
          <div className=" mt-5 mb-5">
            <CommonHeading text="Our Services" />
            <p className=" paragraph p-3">
              <b>PlanHub Estimators</b> a wide range of solutions to meet our
              clients' particular needs in the most efficient manner. The
              portfolio of services includes:
            </p>
            <div className=" row m-0 w-100">
              <div className="col-md-6 col-12">
                <p className=" paragraph">
                  <ul>
                    <li>Construction Cost Estimating </li>
                    <li> Quantities & Material Takeoff </li>
                    <li>Scheduling </li>
                  </ul>
                </p>
              </div>
              <div className="col-md-6 col-12">
                <p className=" paragraph">
                  <ul>
                    <li>Bidding Assistance </li>
                    <li> Planning </li>
                    <>
                      <ul>
                        <li>Strategic planning</li>
                        <li>Operational planning</li>
                      </ul>
                    </>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-5 mb-5">
            <CommonHeading text="All CSI Trades" />
            <p className=" paragraph p-3">
              With a staff of in-house trade specialist estimators and
              engineers, we can provide cost estimating and consultancy for all
              CSI divisions inside a single company.
            </p>
            <div className=" row m-0 w-100">
              <div className="col-md-6 col-12">
                <p className=" paragraph">
                  <ul>
                    <li> General Conditions </li>
                    <li>Sitework </li>
                    <li>Concrete </li>
                    <li>Masonry </li>
                    <li>Metals </li>
                    <li>Finishes </li>
                  </ul>
                </p>
              </div>
              <div className="col-md-6 col-12">
                <p className=" paragraph">
                  <ul>
                    <li>Mechanical </li>
                    <li> Electrical</li>
                    <li> Plumbing</li>
                    <li> Wood/Plastic Composites</li>
                    <li> Thermal/Moisture Protection</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-5 mb-5">
            <CommonHeading text="Our Projects" />
            <p className=" paragraph p-3">
              Our extensive experience and ability to handle complex building
              projects have enabled us to provide construction cost estimating
              and advising services in a variety of construction industries,
              including collaboration with well-known governmental
              organizations.
            </p>
            <div className=" row m-0 w-100">
              <div className="col-md-6 col-12">
                <p className=" paragraph">
                  <ul>
                    <li> Mixed $ Multi-use Residential </li>
                    <li>Commercial </li>
                    <li>Industrial </li>
                    <li>Retail </li>
                    <li>Institutional </li>
                  </ul>
                </p>
              </div>
              <div className="col-md-6 col-12">
                <p className=" paragraph">
                  <ul>
                    <li> Civil & Public Works </li>
                    <li> Airports & Highways </li>
                    <li> Parks & Recreation </li>
                    <li> Mining & Marine</li>
                  </ul>
                </p>
              </div>
            </div>
            <div>
              <p className=" paragraph text-center">
                {" "}
                Over a decade in the AEC business, we have gained a thorough
                awareness of the fast changing construction setting and can
                assist our customers accordingly. To save you money and time, we
                combine industry knowledge, innovative technology, and a
                constant effort to improve construction estimating, scheduling,
                and cost management practices. If you want the assistance of an
                expert, we can arrange you one.
                <br />
                <b>
                  Reach us at{" "}
                  <a style={{ color: "black" }} href="tel:+1 917 300 1079">
                    {" "}
                    +1 917 300 1079
                  </a>
                </b>
                .
              </p>
            </div>
          </div>
        </div>

        <Banner />
      </div>
    </div>
  );
};
