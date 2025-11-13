import React from "react";

import { OurTradesSidebar } from "../CommonComponents/OurTradesSidebar";
import { Banner } from "../CommonComponents/Banner/Banner";
import { EffincyAccuracyDelivery } from "../CommonComponents/EffincyAccuracyDelivery";
export const Specialities = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <div className=" container-lg">
        <h1 className="ServicesCommonHeadings  text-center">Specialties</h1>
        <div className=" row w-100 m-sm-0">
          <div className="col-lg-3 col-12 hideonMediumScreen">
            <OurTradesSidebar />
          </div>
          <div className="col-lg-9 col-12 ">
            <p className=" paragraph">
              There are many construction estimating services in the market, but
              they provide a limited number of options for the constructors.
              <b>PlanHub Estimators</b> services are special when compared to
              the rest of the companies due to the following specialties.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">Extensive range</h2>
            <p className=" paragraph">
              Under one roof, <strong>PlanHub Estimators </strong>offer a wide
              range of construction estimation services. For any other
              construction estimating services, our client doesn't need to speak
              with any other businesses. We offer a wide range of services,
              including software consultation, material field audits, bid
              estimates, conceptual cost estimating, material takeoffs, and
              frame estimation. This gives our clients the easiest and most
              convenient approach to use <strong>PlanHub Estimators </strong>
              Services for all services on a single platform.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Comprehensive and accurate Cost Estimating
            </h2>
            <p className="paragraph">
              We forecast a detailed and accurate estimate of construction costs
              due to the ability of our skilled teams and software to process
              the whole process of construction estimating services smoothly.
              Over company has been in the market for a long time and has
              provided its expertise to many clients. Over team provides keen
              attention to every aspect related to construction estimating
              services.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">Material takeoff</h2>
            <p className=" paragraph">
              We forecast a detailed and accurate estimate of construction costs
              due to the ability of our skilled teams and software to process
              the whole process of construction estimating services smoothly.
              Over company has been in the market for a long time and has
              provided its expertise to many clients. Over team provides keen
              attention to every aspect related to construction estimating
              services.
            </p>

            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/SpecialitiesExtrapic.png")}
                width={"100%"}
                alt=""
              />
            </div>
            <h2 className="ServicesSubCommonHeadings mt-2">
              Construction Scheduling
            </h2>
            <p className=" paragraph">
              The process of scheduling in construction involves creating an
              outline plan for the successful construction execution of a
              construction project. It is like a blueprint before making the
              actual building. All our construction estimating services are done
              through the latest software like Blue Beam, on-screen takeoff
              (OST), and Plan Swift. Moreover, they are regularly updated to
              compete and follow the latest trends in the construction industry.
            </p>
            <EffincyAccuracyDelivery />
            <h2 className="ServicesSubCommonHeadings mt-2">Cost controls</h2>
            <p className=" paragraph">
              <b> PlanHub Estimators</b>'  Cost Estimating Services are applied
              on the site during the construction phase which involves services
              such as estimating, general project management, document controls,
              field inspection scheduling, etc. It enables both our team and our
              client to resolve any issues when it comes to the field. Our team
              will sort out any type of issue regarding construction cost
              estimating services in the field.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              {" "}
              Construction designing
            </h2>
            <p className=" paragraph">
              Our company offers an in-depth approach to construction cost
              estimating services related to construction design. We have a
              well-coordinated team that provides all the services about
              construction designing such as schedule management, functional
              ability, and schedule management. With a keen focus on quality and
              efficiency in processing the provided resources, we specialize in
              making special budgetary plans for design.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Budget estimating
            </h2>
            <p className=" paragraph">
              <b> PlanHub Estimators </b> construction estimating services are
              known for making accurate and cost-effective budget estimates due
              to extensive experience in the field. Our company is famous for
              construction estimating services in all sorts of projects ranging
              from competitive to hard bidding.
            </p>
            <div className=" mt-5 mb-5">
              <img
                src={require("../../src/Images/SpecialitiesExtrapic2.png")}
                width={"100%"}
                alt=""
              />
            </div>
            <h2 className="ServicesSubCommonHeadings mt-2">
              Construction Management
            </h2>
            <p className=" paragraph">
              Our construction cost estimating services are for all types of
              companies and projects. Whether you are a company new in the
              market or an experienced one we are here to provide construction
              estimating services for all types of projects.
            </p>

            <h2 className="ServicesSubCommonHeadings mt-2">
              Value engineering
            </h2>
            <p className=" paragraph">
              Our construction estimating services provide in-depth value
              analysis at the lowest rates when compared with the market. We
              provide quality construction cost estimating services ensuring
              that they are affordable for our dear clients. In this way, our
              clients get quality construction estimating services which are the
              best and easiest to afford in the market in construction
              estimating services.
            </p>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
