// PageLayout.tsx
import React, { useState } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import SignupModal from "./Pages/auth/signup";
import routes from "./routes/routes";
import HeaderPage from "./Components/Button/Header/header";
import FooterPage from "./Components/Footer/footer";

import "./layout.scss";

const { Content } = Layout;

const PageLayout = () => {
  const [searchtext, setSearchText] = useState("");
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className="layout">
      <Layout>
        <div className="header">
          <HeaderPage
            searchtext={searchtext}
            setSearchText={setSearchText}
            setShowSignupModal={setShowSignupModal}
          />
        </div>
        <Content>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Content>

        <div className="footer">
          <FooterPage />
        </div>
      </Layout>
      <SignupModal
        visible={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      />
    </div>
  );
};

export default PageLayout;
