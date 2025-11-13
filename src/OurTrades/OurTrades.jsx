import React from "react";
import "./OurTrades.css";
import { Helmet } from "react-helmet";
import { AllServicesCardContainer } from "../CommonComponents/AllServicesCardContainer";
import GeneralConstruction from "../Images/GeneralConstruction.png";

import TradeImg1 from "../Images/GeneralConstruction.png";
import TradeImg2 from "../Images/SiteWork.png";
import TradeImg3 from "../Images/Concrete.png";
import TradeImg4 from "../Images/masonary.png";
import TradeImg5 from "../Images/Metals.png";
import TradeImg6 from "../Images/WoodAndPlastic.png";
import TradeImg7 from "../Images/ThermalAnd Moisture.png";
import TradeImg8 from "../Images/Framing.png";
import TradeImg9 from "../Images/Finishes.png";
import TradeImg10 from "../Images/Specialities.png";
import TradeImg11 from "../Images/Equipments.png";
import TradeImg12 from "../Images/Furnsihing.png";
import TradeImg13 from "../Images/SpecialConstruction.png";
import TradeImg14 from "../Images/ConveyingSystem.png";
import TradeImg15 from "../Images/MechanicalAndPlumbing.png";
import TradeImg16 from "../Images/Electrical.png";
import TradeImg17 from "../Images/HVAC.png";
import TradeImg18 from "../Images/Commerical.png";
import TradeImg19 from "../Images/Industrial.png";
import TradeImg20 from "../Images/Residetial.png";

import TradeImg21 from "../Images/gutterMainimg.png";
import { PageNameContainer } from "../CommonComponents/PageNameContainer";
import { Banner } from "../CommonComponents/Banner/Banner";
import { CirculerCard } from "../CommonComponents/CirculerCard";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
export const OurTrades = () => {
  const sevicesArray = [
    {
      ServiceTitle: "General Requirements",
      Link: "/general-requirements/",
      ServiceImg: TradeImg1,
    },
    {
      ServiceTitle: "Sitework",
      Link: "/sitework-estimating-services/",
      ServiceImg: TradeImg2,
    },
    {
      ServiceTitle: "Concrete",
      Link: "/concrete-estimating-services/",
      ServiceImg: TradeImg3,
    },
    {
      ServiceTitle: "Masonry",
      Link: "/masonry-estimating-services/",
      ServiceImg: TradeImg4,
    },
    {
      ServiceTitle: "Metals",
      Link: "/metals-estimating-services/",
      ServiceImg: TradeImg5,
    },
    {
      ServiceTitle: "Lumber Takeoff",
      Link: "/lumber-takeoff-services/",
      ServiceImg: TradeImg6,
    },
    {
      ServiceTitle: "Thermal and Moisture Protection",
      Link: "/thermal-moisture-protection-estimating-services/",
      ServiceImg: TradeImg7,
    },
    {
      ServiceTitle: "Framing",
      Link: "/framing-estimating-services/",
      ServiceImg: TradeImg8,
    },
    {
      ServiceTitle: "Finishes",
      Link: "/interior-exterior-finishes/",
      ServiceImg: TradeImg9,
    },
    {
      ServiceTitle: "Specialities",
      Link: "/specialties/",
      ServiceImg: TradeImg10,
    },
    {
      ServiceTitle: "Equipment",
      Link: "/equipment-estimating-services/",
      ServiceImg: TradeImg11,
    },
    {
      ServiceTitle: "Furnishings",
      Link: "/furnishing-estimating-services/",
      ServiceImg: TradeImg12,
    },
    {
      ServiceTitle: "Special Construction",
      Link: "/special-construction-estimating-services/",
      ServiceImg: TradeImg13,
    },
    {
      ServiceTitle: "Conveying System",
      Link: "/conveying-system-estimating-services/",
      ServiceImg: TradeImg14,
    },
    {
      ServiceTitle: "Mechanical Estimating",
      Link: "/mechanical-estimating-services/",
      ServiceImg: TradeImg15,
    },
    {
      ServiceTitle: "Electrical Estimating",
      Link: "/electrical-estimating-services/",
      ServiceImg: TradeImg16,
    },
    {
      ServiceTitle: "HVAC Estimating",
      Link: "/hvac-estimating-services/",
      ServiceImg: TradeImg17,
    },
    {
      ServiceTitle: "Commerical Estimating",
      Link: "/commercial-estimating-services/",
      ServiceImg: TradeImg18,
    },
    {
      ServiceTitle: "Industrial Estimating",
      Link: "/industrial-estimating-services/",
      ServiceImg: TradeImg19,
    },
    {
      ServiceTitle: "Residental Estimating",
      Link: "/residential-estimating-services/",
      ServiceImg: TradeImg20,
    },
    {
      ServiceTitle: "Gutter Estimating",
      Link: "/Gutter-estimating-services/",
      ServiceImg: TradeImg21,
    },
    {
      ServiceTitle: "Plumbing Estimating ",
      Link: "/plumbing-estimating-services/",
      ServiceImg: TradeImg15,
    },
  ];

  const text = (
    <>
      <strong>Top-Notch PlanHub Trades</strong>

      <p style={{ marginTop: "25px" }}>
        At <b> PlanHub Estimators</b>, we offer top-notch trade services
        tailored for clients in the United States. Our dedicated team is
        committed to serving individuals and businesses nationwide with
        expertise crafted just for you. Choose PlanHub Estimators for
        unparalleled quality and personalized attention to your construction
        estimating needs.
      </p>
    </>
  );
  const img = (
    <>
      <img
        style={{ borderRadius: "20px", boxShadow: "3px 3px 8px 0px black" }}
        className=" ourTradeHTHIclass "
        src={require("../Images/Frame 686.png")}
        alt=""
      />
    </>
  );
  return (
    <div style={{ backgroundColor: " #CFF0C5" }} className="">
      <Helmet>
        <title>
          Our Trades - PlanHub Estimators - Construction Cost Estimating
        </title>
        <meta
          name="description"
          content="Discover comprehensive construction cost estimating services. From materials to labor, we provide accurate and reliable estimates for your projects."
        />
        {/* Add other head elements as needed */}
      </Helmet>
      <PageNameContainer pageName="Our Trades " />
      <div className=" mt-4 mb-5">
        <HalfTextHalfImg text={text} img={img} />
      </div>
      <div className="AllServicesCardContainerPadding slide-in-left ">
        <AllServicesCardContainer data={sevicesArray} />
      </div>
      <Banner />
    </div>
  );
};
