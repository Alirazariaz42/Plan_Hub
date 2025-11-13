import logo from "./logo.svg";
import { Helmet } from "react-helmet";
import "./App.css";
import { Header } from "./CommonComponents/Header/Header";
import { Foter } from "./CommonComponents/Footer/Foter";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Service } from "./Service/Service";
import { AboutUs } from "./AboutUs/AboutUs";
import { Payment } from "./Payment/Payment";
import { Testimonials } from "./Testimonials/Testimonials";
import { EstimationFee } from "./EstimationFee/EstimationFee";
import { ContactUs } from "./ContactUs/ContactUs";
import { OurTrades } from "./OurTrades/OurTrades";
import { CostEstimation } from "./CostEstimation/CostEstimation";
import { TakeOffServices } from "./TakeOffServices/TakeOffServices";
import { Scheduling } from "./Scheduling/Scheduling";
import { Planning } from "./Planning/Planning";
import { ScrollToTop } from "./CommonComponents/ScrollToTop";
import { GeneralRequirements } from "./GeneralRequirements/GeneralRequirements";
import { SiteworkEstimations } from "./SiteworkEstimations/SiteworkEstimations";
import { ConcreteEstimation } from "./ConcreteSetimation/ConcreteEstimation";
import { Massonary } from "./Massonary/Massonary";
import { MetalsEstimation } from "./MetalsEstimation/MetalsEstimation";
import { WoodAndPlastic } from "./WoodAndPlastic/WoodAndPlastic";
import { UploadModal } from "./CommonComponents/UploadModal/UploadModal";
import { useState } from "react";
import { ThermalandMoisture } from "./ThermalandMoisture/ThermalandMoisture";
import { InteriorExteriorFinishes } from "./CommonComponents/InteriorExteriorFinishes";
import { Equipment } from "./Equipment/Equipment";
import { Furnishing } from "./Furnishing/Furnishing";
import { MechanicalEstimatingServices } from "./MechanicalEstimatingServices/MechanicalEstimatingServices";
import { Electrical } from "./Electrical/Electrical";
import { HVAC } from "./HVAC/HVAC";
import { CommericalEstimation } from "./CommericalEstimation/CommericalEstimation";
import { IndustrialEstimation } from "./IndustrialEstimation/IndustrialEstimation";
import { ResidentalEstimation } from "./ResidentalEstimation/ResidentalEstimation";
import { Framing } from "./Framing/Framing";
import { Specialities } from "./Specialities/Specialities";
import { QuantitiesTakeOff } from "./QuantitiesTakeOff/QuantitiesTakeOff";
import { MaterialTakeOff } from "./MaterialTakeOff/MaterialTakeOff";
import { LandscapingEstimatins } from "./LandscapingEstimatins/LandscapingEstimatins";
import { RoofingEstimations } from "./RoofingEstimations/RoofingEstimations";
import { InsulationEstimating } from "./InsulationEstimating/InsulationEstimating";
import { FlooringEstimation } from "./FlooringEstimation/FlooringEstimation";
import { DryWallEstimating } from "./DryWallEstimating/DryWallEstimating";
import { PlumbingEstimation } from "./PlumbingEstimation/PlumbingEstimation";
import { GutterEstimation } from "./GutterEstimation/GutterEstimation";
import { NotFound } from "./CommonComponents/NotFound";
import { MyContext } from "./Store/Context";
import { ConveyingSystem } from "./ConveyingSystem/ConveyingSystem";
import { SpecialConstruction } from "./SpecialConstruction/SpecialConstruction";
function App() {
  // const [ModalOpen, setModalOpen] = useState(false);

  const [ModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((PreviousState) => {
      return !PreviousState;
    });
  };
  return (
    <MyContext.Provider value={toggleModal}>
      <div>
        <Helmet>
          <title></title>
          {/* Add other common head elements as needed */}
        </Helmet>

        <Header />
        {ModalOpen ? (
          <UploadModal onCloseBtnClick={toggleModal} />
        ) : (
          <div></div>
        )}
        <ScrollToTop />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/*" index element={<NotFound />} />
          {/* <Route path="/Home" element={<Home />}></Route> */}
          <Route path="/service/" element={<Service />}></Route>
          <Route path="/our-trades/" element={<OurTrades />}></Route>
          <Route path="/about-us/" element={<AboutUs />}></Route>
          <Route path="/payment/" element={<Payment />}></Route>
          <Route path="/testimonials/" element={<Testimonials />}></Route>
          <Route path="/estimating-fee/" element={<EstimationFee />}></Route>
          <Route path="/contact-us/" element={<ContactUs />}></Route>
          <Route
            path="/cost-estimating-services/"
            element={<CostEstimation />}
          ></Route>
          <Route
            path="/construction-takeoff-services/"
            element={<TakeOffServices />}
          ></Route>
          <Route path="/cost-scheduling/" element={<Scheduling />}></Route>
          <Route path="/planning/" element={<Planning />}></Route>
          <Route
            path="/general-requirements/"
            element={<GeneralRequirements />}
          ></Route>
          <Route
            path="/sitework-estimating-services/"
            element={<SiteworkEstimations />}
          ></Route>
          <Route
            path="/concrete-estimating-services/"
            element={<ConcreteEstimation />}
          ></Route>
          <Route
            path="/masonry-estimating-services/"
            element={<Massonary />}
          ></Route>
          <Route
            path="/metals-estimating-services/"
            element={<MetalsEstimation />}
          ></Route>
          <Route
            path="/lumber-takeoff-services/"
            element={<WoodAndPlastic />}
          ></Route>
          <Route
            path="/thermal-moisture-protection-estimating-services/"
            element={<ThermalandMoisture />}
          ></Route>
          <Route
            path="/interior-exterior-finishes/"
            element={<InteriorExteriorFinishes />}
          ></Route>
          <Route
            path="/equipment-estimating-services/"
            element={<Equipment />}
          ></Route>
          <Route
            path="/furnishing-estimating-services/"
            element={<Furnishing />}
          ></Route>
          <Route
            path="/mechanical-estimating-services/"
            element={<MechanicalEstimatingServices />}
          ></Route>
          <Route
            path="/electrical-estimating-services/"
            element={<Electrical />}
          ></Route>
          <Route path="/hvac-estimating-services/" element={<HVAC />}></Route>
          <Route
            path="/commercial-estimating-services/"
            element={<CommericalEstimation />}
          ></Route>
          <Route
            path="/industrial-estimating-services/"
            element={<IndustrialEstimation />}
          ></Route>
          <Route
            path="/residential-estimating-services/"
            element={<ResidentalEstimation />}
          ></Route>
          <Route
            path="/framing-estimating-services/"
            element={<Framing />}
          ></Route>
          <Route path="/specialties/" element={<Specialities />}></Route>
          <Route
            path="/quantity-takeoff-services/"
            element={<QuantitiesTakeOff />}
          ></Route>
          <Route
            path="/material-takeoff-services/"
            element={<MaterialTakeOff />}
          ></Route>
          <Route
            path="/landscaping-estimating-services/"
            element={<LandscapingEstimatins />}
          ></Route>
          <Route
            path="/roofing-estimating-services/"
            element={<RoofingEstimations />}
          ></Route>
          <Route
            path="/insulation-estimating-services/"
            element={<InsulationEstimating />}
          ></Route>
          <Route
            path="/flooring-estimating-services/"
            element={<FlooringEstimation />}
          ></Route>
          <Route
            path="/drywall-estimating-services/"
            element={<DryWallEstimating />}
          ></Route>
          <Route
            path="/Gutter-estimating-services/"
            element={<GutterEstimation />}
          ></Route>
          <Route
            path="/plumbing-estimating-services/"
            element={<PlumbingEstimation />}
          ></Route>
          <Route
            path="/conveying-system-estimating-services/"
            element={<ConveyingSystem />}
          ></Route>
          <Route
            path="/special-construction-estimating-services/"
            element={<SpecialConstruction />}
          ></Route>
        </Routes>
        <Foter />
      </div>
    </MyContext.Provider>
  );
}

export default App;
