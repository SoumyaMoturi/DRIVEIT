import React from "react";
import { Row, Col, Card, Typography } from "antd";

const { Title, Text } = Typography;

const HowItWorks = () => {
  return (
    <div
      style={{
        padding: "20px",
        background: "#F9F9F9",
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <Row justify="center" align="middle" style={{ marginBottom: "50px" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title level={2}>How it works</Title>
          <Text>
            Renting a luxury car has never been easier. Our streamlined process
            makes it simple for you to book and confirm your vehicle of choice
            online.
          </Text>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} md={8}>
          <Card bordered={false} style={{ textAlign: "center" }}>
            <img
              src="path_to_your_icon"
              alt="Browse and select"
              style={{ width: "50px", marginBottom: "10px" }}
            />
            <Title level={4}>Browse and select</Title>
            <Text>
              Choose from our wide range of premium cars, select the pickup and
              return dates and locations that suit you best.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card bordered={false} style={{ textAlign: "center" }}>
            <img
              src="path_to_your_icon"
              alt="Book and confirm"
              style={{ width: "50px", marginBottom: "10px" }}
            />
            <Title level={4}>Book and confirm</Title>
            <Text>
              Book your desired car with just a few clicks and receive an
              instant confirmation via email or SMS.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card bordered={false} style={{ textAlign: "center" }}>
            <img
              src="path_to_your_icon"
              alt="Enjoy your ride"
              style={{ width: "50px", marginBottom: "10px" }}
            />
            <Title level={4}>Enjoy your ride</Title>
            <Text>
              Pick up your car at the designated location and enjoy your premium
              driving experience with our top-quality service.
            </Text>
          </Card>
        </Col>
      </Row>

      <Row justify="center" align="middle" style={{ marginTop: "50px" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <img
            src="path_to_your_car_image"
            alt="Car"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HowItWorks;
