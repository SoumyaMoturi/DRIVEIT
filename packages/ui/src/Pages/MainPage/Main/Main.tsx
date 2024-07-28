import React from "react";

import FindVehicle from "../../../Components/FindVehicle/FindVehicle";
import HowItWorks from "../../HowItWorks";

import "./main.scss";

const MainPage = () => {
  const cardItems = [
    { name: "Toyota", icon: "🚗" },
    { name: "Ford", icon: "🚙" },
    { name: "Tesla", icon: "🚘" },
    { name: "Chevrolet", icon: "🚖" },
    { name: "BMW", icon: "🚗" },
    { name: "Mercedes-Benz", icon: "🚙" },
    { name: "Hyundai", icon: "🚘" },
    { name: "Audi", icon: "🚖" },
    { name: "KIA", icon: "🚗" },
    { name: "BMW", icon: "🚗" },
    { name: "Mercedes-Benz", icon: "🚙" },
    { name: "Hyundai", icon: "🚘" },
    { name: "Audi", icon: "🚖" },
    { name: "KIA", icon: "🚗" },
    { name: "BMW", icon: "🚗" },
    { name: "Mercedes-Benz", icon: "🚙" },
    { name: "Hyundai", icon: "🚘" },
    { name: "Audi", icon: "🚖" },
    { name: "KIA", icon: "🚗" },
    { name: "BMW", icon: "🚗" },
    { name: "Mercedes-Benz", icon: "🚙" },
    { name: "Hyundai", icon: "🚘" },
    { name: "Audi", icon: "🚖" },
    { name: "KIA", icon: "🚗" },
  ];

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
      {/* <div className="rent-by-brands">
        <RentByBrand
          rentByType="brands"
          title="Rent By Brands"
          cardItems={cardItems}
        />
      </div> */}
      <div className="how-it-works">
        <HowItWorks />
      </div>
    </div>
  );
};

export default MainPage;
