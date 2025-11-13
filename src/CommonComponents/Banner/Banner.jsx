import React, { useState } from "react";
import "./Banner.css";
import { UploadModal } from "../UploadModal/UploadModal";
import Ellipse5 from '../../Images/Ellipse 5.png'
import Ellipse6 from '../../Images/Ellipse 6.png'

export const Banner = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const changeModal = () => {
    setModalOpen(!ModalOpen);
  };
  return (
    <div>
      {ModalOpen ? <UploadModal onCloseBtnClick={changeModal} /> : <div></div>}
      <div className="bannerContainer mt-5 ">
        <div
          className="  container p-3"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <p className="BannerText">
              For a quick quote based on your project scope, call us at{" "}
              <br></br>{" "}
              <a style={{ color: "white" }} href="tel:+1 917 300 1079">
                {" "}
                +1 917 300 1079
              </a>{" "}
              or email us at <br />{" "}
              <a
                style={{ color: "white" }}
                href="mailto:AM@planhubestimating.com"
              >
             AM@planhubestimating.com
              </a>
            </p>
          </div>
          <div className=" text-center">
            <button onClick={changeModal} className=" Upload_Your_Plans">
              Upload Your Plans
            </button>
            <button  className=" Samplesbtn">
             Samples
            </button>
          </div >
          <div style={{cursor:"pointer"}} onClick={changeModal}  className=" text-center mt-4">
            <img src={Ellipse5} height={60} alt="" />     <img src={Ellipse6} height={60}  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
