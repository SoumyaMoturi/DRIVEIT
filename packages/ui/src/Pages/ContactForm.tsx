// src/components/ContactForm.js
import React, { useState } from "react";
import { Form, Input, Radio, Button } from "antd";

const { TextArea } = Input;

const ContactForm = () => {
  const [formValues, setFormValues] = useState({});
  return (
    <Form
      name="contact"
      layout="vertical"
      style={{ margin: "0 auto" }}
      className="contact-form"
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: "Please enter your first name" }]}
      >
        <Input
          placeholder="First Name"
          onChange={(e) =>
            setFormValues({ ...formValues, firstname: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: "Please enter your last name" }]}
      >
        <Input
          placeholder="Last Name"
          onChange={(e) =>
            setFormValues({ ...formValues, lastname: e.target.value })
          }
        />
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
        <Input
          placeholder="Email"
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please enter your phone number" }]}
      >
        <Input
          placeholder="Phone Number"
          onChange={(e) =>
            setFormValues({ ...formValues, phonenumber: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        name="subject"
        label="Select Subject"
        rules={[{ required: true, message: "Please select a subject" }]}
      >
        <Radio.Group
          onChange={(e) =>
            setFormValues({ ...formValues, subject: e.target.value })
          }
        >
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
        <TextArea
          rows={4}
          placeholder="Write your message"
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%" }}
          className="btn custom-ant-primary-naked-btn"
          onClick={() => console.log("submitted values", formValues)}
        >
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
