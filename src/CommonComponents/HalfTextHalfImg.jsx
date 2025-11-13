import React from "react";
import "./CommonSyle.css";
import "animate.css";
export const HalfTextHalfImg = (props) => {
  return (
    <div className="  container">
      <div
        className=" row w-100 m-0 justify-content-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="col-md-6 col-12
        "
        >
          <p
            className="HalfTextHalfImgParagraph 
          "
          >
            {props.text}
          </p>
        </div>
        <div
          className="col-md-6 col-12"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.img}
        </div>
      </div>
    </div>
  );
};
