import React, { useState } from "react";
import { Modal, Input, Button, Form } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const SignupModal: React.FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      console.log("Google OAuth successful", response);
      onClose(); // Close the modal on successful login
    },
    onError: (error) => {
      console.error("Google OAuth failed", error);
    },
  });

  const handleSignupClick = (e: React.FormEvent) => {
    e.preventDefault();
    googleLogin(); // Trigger the Google login pop-up
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Modal title="Sign Up" open={visible} onCancel={onClose} footer={null}>
      <Form
        name="signup-form"
        className="sign-up"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleSignupClick}
            style={{ width: "100%" }}
          >
            Register now!
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignupModal;
