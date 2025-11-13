import React from "react";
import Testimonals1 from "../Images/Testimonals1.png";
import Testimonals2 from "../Images/Testimonals2.png";
import Testimonals3 from "../Images/Testimonals3.png";
import Testimonals4 from "../Images/Testimonals4.png";
import { Helmet } from "react-helmet";
import "./Testimonials.css";
import { Banner } from "../CommonComponents/Banner/Banner";
import { useState } from "react";
export const Testimonials = () => {
  const Quote = (
    <>
      Over the last few years, Planhub Estimators has consistently delivered
      thorough and well-supported cost and quantity estimates. This reliability
      has been instrumental in strengthening our budgeting process, a
      cornerstone of our land acquisition strategy. We strongly endorse them for
      construction cost estimating services
    </>
  );
  const [TestimonalsObj, setTestimonialsObj] = useState(Quote);
  const [Active1, setActive1] = useState("Active");
  const [Active2, setActive2] = useState("");
  const [Active3, setActive3] = useState("");
  const [Active4, setActive4] = useState("");
  const [lefinanimation, Setlefinanimation] = useState("");
  const [ActiveName, SetActiveName] = useState("Julianne Blackwell");
  const click2 = () => {
    setActive2("Active ");
    setActive1("");
    setActive3("");
    setActive4("");
    SetActiveName("Ethan Miller");
    setTestimonialsObj(
      `Working with Planhub Estimators has been a truly reliable experience. Their team's professionalism and cost engineering skills inspire complete confidence.`
    );
    Setlefinanimation("slide-in-left");
    setTimeout(() => {
      Setlefinanimation("");
    }, 1000);
  };
  const click1 = () => {
    setActive2("");
    SetActiveName("Mateo Garcia");
    setActive1("Active ");
    setActive3("");
    setActive4("");
    setTestimonialsObj(
      `Over the last few years, Planhub Estimators has consistently delivered thorough and well-supported cost and quantity estimates. This reliability has been instrumental in strengthening our budgeting process, a cornerstone of our land acquisition strategy. We strongly endorse them for construction cost estimating services."`
    );

    Setlefinanimation("slide-in-left");
    setTimeout(() => {
      Setlefinanimation("");
    }, 1000);
  };
  const click3 = () => {
    setActive2("");
    SetActiveName("Sophia Chen:");
    setActive1(" ");
    setActive3("Active");
    setActive4("");
    setTestimonialsObj(
      `Working with Planhub Estimators has been a reliable and reassuring experience. Their team's professionalism and cost engineering skills inspire complete confidence in their work.`
    );

    Setlefinanimation("slide-in-left");
    setTimeout(() => {
      Setlefinanimation("");
    }, 1000);
  };
  const click4 = () => {
    setActive2("");
    SetActiveName("Isla Thomas");
    setActive1(" ");
    setActive3("");
    setActive4("Active");
    setTestimonialsObj(
      `Planhub excels in cost engineering. Their professionalism and guidance make them a trusted partner for any project.`
    );

    Setlefinanimation("slide-in-left");
    setTimeout(() => {
      Setlefinanimation("");
    }, 1000);
  };
  return (
    <div style={{ backgroundColor: "#CFF0C5", position: "relative" }}>
      <Helmet>
        <title>Testimonials - PlanHub Estimators</title>
        <meta
          name="description"
          content="What do our clients say about PlanHub Estimators? Real testimonials showcasing our commitment to precise construction cost estimates."
        />
      </Helmet>
      <div className="slide-in-left">
        <div
          className="TestimonialsContainer  p-md-3 p-sm-0"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div
            onClick={click1}
            className={`Testimonials firstthirdpic ${Active1}`}
          >
            <img src={Testimonals1} alt=" " className="Testimonials1pic" />
          </div>

          <div onClick={click2} className={`Testimonials  ${Active2}`}>
            <img src={Testimonals2} alt=" " className="Testimonials1pic" />
          </div>

          <div onClick={click3} className={`Testimonials  ${Active3}`}>
            <img src={Testimonals3} alt=" " className="Testimonials1pic" />
          </div>

          <div
            onClick={click4}
            className={`Testimonials firstthirdpic ${Active4}`}
          >
            <img src={Testimonals4} alt=" " className="Testimonials1pic" />
          </div>
        </div>
        <div className="TestimonialsQuotsContainer container ">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={`TestimonialsQuots mt-3 ${lefinanimation}`}>
              <h3>{ActiveName}</h3>
              <p className="quote">{TestimonalsObj} </p>
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
};
