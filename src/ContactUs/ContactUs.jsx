import React, { useState } from "react";
import { Banner } from "../CommonComponents/Banner/Banner";
import { UploadModal } from "../CommonComponents/UploadModal/UploadModal";
import { Helmet } from "react-helmet";
// import logo from "../../Images/logo (2) 1.png";
import location from "../Images/location.png";
import call from "../Images/call.png";
import mail from "../Images/mail.png";
import { Link } from "react-router-dom";
export const ContactUs = () => {
  const [ModalOpen, setModalOpen] = useState(true);

  const changeModal = () => {
    setModalOpen(!ModalOpen);
  };

  const openModal = () => {
    setModalOpen(!ModalOpen);
  };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContect] = useState("");
  const [filelink, setfilelink] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [attachment, setAttachment] = useState(null);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Contact", Contact);
    formData.append("attachment", attachment);
    formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    formData.append("Subject", "Message From PlanHub Estimators");

    formData.append("recipient_name1", "MahRukh Tariq");
    formData.append("recipient_email1", "Director.mfbzone@gmail.com");

    formData.append("recipient_name2", "Muhammad Fiaz");
    formData.append("recipient_email2", "AM@planhubestimating.com");

    try {
      const response = await fetch("https://api.bluebookestimators.com/", {
        method: "POST",
        body: formData,
        // mode: 'no-cors',
      });

      if (response.status === 200) {
        alert("Email has been sent successfully");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email sending failed");
    }
    // setIsLoadingSubmit(false);
  };
  return (
    <div className="" style={{ backgroundColor: "#CFF0C5" }}>
      {/* {ModalOpen ? <UploadModal onCloseBtnClick={changeModal} /> : <div></div>} */}
      <Helmet>
        <title>
          Contact Us - Cost Estimating and Material Takeoffs Services
        </title>
        <meta
          name="description"
          content="Estimating experts for accurate construction cost estimating and material takeoff services. Contact us 24/7 for precise cost estimates."
        />
      </Helmet>
      <div>
        <h1 class="pageName text-center fw-bold pt-5 pb-5">Contact us! </h1>
      </div>
      <div className=" container-md">
        <div className=" row w-100 m-0  p-3 pt-5 pb-5">
          <div className=" col-md-6 col-12">
            <h2 class="pageName fw-bold ">We would love to hear from you.. </h2>
            <p className=" paragraph fw-semibold text-dark">
              {" "}
              Feel free to contact us and we will get back to you as soon as
              possible. Fill this form or contact us directly.
            </p>
            <p className=" paragraph mt-3 text-dark fw-semibold">
              {" "}
              <img src={location} alt="" className=" me-2" />
              
              1577 Carroll St, Brooklyn, NY 11213, USA
            </p>
            <p className=" paragraph mt-3 text-dark fw-semibold">
              {" "}
              <img src={call} alt="" className=" me-2" />
              <a
                className=" text-dark"
                style={{ color: "" }}
                href="tel:+1 917 300 1079"
              >
                {" "}
                +1 917 300 1079
              </a>
            </p>
            <p className=" paragraph mt-3 text-dark fw-semibold">
              {" "}
              <img src={mail} alt="" className=" me-2" />
              <a className=" text-dark" href="mailto:AM@planhubestimating.com">
                AM@planhubestimating.com
              </a>
            </p>
            <div className=" mt-3">
              <a
                href="https://www.facebook.com/profile.php?id=61553018894291"
                style={{ textDecoration: "none", padding: "0px 5px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src={require("../Images/Facebook.png")}
                  height={20}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/81809182/admin/feed/posts/"
                style={{ textDecoration: "none", padding: "0px 5px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src={require("../Images/LinkedIn.png")}
                  height={20}
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/planhubestimating/"
                target="_blank"
                style={{ textDecoration: "none", padding: "0px 05px" }}
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src={require("../Images/instagram 1.png")}
                  height={20}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className=" col-md-6 col-12">
            <form onSubmit={onFormSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fw-semibold">
                  Name{" "}
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label fw-semibold"
                >
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="meaagesBox" class="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  name="Message"
                  onChange={(e) => setRequirements(e.target.value)}
                  id="meaagesBox"
                  style={{ width: "100%", border: "none" }}
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label fw-semibold"
                >
                  File
                </label>
                <input
                  type="file"
                  onChange={handleAttachmentChange}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="text-center">
                <button type="submit" class="btn  w-100 btn-dark ">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Banner />
    </div>
  );
};
