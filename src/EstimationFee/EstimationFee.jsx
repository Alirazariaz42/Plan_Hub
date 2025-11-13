import React, { useContext, useEffect, useState } from "react";
import "./EstimationFees.css";
import { Banner } from "../CommonComponents/Banner/Banner";
import EstimationFeePackages from "../Images/EstimationFeePackages.png";
import Vector from "../Images/Vector.png";
import { Link } from "react-router-dom";
import callIcon from "../Images/callIcon.png";
import OurPackages from "../Images/OurPackages.png";
import { Helmet } from "react-helmet";
import { GetStartedwithUs } from "../CommonComponents/GetStartedwithUs";
import { MyContext } from "../Store/Context";
export const EstimationFee = () => {
  const [scrollValue, setScrollValue] = useState(0);

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
  const toggleModal = useContext(MyContext);

  const handleClick = () => {
    toggleModal();
  };
  return (
    <div style={{ backgroundColor: "#CFF0C5", width: "100%" }}>
      <Helmet>
        <title>PlanHub Estimators Fee - Transparent Pricing</title>
        <meta
          name="description"
          content="Explore PlanHub Estimators fee for accurate construction cost estimates. Transparent pricing to help you plan your projects with confidence."
        />
      </Helmet>
      <div className="  ">
        <div className=" container-lg text-center pt-4">
          <h2 className=" fw-bold">Estimating Fee</h2>
          <p className=" mt-3 paragraph">
            <b>PlanHub Estimators</b> always like to hear from clients about the
            budget of the project so we have no fix rates about our services. We
            charge on a per-project basis, and we keep our prices low to enable
            our clients to bid on more projects with minimal fee. The estimated
            fee for a project can range from $75 to $550 or more, depending on
            the project's scope and size. We can even handle projects that have
            a fee of $100 or less.
          </p>
        </div>
        <div>
          {/* <div className=" row w-100 mt-5 p-0 ">
            <div className="col-md-6  slide-in-left">
              <div
                className={` GreenDotsPipetext firstLastRowWidth GreenDotsPipeLine slide-in-left w-100`}
              >
                <p className="m-0">General Constructors</p>
                <span className="GreenDot"></span>
              </div>
              <div className=" container-lg">
                <p className=" pt-4 p-md-5 p-4 paragraph">
                  If you could forward us the plans and specify whether you want
                  us to bid on the entire project or only certain areas, we can
                  proceed accordingly. Upon a thorough review of the drawings,
                  we will provide you with a fee proposal for your
                  consideration. We will only commence work after you have
                  approved the proposal and we will ensure that the project is
                  completed by or before the due date.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-0 slide-in-right ">
              <div
                className={` GreenDotsPipetext2 firstLastRowWidth GreenDotsPipeLine2 w-100`}
              >
                <span className="GreenDot2"></span>
                <p className="m-0">Remodeling Constructors</p>
              </div>
              <div className=" container-lg">
                <p className="pt-4 p-md-5 p-4 paragraph">
                  {" "}
                  We deliver our work in an editable Excel sheet. If needed, we
                  can use your template or include your company details on the
                  estimate/proposal. For quantities takeoff, we use software
                  tools such as Planswift, BlueBeam, and On-Screen Takeoff
                  (OST). Our preferred software for this is PlanSwift. If
                  required, we would be happy to provide you with software
                  files, as well as markuaps and color drawings.
                </p>
              </div>
            </div>
          </div> */}
          <div className=" container-lg">
            <div className="OurPackagesImgContainer">
              <img src={OurPackages} className="OurPackagesImg" alt="" />
            </div>
            <div className=" row w-100 m-0 justify-content-center">
              <div
                className="col-lg-4 col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="EstimationfeeCardContainer">
                  <h6 className="fw-bold text-center m-0">
                    Single trade pricing
                  </h6>
                  <p className="StartingAt">Starting at</p>
                  <h5 className="fw-bold text-center mt-1">$150/trade</h5>
                  <p className="paymentParagraph">
                    We charge ($150 to $500) for a single trade project and the
                    cost will vary on project Complexity.
                  </p>
                  <Link to="//contact-us/" className="EstimationfeeCardButton">
                    Get started
                  </Link>
                  <button
                    onClick={handleClick}
                    className="EstimationfeeCardButton"
                  >
                    Upload plans
                  </button>
                  <h5 className=" text-center mt-2 mb-2">FEATURES</h5>
                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Turnaround Time 2 to 3 days
                    </p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Any Trade or Any Kind of Project
                    </p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Free Quote Within 5 to 10 Minutes
                    </p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">Free Consultation</p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">24/7 Email Support</p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">Call Support</p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Immediate and Unlimited Revisions
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="EstimationfeeCardContainer">
                  <h6 className="fw-bold text-center m-0">Monthly</h6>
                  <p className="StartingAt">Starting at</p>
                  <h5 className="fw-bold text-center mt-1">$1500/mo</h5>
                  <p className="paymentParagraph">
                    We charge ($1500 to $2500) for a projects and the cost will
                    vary on project Complexity.
                  </p>
                  <div style={{ marginTop: "32px" }}>
                    <Link
                      to="//contact-us/"
                      className="EstimationfeeCardButton"
                    >
                      Get started
                    </Link>
                    <button
                      onClick={handleClick}
                      className="EstimationfeeCardButton"
                    >
                      Upload plans
                    </button>
                  </div>

                  <h5 className=" text-center mt-2 mb-2">FEATURES</h5>
                  <div className="EstimationfeePointsContainer ">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Bid Filing and Consultation
                    </p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Material Takeoffs and Cost Management
                    </p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Free Quote Within 5 to 10 Minutes
                    </p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints"> Free Consultation </p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">24/7 Email Support</p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">Call Support</p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="EstimationfeeCardContainer">
                  <h6 className="fw-bold text-center m-0">
                    Dedicated Estimators
                  </h6>
                  <p className="text-center mt-4 ">
                    <a
                      style={{ textDecoration: "none" }}
                      href="tel:+ 1 917 720 3892"
                    >
                      <img src={callIcon} alt="" />
                      <br></br>
                      <span style={{ color: "black" }}></span>
                    </a>
                  </p>

                  <h6 className="fw-bold text-center mt-4 mb-3">
                    Call for Price
                  </h6>

                  <Link to="/contact-us/" className="EstimationfeeCardButton">
                    Get started
                  </Link>
                  <button
                    onClick={handleClick}
                    className="EstimationfeeCardButton"
                  >
                    Upload plans
                  </button>
                  <h5 className=" text-center mt-2 mb-2">FEATURES</h5>
                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">Dedicated Resources</p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">Feasibility Studies</p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Consultation on smartly filing bids
                    </p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Manage the bidding network profiles
                    </p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">Project Scheduling</p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">Call Support</p>
                  </div>

                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">Material Takeoffs</p>
                  </div>
                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">Cost Management</p>
                  </div>
                  <div className="EstimationfeePointsContainer">
                    <img
                      className="pionttick "
                      src={Vector}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <p className="EstimationfeePoints">
                      Turnaround Time 2 to 3 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GetStartedwithUs />
        </div>
      </div>
      <Banner />
    </div>
  );
};
