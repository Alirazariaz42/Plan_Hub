import React from "react";
import "./CommonSyle.css";
import GeneralConstruction from "../Images/GeneralConstruction.png";
import { Link } from "react-router-dom";
export const CirculerCard = (props) => {
  return (
    <div>
      <Link to={props.link}> 
      <div className="CirculercardContainer ">
        <img src={props.ServiceImg} className="CirculercardImg " alt="Img" />
        <div className="TransparentBlackLayer">
          <h5 className=" CirculercardTitle m-0 fw-bold text-center p-4">{props.Title}</h5>
        </div>
      </div>
      </Link>
    </div>
  );
};
