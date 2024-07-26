import React from "react";
import "./main.scss";
// import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import RentByBrand from "../RentByBrand";

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
    <div className="main-page">
      <div className="image-section"></div>
      <div className="rent-by-brands">
        <RentByBrand
          rentByType="brands"
          title="Rent By Brands"
          cardItems={cardItems}
        />
      </div>
    </div>
  );
};

export default MainPage;
