import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import MainHomeIImg from "../Images/Frame 683.png";
import CostEstimation from "../Images/CostEstimation.png";
import MaterialTakeOff from "../Images/MaterialTakeOff.png";
import Scheduling from "../Images/Scheduling.png";
import Planning from "../Images/Planning.png";
import arrowleft from "../Images/arrow-left-solid.svg";
import Arroeright from "../Images/arrow-right-solid.svg";
import { Banner } from "../CommonComponents/Banner/Banner";
import { UploadModal } from "../CommonComponents/UploadModal/UploadModal";
import CountUp, { useCountUp } from "react-countup";
import sample1 from "../Images/sample1.png";
import sample2 from "../Images/sample2.png";
import sample3 from "../Images/sample3.png";

export const Home = () => {
  const [ImgRotator, setImgRotar] = useState("ImgRotateContainer");
  const [mainImgClass, setmainImgClass] = useState("firstImg");
  const [RestImgClass1, setRestImgClass1] = useState("restImages");
  const [RestImgClass2, setRestImgClass2] = useState("restImages");
  const [RestImgClass3, setRestImgClass3] = useState("restImages");
  const [DeActiveArrow, SetDeactiveArrow] = useState("none");
  const [DeActiveArrow2, SetDeactiveArrow2] = useState("DeActive");
  const [clickedCount, setClickedCount] = useState(1);
  const [leftRightcontainerBG1, setleftRightcontainerBG1] = useState(
    "leftRightcontainerBG1"
  );

  const [sempel1, setsempel1] = useState(sample1);
  const [sempel2, setsempel2] = useState(sample2);
  const [sempel3, setsempel3] = useState(sample3);
  const [sempelAnimation, setsempelAnimation] = useState("");
  const [sempel2Animation, setsempel2Animation] = useState("");
  const [sempel3Animation, setsempel3Animation] = useState("");

  const leftclick = () => {
    setsempelAnimation("slide-in-right");
    setsempel2Animation("slide-in-right");
    setsempel3Animation("slide-in-left");
    setsempel1(sempel2);
    setsempel2(sempel3);
    setsempel3(sempel1);
    setTimeout(() => {
      setsempelAnimation("");
      setsempel2Animation("");
      setsempel3Animation("");
    }, 1000);
  };

  const Rightclick = () => {
    setsempelAnimation("slide-in-left");
    setsempel2Animation("slide-in-left");
    setsempel3Animation("slide-in-right");
    setsempel2(sempel1);
    setsempel1(sempel3);
    setsempel3(sempel2);
    setTimeout(() => {
      setsempelAnimation("");
      setsempel2Animation("");
      setsempel3Animation("");
    }, 1000);
  };
  useCountUp({
    ref: "counter",
    // end: 1234567,
    // delay: 2000,
    enableScrollSpy: true,
  });

  const Main4ServicesArray = [
    {
      Title: "Cost Estimating",
      Description:
        "Building your dream project shouldn't be a guessing game. That's where our expert cost estimating services come in!  We are your financial roadmap builders. We'll work closely with you to understand your vision, analyze every detail, and create a detailed estimate that reflects reality.",
      LinkPage: "",
    },
    {
      Title: "Construction  Takeoff ",
      Description: (
        <>
          Our Construction Takeoff Services accurately analyze your project
          plans, identifying every screw, sheet of drywall, and beam you'll
          need. This translates to a crystal-clear picture of your material
          quantities and a rock-solid foundation for your project budget. With
          our accurate takeoffs, you can:
          <br />
          <ul>
            <li> Get precise quotes from suppliers</li>
            <li> Budget confidently for your project.</li>
            <li> Avoid costly material delays.</li>
          </ul>
        </>
      ),
      LinkPage: "",
    },
    {
      Title: "CPM Scheduling",
      Description: (
        <>
          We'll work closely with you to understand your budget goals and then
          create a detailed plan that tracks costs every step of the way. This
          way, you can stay in control, anticipate any potential bumps in the
          road, and make informed decisions throughout the project.
          {/* <ul>npm  */}
        </>
      ),
      LinkPage: "",
    },
    {
      Title: "Planning",
      Description: (
        <>
          We believe in the power of smart Planning and Accurate Estimating. Our
          expert team will work closely with you to:
          <ul>
            <li>
              Craft accurate estimates: We'll precisely calculate material and
              labor costs, ensuring your project stays within budget.
            </li>
            <li>
              Develop a clear roadmap: We'll translate your vision into a
              detailed plan, outlining each phase and identifying potential
              challenges, so you're prepared for every step.
            </li>
            <li>
              Empower your decision-making: With a clear understanding of costs
              and timelines, you can make informed decisions with confidence.
            </li>
          </ul>
        </>
      ),
      LinkPage: "",
    },
  ];
  const [scrollValue, setScrollValue] = useState(0);
  const [title, setTitle] = useState(Main4ServicesArray[0].Title);
  const [Description, setDescription] = useState(
    Main4ServicesArray[0].Description
  );
  const [Link, setLink] = useState(Main4ServicesArray[0].LinkPage);

  console.log(scrollValue);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll value from the window's scrollTop property
      const currentScrollValue =
        window.scrollY || document.documentElement.scrollTop;

      // Update the state with the current scroll value
      setScrollValue(currentScrollValue);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const RightImgeRotate = () => {
    if (clickedCount === 1) {
      setImgRotar("ImgRotateContainer2");
      setRestImgClass1("firstImg");
      setClickedCount(2);
      SetDeactiveArrow2("none");
      setleftRightcontainerBG1("leftRightcontainerBG2");
      setTitle(Main4ServicesArray[1].Title);
      setDescription(Main4ServicesArray[1].Description);
      setLink(Main4ServicesArray[1].LinkPage);
    } else if (clickedCount === 2) {
      setImgRotar("ImgRotateContainer3");
      setRestImgClass2("firstImg");
      setClickedCount(3);
      setleftRightcontainerBG1("leftRightcontainerBG3");
      setTitle(Main4ServicesArray[2].Title);
      setDescription(Main4ServicesArray[2].Description);
      setLink(Main4ServicesArray[2].LinkPage);
    } else if (clickedCount === 3) {
      setImgRotar("ImgRotateContainer4");
      setRestImgClass3("firstImg");
      setClickedCount(4);
      SetDeactiveArrow("DeActive");
      SetDeactiveArrow2("none");
      setClickedCount(4);
      setleftRightcontainerBG1("leftRightcontainerBG4");
      setTitle(Main4ServicesArray[3].Title);
      setDescription(Main4ServicesArray[3].Description);
      setLink(Main4ServicesArray[3].LinkPage);
    }
  };

  const LeftImgeRotate = () => {
    if (clickedCount === 4) {
      setImgRotar("ImgRotateContainer3");
      setRestImgClass3("restImages");
      setClickedCount(3);
      SetDeactiveArrow("none");
      setleftRightcontainerBG1("leftRightcontainerBG3");
      setTitle(Main4ServicesArray[2].Title);
      setDescription(Main4ServicesArray[2].Description);
      setLink(Main4ServicesArray[2].LinkPage);
    } else if (clickedCount === 3) {
      setImgRotar("ImgRotateContainer2");
      setRestImgClass2("restImages");
      setClickedCount(2);
      setleftRightcontainerBG1("leftRightcontainerBG2");
      setTitle(Main4ServicesArray[1].Title);
      setDescription(Main4ServicesArray[1].Description);
      setLink(Main4ServicesArray[1].LinkPage);
    } else if (clickedCount === 2) {
      setImgRotar("ImgRotateContainer");
      setRestImgClass1("restImages");
      setClickedCount(1);
      SetDeactiveArrow2("DeActive");
      setleftRightcontainerBG1("leftRightcontainerBG1");
      setTitle(Main4ServicesArray[0].Title);
      setDescription(Main4ServicesArray[0].Description);
      setLink(Main4ServicesArray[0].LinkPage);
      // SetDeactiveArrow2("none")
    }
  };

  const [ModalOpen, setModalOpen] = useState(false);

  const changeModal = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <div>
      {ModalOpen ? <UploadModal onCloseBtnClick={changeModal} /> : <div></div>}

      <div style={{ backgroundColor: "#CFF0C5" }} className="slide-in-left">
        <Helmet>
          <title>
            PlanHub Estimators - Reliable Construction Estimating Services
          </title>
          <meta
            name="description"
            content="Get accurate cost estimates with PlanHub Estimators. Our expert team provides reliable construction estimating services for your construction projects."
          />
        </Helmet>
        <div style={{ backgroundColor: "white" }}>
          <div
            style={{ backgroundColor: "white" }}
            className="Section1 container  mt-3 "
          >
            <h1 className="Section1_MainHeading  text-uppercase ">
              Faster takeoffs, more accurate construction estimating services-
              all made possible with our solution!
            </h1>
            <div className="SubHeadingContainer ">
              <p className="SubHeading ">
                Easily perform Cost Estimating, Quantities & Material Takeoff,
                and Scheduling for your projects
              </p>
            </div>
            <div className="mainImgContainer">
              <button onClick={changeModal} className="UploadPlansbtn">
                Upload Plans
              </button>
              <img src={MainHomeIImg} className="MainHomeIImg" alt="" />
            </div>
          </div>
        </div>
        <div
          className="Section2  pt-3 pb-3"
          style={{ backgroundColor: "#CFF0C5" }}
        >
          <div className={leftRightcontainerBG1}>
            <div className="LeftPart">
              <div className={`MainServicesTextContainer`}>
                <h2 className="MainServicesTitle">{title}</h2>
                <p className="MainServicesText">{Description}</p>
              </div>
              <div className="ArrowContainer">
                <button
                  className={`arrow ${DeActiveArrow2}`}
                  onClick={LeftImgeRotate}
                >
                  {" "}
                  <img src={arrowleft} alt="" />{" "}
                </button>
                <button
                  className={`arrow ${DeActiveArrow}`}
                  onClick={RightImgeRotate}
                >
                  {" "}
                  <img src={Arroeright} alt="" />{" "}
                </button>
              </div>
            </div>
            <div className="RightPart">
              <div className={ImgRotator}>
                <div className={mainImgClass}>
                  {" "}
                  <img
                    src={CostEstimation}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />{" "}
                </div>
                <div className={RestImgClass1}>
                  {" "}
                  <img
                    src={MaterialTakeOff}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>
                <div className={RestImgClass2}>
                  {" "}
                  <img
                    src={Scheduling}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>
                <div className={RestImgClass3}>
                  {" "}
                  <img
                    src={Planning}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WhyChooseUsContainer">
          <div className="MainPointsContainer">
            <h1>ACCURACY</h1>
            <h1>EFFICENCY</h1>
            <h1>DEDICATION</h1>
            <h1>RELIABILITY</h1>
            <div
              className={`ACCURACYStatement ${
                scrollValue > 600 ? "scale-in-top" : ""
              }`}
            >
              <div className="OurAccuracyContainer">
                <h4 className=" m-0 mt-1 fw-bold text-center ">ACCURACY</h4>
                <p className="OurAccuracyParagraph ">
                  Our expert estimators accurately analyze every detail, from
                  materials to labor, to give you a clear picture of the true
                  costs involved. Our construction estimating services work
                  closely with you to consider every aspect of your project,
                  ensuring your estimate is as accurate as possible.
                </p>
              </div>
            </div>
            <div
              className={`EFFICENCYStatement ${
                scrollValue > 600 ? "scale-in-top" : ""
              }`}
            >
              <div className="OurAccuracyContainer">
                <h4 className=" m-0 mt-1 fw-bold text-center ">EFFICENCY</h4>
                <p className="OurEFFICENCYParagraph ">
                  Imagine bidding on projects with confidence, knowing exactly
                  what you're getting into. That's the power of efficient
                  construction estimating services. We bring expertise and
                  efficiency to the table, ensuring:
                  <ul>
                    <li> Precise takeoffs</li>
                    <li> Competitive pricing</li>
                    <li> Faster turnaround times</li>
                  </ul>
                </p>
              </div>
            </div>
            <div
              className={`DEDICATIONStatement ${
                scrollValue > 1000 ? "scale-in-top" : ""
              }`}
            >
              <div className="OurDEDICATIONContainer">
                <h4 className=" m-0 mt-1 fw-bold text-center ">DEDICATION</h4>
                <p className="OurEFFICENCYParagraph p-3 mt-md-1 ">
                  Here at{" "}
                  <strong style={{ color: "#20B621" }}>
                    PlanHub Estimators{" "}
                  </strong>
                  , dedication isn't just a word, it's the foundation of
                  everything we do. We understand that accurate and reliable
                  estimates are crucial for the success of your construction
                  project. we take the time to understand your vision, your
                  budget, and your unique need with our construction estimating
                  services.  
                </p>
              </div>
            </div>
            <div
              className={`RELIABILITYStatement ${
                scrollValue > 1000 ? "scale-in-top" : ""
              }`}
            >
              <div className="OurRELIABILITYContainer">
                <h4 className=" m-0 mt-1 fw-bold text-center ">RELIABILITY</h4>
                <p className="OurRELIABILITYParagraph p-3 mt-md-0">
                  Choosing a reliable Construction Estimating Service is crucial
                  for your project's success. It provides a clear and accurate
                  picture of your project's costs, giving you the confidence to
                  move forward with informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "" }} className="Bgpic  mt-5  ">
          <div
            style={{ backgroundColor: "#000000b8", color: "white" }}
            className="row w-100 m-0 justify-content-center  pt-lg-5 pb-lg-5 pt-sm-3  pt-sm-3 "
          >
            <div
              className="col-md-3 col-sm-6 col-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center">
                <h1 className="fw-bold">
                  {" "}
                  <CountUp end={3500} enableScrollSpy />+
                </h1>
                <p>Projects</p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-12 pt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center">
                <h1 className="fw-bold">
                  {" "}
                  <CountUp end={1000} enableScrollSpy />+
                </h1>
                <p>Clients</p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-12 pt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center">
                <h1 className="fw-bold">
                  {" "}
                  <CountUp end={150} enableScrollSpy />+
                </h1>
                <p>Estimators Staff</p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-12 pt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center">
                <h1 className="fw-bold">
                  {" "}
                  <CountUp end={100} enableScrollSpy />+
                </h1>
                <p> Management Staff</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#CFF0C5" }}>
          <h4 className="text-center mt-5">Projects</h4>
          <div className="sampalsContainer">
            <div className={`sampleImgsContainer`}>
              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className={`width25   ${sempelAnimation}`}
              >
                <img src={sempel1} className="sampleImg" alt="" />
              </div>

              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className={`width50 ${sempel2Animation} `}
              >
                <img src={sempel2} className="sampleImg" alt="" />
              </div>
              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className={`width25 ${sempel3Animation} `}
              >
                <img src={sempel3} className="sampleImg" alt="" />
              </div>
            </div>
          </div>
          <div className=" text-center">
            <button className=" arrow" disabled={false} onClick={leftclick}>
              <img src={arrowleft} alt="" />{" "}
            </button>
            <button className=" arrow" onClick={Rightclick}>
              <img src={Arroeright} alt="" />{" "}
            </button>
          </div>
        </div>
        <div
          className="section4  pt-lg-5 pt-4"
          style={{ backgroundColor: "#CFF0C5" }}
        >
          <div className=" GreenDotsPipeContainer">
            <h1 className="hideOnSmallDevice">Our Clients</h1>
            <div className="GreenDotsPipe">
              <div className="GreenDotsPipeLineContainer">
                <div
                  className={` GreenDotsPipetext firstLastRowWidth GreenDotsPipeLine ${
                    scrollValue > 2250 ? "slide-in-left" : ""
                  }`}
                >
                  <p className="m-0">General Contractors</p>
                  <span className="GreenDot"></span>
                </div>

                <div
                  className={` GreenDotsPipetext2 firstLastRowWidth GreenDotsPipeLine2 ${
                    scrollValue > 2250 ? "slide-in-right" : ""
                  }`}
                >
                  <span className="GreenDot2"></span>
                  <p className="m-0">Remodeling Contractors</p>
                </div>
              </div>

              <div className="GreenDotsPipeLineContainer">
                <div
                  className={`GreenDotsPipetext second_4thWidth GreenDotsPipeLine ${
                    scrollValue > 2350 ? "slide-in-left" : ""
                  }`}
                >
                  <p className="m-0"> Subcontractors</p>
                  <span className="GreenDot"></span>
                </div>

                <div
                  className={`GreenDotsPipetext2 second_4thWidth GreenDotsPipeLine2 ${
                    scrollValue > 2350 ? "slide-in-right" : ""
                  }`}
                >
                  <span className="GreenDot2"></span>
                  <p className="m-0">Vendors</p>
                </div>
              </div>

              <div className="GreenDotsPipeLineContainer">
                <div
                  className={`GreenDotsPipetext CenterdWidth GreenDotsPipeLine ${
                    scrollValue > 2399 ? "slide-in-left" : ""
                  } `}
                >
                  <p className="m-0">Home Builders</p>
                  <span className="GreenDot"></span>
                </div>

                <div
                  className={`GreenDotsPipetext2 CenterdWidth GreenDotsPipeLine2 ${
                    scrollValue > 2399 ? "slide-in-right" : ""
                  } `}
                >
                  <span className="GreenDot2"></span>
                  <p className="m-0">Suppliers</p>
                </div>
              </div>

              <div className="GreenDotsPipeLineContainer">
                <div
                  className={`GreenDotsPipetext second_4thWidth  GreenDotsPipeLine ${
                    scrollValue > 2450 ? "slide-in-left" : ""
                  }`}
                >
                  <p className="m-0">Developers</p>
                  <span className="GreenDot"></span>
                </div>

                <div
                  className={`GreenDotsPipetext2 second_4thWidth GreenDotsPipeLine2  ${
                    scrollValue > 2450 ? "slide-in-right" : ""
                  }`}
                >
                  <span className="GreenDot2"></span>
                  <p className="m-0">Engineers</p>
                </div>
              </div>

              <div className="GreenDotsPipeLineContainer">
                <div
                  className={`GreenDotsPipetext firstLastRowWidth GreenDotsPipeLine ${
                    scrollValue > 2450 ? "slide-in-left" : ""
                  }`}
                >
                  <p className="m-0">Architects</p>
                  <span className="GreenDot"></span>
                </div>

                <div
                  className={`GreenDotsPipetext2 firstLastRowWidth GreenDotsPipeLine2 ${
                    scrollValue > 2450 ? "slide-in-right" : ""
                  }`}
                >
                  <span className="GreenDot2"></span>
                  <p className="m-0">Home Owners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>{" "}
      </div>
      <div>
        <Banner />
      </div>
    </div>
  );
};
