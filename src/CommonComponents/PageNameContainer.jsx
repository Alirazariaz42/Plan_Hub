import React from "react";

export const PageNameContainer = (props) => {
  return (
    <div>
      <h1 className="pageName text-center fw-bold pt-5 pb-5">{props.pageName}</h1>
    </div>
  );
};
