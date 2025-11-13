import React from "react";
import { CirculerCard } from "./CirculerCard";

export const AllServicesCardContainer = (Props) => {
  return (
    <div>
      <div className="row w-100 m-0 justify-content-center">
        {Props.data.map((items) => (
          <div
            className=" col-lg-3 col-md-4 col-sm-6 col-12 mt-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CirculerCard
              link={items.Link}
              ServiceImg={items.ServiceImg}
              Title={items.ServiceTitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
