import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Store/Context";

export const GetStartedwithUs = () => {
  // const [ModalOpen, setModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setModalOpen(!ModalOpen);
  // };
  const toggleModal= useContext(MyContext)
  const toggleModalclick = () => {
    toggleModal();
    // console.log(toggleModal);
  }
  return (
    <>
      <div className="container mt-5 mb-4">
        <h2 className=" fw-semibold mb-4">Are You Ready To Get Started With Us!</h2>
        <h3>1- Upload Your Plans</h3>
        <p className="paragraph">
          <a
            className="blinking-textClickHere fw-bold"
            style={{ color: "#53C356", cursor: "pointer" }}
             onClick={toggleModalclick}
          >
            {" "}
            Click here{" "}
          </a>
          to upload your plans. We accept Google Drive links, Dropbox links, and
          any type of file format including PDF files and your plans can be Bid
          set, Schematic, Design Development, Construction document, or
          conceptual drawings.
        </p>
        <h3>2- Get a Quote</h3>
        <p className="paragraph">
          Quotes will be based on invoice, delivery date, and turnaround time.
        </p>
        <h3>3- Receive Estimate</h3>
        <p className="paragraph">
          Estimates will be delivered to you in EXCEL sheets comprising all the
          material and labor pricing with MasterFormat or your customized
          format.
        </p>
      </div>

      {/* {ModalOpen ? <UploadModal onCloseBtnClick={toggleModal} /> : <div></div>} */}
    </>
  );
};
