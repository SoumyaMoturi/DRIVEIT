import React from "react";
import { Row, Col, Typography } from "antd";
import { CarOutlined, DollarOutlined, SmileOutlined } from "@ant-design/icons";

import CarImage from "../../../assets/icons/OurServicesImg.png";
import "./OurServices.scss";

const { Title, Text } = Typography;

const services = [
  {
    icon: <CarOutlined className="service-icon" />,
    title: "Car Hire",
    description:
      "We pride ourselves in always going the extra mile for our customers.",
  },
  {
    icon: <DollarOutlined className="service-icon" />,
    title: "Car Sales",
    description:
      "We sale the best luxury cars across the world at a competitive price.",
  },
  {
    icon: <SmileOutlined className="service-icon" />,
    title: "Hire a Driver",
    description:
      "You want to travel and feel comfortable, our drivers are available.",
  },
];

const OurServices = () => {
  return (
    <div className="our-services-container">
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12} className="car-image-container">
          <img
            src={CarImage}
            alt="Car"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </Col>
        <Col xs={24} md={12}>
          <div className="services-content">
            <div>
              <Title level={3} className="page-heading">
                Our Services
              </Title>
            </div>
            <div className="services">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="icon-col">{service.icon}</div>
                  <div className="text-col">
                    <div className="title">{service.title} </div>
                    <div className="text-description">
                      {service.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurServices;
