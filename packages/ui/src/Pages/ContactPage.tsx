import React from "react";
import { Row, Col, Card } from "antd";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import "./contact-us.scss";

const ContactPage = () => (
  <div style={{ padding: "50px" }} className="contact-us">
    <h1
      style={{ textAlign: "center", marginBottom: "40px" }}
      className="main-heading"
    >
      Contact Us
    </h1>
    <p className="subtitle">
      Any question or remarks? Just write us a message!
    </p>
    <Card>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={12}>
          <ContactInfo />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <ContactForm />
        </Col>
      </Row>
    </Card>
  </div>
);

export default ContactPage;
