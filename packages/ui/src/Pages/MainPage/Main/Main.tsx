import React from "react";

import FindVehicle from "../../../Components/FindVehicle/FindVehicle";
import HowItWorks from "../../HowItWorks";

import "./main.scss";

const MainPage = () => {
  return (
    <div className="dashboard-page">
      <div className="image-section">
        <div className="dashboard-heading">
          <div>
            <img
              className="curls"
              alt="curls"
              src={require("../../../assets/icons/curls.svg")}
            />
          </div>
          <div>No matter where you’re going to, we’ll take you there</div>
        </div>
        <div className="testmonials"></div>
        <div className="filters">
          <FindVehicle />
        </div>
      </div>
      <div className="how-it-works">
        <HowItWorks />
      </div>
    </div>
  );
};

export default MainPage;
