import { Col, Menu, MenuProps } from "antd";
import React from "react";
import MainPage from "./Pages/MainPage/Main/Main";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Self Drives",
    key: "selfDrives",
  },
  {
    label: "Cabs",
    key: "cabs",
  },
  {
    label: "Luxury Cars",
    key: "luxuryCars",
  },
  {
    label: "Buses",
    key: "buses",
  },
  {
    label: "Contact Us",
    key: "contact",
  },
  {
    label: "About Us",
    key: "about",
  },
];

const NavBar = () => {
  return (
    <Col>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
      <div className="header">
        <MainPage />
      </div>
    </Col>
  );
};

export default NavBar;
