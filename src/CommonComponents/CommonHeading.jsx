import React from "react";

export const CommonHeading = (props) => {
  return (
    <div>
      <div className="container">
        <h2 className=" fw-bold pt-4">{props.text}</h2>
      </div>
    </div>
  );
};
