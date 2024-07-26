// src/components/ContactForm.js
import React from "react";
import { Form, Input, Radio } from "antd";
import Button from "../Components/Button/Button";

const { TextArea } = Input;

const ContactForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  return (
    <Form
      name="contact"
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: "0 auto" }}
      className="contact-form"
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: "Please enter your first name" }]}
      >
        <Input placeholder="First Name" />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: "Please enter your last name" }]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter a valid email address",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please enter your phone number" }]}
      >
        <Input placeholder="Phone Number" />
      </Form.Item>

      <Form.Item
        name="subject"
        label="Select Subject"
        rules={[{ required: true, message: "Please select a subject" }]}
      >
        <Radio.Group>
          <Radio value="general">General Inquiry</Radio>
          <Radio value="support">Support</Radio>
          <Radio value="feedback">Feedback</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <TextArea rows={4} placeholder="Write your message" />
      </Form.Item>

      <Form.Item>
        {/* <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Send Message
        </Button> */}
        <Button
          btnOnClick={() => {
            console.log("send message");
          }}
          btnTitle={"Send Message"}
          showBtn={true}
          classNames="btn custom-ant-primary-naked-btn"
        />
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
