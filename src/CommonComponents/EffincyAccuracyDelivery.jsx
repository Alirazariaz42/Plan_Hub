
import React, { useState, useEffect, useContext } from "react";
import { UploadModal } from "../CommonComponents/UploadModal/UploadModal";
import { MyContext } from "../Store/Context";
// import './CommonStyle.css';
export const EffincyAccuracyDelivery = () => {
  // const [ModalOpen, setModalOpen] = useState(false);

  // const changeModal = () => {
  //   setModalOpen(!ModalOpen);
  // };

  const toggleModal = useContext(MyContext);
 
  const handleClick = () => {
    toggleModal()
   };

  return (
    <div>
      {/* {ModalOpen ? <UploadModal onCloseBtnClick={changeModal} /> : <div></div>} */}
      <div className=" row w-100 pt-4  pb-4">
        <div className="col-md-6 ">
          <div className="EffincyAccuracyDeliveryContainer">
            <h3 className="ULheadingContainer text-center">100% ACCURACY </h3>
            <p className=" paragraph">
              Our experts always provide 100% accuracy for every estimation task
              to facilitate our clients perfectly.
            </p>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="EffincyAccuracyDeliveryContainer">
            <h3 className="ULheadingContainer text-center">DELIVER ON TIME </h3>
            <p className=" paragraph">
              It is our main target to deliver our services on time so that you
              will be able to start your projects timely.
            </p>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="EffincyAccuracyDeliveryContainer">
            <h3 className="ULheadingContainer text-center">
              AFFORDABLE PRICE{" "}
            </h3>
            <p className=" paragraph">
              Get the estimation at the price you wish to pay. Visit us again
              and again as we offer many discounts as well.
            </p>
          </div>
        </div>

        <div
          className="col-md-6 "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div>
            <button onClick={handleClick}  className="UploadPlansButton">Upload Plans</button>
          </div>
        </div>
      </div>
    </div>
  );
};
