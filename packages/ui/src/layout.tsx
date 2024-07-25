import React, { useState } from "react";

import { Breadcrumb, Col, Layout, Menu, MenuProps, Row, theme } from "antd";

import Button from "./Components/Button/Button";
import Search from "./Components/Search/search";
import PageFooter from "./Components/Footer/footer";

import "./layout.scss";
import MainPage from "./Pages/MainPage/Main/Main";

const { Header, Content, Footer } = Layout;

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

const App: React.FC = () => {
  const [searchtext, setSearchText] = useState("");

  return (
    <div className="layout">
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="menu">
            {/* <div className="logo">
              <img alt="D" src={require("./assets/icons/D.png")} />
              <img alt="RIVEIT" src={require("./assets/icons/RIVEIT.png")} />
            </div> */}
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
            {/* <NavBar /> */}
          </div>
          <div className="buttons">
            <Search
              placeholder="What are you looking for...."
              handleChange={(e) => {
                setSearchText(e.target.value);
              }}
              searchtext={searchtext}
              styles={{ width: "154px" }}
            />
            &nbsp;
            <Button
              btnOnClick={() => {
                console.log("login");
              }}
              btnTitle="login"
              showBtn={true}
              classNames="btn custom-ant-secondary-naked-btn"
            />
            &nbsp;
            <Button
              btnOnClick={() => {
                console.log("signup");
              }}
              btnTitle="Sign Up"
              showBtn={true}
              classNames="btn custom-ant-primary-btn"
            />
          </div>
        </Header>
        <Content>
          <MainPage />
        </Content>
        <Footer>
          <PageFooter />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
