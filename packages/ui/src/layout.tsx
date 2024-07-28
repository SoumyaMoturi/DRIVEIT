import React, { useEffect, useState } from "react";

import { Layout, Menu, MenuProps } from "antd";

import Button from "./Components/Button/Button";
import Search from "./Components/Search/search";
import PageFooter from "./Components/Footer/footer";

import "./layout.scss";
import MainPage from "./Pages/MainPage/Main/Main";
import ContactPage from "./Pages/ContactPage";
import SignupModal from "./Pages/auth/signup";

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

const PageLayout: React.FC = () => {
  const [searchtext, setSearchText] = useState("");
  const [content, setContent] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState("logo");
  const [showSignupModal, setShowSignupModal] = useState(false);
  const showContentByMenu = (): any => {
    switch (selectedMenuItem) {
      case "logo": {
        return <MainPage />;
      }
      case "selfDrives": {
        return <div>self drives</div>;
      }
      case "cabs": {
        return <div>Cabs</div>;
      }
      case "luxuryCars": {
        return <div>Luxury Cars</div>;
      }
      case "buses": {
        return <div>Buses</div>;
      }
      case "contact": {
        return <ContactPage />;
      }
      case "about": {
        return <div>About</div>;
      }
      default: {
        return <div>Empty page</div>;
      }
    }
  };

  useEffect(() => {
    setContent(showContentByMenu());
  }, [selectedMenuItem]);

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
          <div className="left-nav">
            <div className="logo" onClick={() => setSelectedMenuItem("logo")}>
              <img
                className="D"
                alt="D"
                src={require("./assets/icons/D.png")}
              />
              <img
                className="RIVEIT"
                alt="RIVEIT"
                src={require("./assets/icons/RIVEIT.png")}
              />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[selectedMenuItem]}
              items={items}
              onClick={({ key }) => {
                setSelectedMenuItem(key);
              }}
              style={{ flex: 1, minWidth: 0 }}
            />
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
                console.log("sign up clicked");
                setShowSignupModal(true);
              }}
              btnTitle="Sign Up"
              showBtn={true}
              classNames="btn custom-ant-primary-btn"
            />
          </div>
        </Header>
        <Content>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="content-page"
          >
            {content}
          </div>
        </Content>
        <Footer>
          <PageFooter />
        </Footer>
      </Layout>
      <SignupModal
        visible={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      />
    </div>
  );
};

export default PageLayout;
