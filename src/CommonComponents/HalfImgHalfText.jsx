import React from "react";

export const HalfImgHalfText = (props) => {
  return (
    <div className=" container">
      <div
        className=" row w-100 m-0 justify-content-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="col-md-4 col-12 mt-5">{props.img}</div>
        <div
          className="col-md-8 col-12 "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="HalfTextHalfImgParagraph ">{props.text}</p>
        </div>
      </div>
    </div>
  );
};
