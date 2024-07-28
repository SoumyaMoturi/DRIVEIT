import React from "react";
import { Row, Col, Card, Typography } from "antd";
import "./HowItWorks.scss";
import {
  CalendarOutlined,
  SearchOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import CarImage from "../../../assets/icons/howItWorks.png";

const { Title, Text } = Typography;

const HowItWorks = () => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{ marginBottom: "50px" }}
        className="page-heading"
      >
        <Col span={24} style={{ textAlign: "center" }}>
          <Title level={2}>How it works</Title>
          <div className="description-text">
            Renting a luxury car has never been easier. Our streamlined process
            makes it simple for you to book and confirm your vehicle of choice
            online.
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <div className="how-it-works-body">
          <div className="cards-list">
            <Row className="cards">
              <Card bordered={false} className="card-items">
                <div className="card-content">
                  <div className="card-icon">
                    <SearchOutlined />
                  </div>
                  <div className="description-text">
                    <Title level={5}>Browse and select</Title>
                    <Text>
                      Choose from our wide range of premium cars, select the
                      pickup and return dates and locations that suit you best.
                    </Text>
                  </div>
                </div>
              </Card>
            </Row>
            <Row className="cards">
              <Card bordered={false} className="card-items">
                <div className="card-content">
                  <div className="card-icon">
                    <CalendarOutlined />
                  </div>
                  <div className="description-text">
                    <Title level={5}>Book and confirm</Title>
                    <Text>
                      Book your desired car with just a few clicks and receive
                      an instant confirmation via email or SMS.
                    </Text>
                  </div>
                </div>
              </Card>
            </Row>
            <Row className="cards">
              <Card bordered={false} className="card-items">
                <div className="card-content">
                  <div className="card-icon">
                    <SmileOutlined />
                  </div>
                  <div className="description-text">
                    <Title level={5}>Enjoy your ride</Title>
                    <Text>
                      Pick up your car at the designated location and enjoy your
                      premium driving experience with our top-quality service.
                    </Text>
                  </div>
                </div>
              </Card>
            </Row>
          </div>
          <div className="car-image">
            <Col span={24} style={{ textAlign: "center" }}>
              <img src={CarImage} alt="Car" />
            </Col>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HowItWorks;
