import React from "react";
import "./main.scss";
import RentByTile, { CardItemProps } from "../RentByTile";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="image-section"></div>
      <div className="rent-by-brands">
        <RentByTile
          rentByType="brands"
          title="Rent By Brands"
          cardItems={[
            {
              name: "User Profile",
              icon: <UserOutlined />,
            },
            {
              name: "Settings",
              icon: <SettingOutlined />,
            },
            {
              name: "Home",
              icon: <HomeOutlined />,
            },
            {
              // This one intentionally leaves out the optional name property
              icon: <SettingOutlined />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MainPage;
