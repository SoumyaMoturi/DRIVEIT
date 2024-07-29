// components/HeaderComponent.tsx
import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuItems } from "../../../Constants/constants";
import Search from "../../Search/search";
import Button from "../Button";

const { Header } = Layout;

interface HeaderComponentProps {
  searchtext: string;
  setSearchText: (text: string) => void;
  setShowSignupModal: (show: boolean) => void;
}

const HeaderPage: FC<HeaderComponentProps> = ({
  searchtext,
  setSearchText,
  setShowSignupModal,
}) => {
  return (
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
        {/* <Link to="/">
          <div className="logo">
            <img className="D" alt="D" src={D_LOGO} />
            <img className="RIVEIT" alt="RIVEIT" src={RIVEIT_LOGO} />
          </div>
        </Link> */}

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[]}
          items={MenuItems.map((item) => ({
            ...item,
            label: <Link to={item.path}>{item.label}</Link>,
          }))}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
      <div className="buttons">
        <Search
          placeholder="What are you looking for...."
          handleChange={(e) => setSearchText(e.target.value)}
          searchtext={searchtext}
          styles={{ width: "154px" }}
        />
        &nbsp;
        <Button
          btnOnClick={() => console.log("login")}
          btnTitle="login"
          showBtn={true}
          classNames="btn custom-ant-secondary-naked-btn"
        />
        &nbsp;
        <Button
          btnOnClick={() => setShowSignupModal(true)}
          btnTitle="Sign Up"
          showBtn={true}
          classNames="btn custom-ant-primary-btn"
        />
      </div>
    </Header>
  );
};

export default HeaderPage;
