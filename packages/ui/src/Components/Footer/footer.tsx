// import React from "react";

// const PageFooter = () => {
//   return (
//     <div className="footer">
//       <div className="footer-content">
//         <div className="logos">
//           <img
//             alt="logo"
//             src={require("../../assets/icons/footerLogo.png")}
//             height="42px"
//             width="208px"
//           />
//           <p className="text">Travel helps companies manage payments easily.</p>
//           <div className="social-media">
//             <img alt="logo" src={require("../../assets/icons/messenger.svg")} />
//             <img alt="logo" src={require("../../assets/icons/linkedin.svg")} />
//             <img alt="logo" src={require("../../assets/icons/twitter.svg")} />
//             <img alt="logo" src={require("../../assets/icons/twoo.svg")} />
//           </div>
//         </div>
//         <div className="company"></div>
//         <div className="destinations"></div>
//         <div className="newsLetter"></div>
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default PageFooter;

import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography, Space } from "antd";
import {
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import "./footer.scss";

const { Title, Text } = Typography;

const FooterPage = () => {
  const [emailAddress, setEmailAddress] = useState("");
  return (
    <div className="footer-content">
      <Row justify="center" align="middle">
        <Col span={24} style={{ padding: "40px 20px" }}>
          <Row justify="space-between" align="top">
            <Col xs={24} sm={12} md={6}>
              <Title
                level={3}
                style={{ color: "#000" }}
                className="drive-it-logo"
              >
                <img
                  alt="logo"
                  src={require("../../assets/icons/footerLogo.png")}
                  height="42px"
                  width="208px"
                />
              </Title>
              <p className="description-text">
                Travel helps companies manage payments easily.
              </p>
              <div style={{ marginTop: "20px" }}>
                <LinkedinOutlined
                  style={{ fontSize: "24px", marginRight: "10px" }}
                />
                <TwitterOutlined
                  style={{ fontSize: "24px", marginRight: "10px" }}
                />
                <GithubOutlined
                  style={{ fontSize: "24px", marginRight: "10px" }}
                />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#000" }} className="title">
                Company
              </Title>
              <ul className="list">
                <li>
                  <Text style={{ display: "block", color: "#000" }}>
                    About Us
                  </Text>
                </li>
                <li>
                  <Text style={{ display: "block", color: "#000" }}>
                    Careers
                  </Text>
                </li>
                <li>
                  <Text style={{ display: "block", color: "#000" }}>Blogs</Text>
                </li>
                <li>
                  <Text style={{ display: "block", color: "#000" }}>
                    Pricing
                  </Text>
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#000" }} className="title">
                Destinations
              </Title>
              <ul className="list">
                <li>
                  <Text>Maldives</Text>
                </li>
                <li>
                  <Text>Los Angeles</Text>
                </li>
                <li>
                  <Text>Las Vegas</Text>
                </li>
                <li>
                  <Text>Toronto</Text>
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#000" }}>
                Join Our Newsletter
              </Title>
              <Space>
                <Space.Compact style={{ width: "100%" }}>
                  <Input
                    placeholder="Your email address"
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                    }}
                  />
                  <Button
                    type="primary"
                    onClick={() => console.log("subscribe", emailAddress)}
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    Subscribe
                  </Button>
                </Space.Compact>
              </Space>

              <Text style={{ display: "block", color: "#000" }}>
                * Will send you weekly updates for your better tour packages.
              </Text>
            </Col>
          </Row>
          <hr />
          <Row justify="center" style={{ marginTop: "40px" }}>
            <Col>
              <Text style={{ color: "#000" }}>
                Copyright © Kyro 2022, All Rights Reserved.
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FooterPage;
