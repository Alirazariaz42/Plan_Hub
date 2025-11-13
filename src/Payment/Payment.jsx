import React from "react";
import { Banner } from "../CommonComponents/Banner/Banner";
import BankIcon1 from "../Images/BankIcon1.png";
import BankIcon2 from "../Images/BankIcon2.png";
import BankIcon3 from "../Images/BankIcon3.png";
import BankIcon4 from "../Images/BankIcon4.png";
import BankIcon5 from "../Images/BankIcon5.png";
import BankIcon6 from "../Images/BankIcon6.png";
import BankIcon7 from "../Images/BankIcon7.png";
import { Helmet } from "react-helmet";
import "./Payment.css";
import { GetStartedwithUs } from "../CommonComponents/GetStartedwithUs";
export const Payment = () => {
  return (
    <div style={{ backgroundColor: " #CFF0C5" }}>
      <Helmet>
        <title>Secure Payments - PlanHub Estimators</title>
        <meta
          name="description"
          content="Make secure payments for construction cost estimates with PlanHub Estimators. Easy and reliable transactions for your convenience."
        />
      </Helmet>
      <div className=" container p-md-5 slide-in-left">
        <div className=" text-center">
          <h1 className=" fw-bold"> Payments</h1>
        </div>
        <h2 className=" fw-bold">Refunds Policy</h2>
        <p className="mt-lg-3 paragraph">
          Our policy only permits for trades and not refunds. Our main objective
          is to guarantee that our customers feel pleased with their purchases.
        </p>
        <div className="  container-lg PaymentMaythedContainer">
          <h2 className="Payment_Method fw-bold">Payment Method</h2>
          <div className=" row  w-100 m-0 justify-content-center">
            <div className="col">
              <div className="BankIconContainer">
                <a href="https://usa.visa.com/about-visa.html" target="blank">
                  <img src={BankIcon1} alt="img" />
                </a>
              </div>
            </div>

            <div className="col">
              <div className="BankIconContainer">
                <a href="https://stripe.com" target="blank">
                  <img src={BankIcon2} alt="img" />
                </a>
              </div>
            </div>

            <div className="col">
              <div className="BankIconContainer">
                <a href="https://www.mastercard.us/en-us.html" target="blank">
                  <img src={BankIcon3} alt="img" />
                </a>
              </div>
            </div>

            <div className="col">
              <div className="BankIconContainer">
                <a href="https://www.discover.com" target="blank">
                  <img src={BankIcon4} alt="img" />
                </a>
              </div>
            </div>

            <div className="col">
              <div className="BankIconContainer">
                <a href="https://www.bankofamerica.com" target="blank">
                  <img src={BankIcon5} alt="img" />
                </a>
              </div>
            </div>

            <div className="col">
              <div className="BankIconContainer">
                <a href="https://www.chase.com" target="blank">
                  <img src={BankIcon6} alt="img" />
                </a>
              </div>
            </div>

            <div className="col">
              <div className="BankIconContainer">
                <a href="https://www.emiratesnbd.com/en" target="blank">
                  <img src={BankIcon7} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <GetStartedwithUs />
      </div>
      <Banner />
    </div>
  );
};
