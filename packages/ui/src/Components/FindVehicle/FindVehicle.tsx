import React from "react";
import { Card, Row, Col, Input, DatePicker, Select, Form, Button } from "antd";
import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
// import moment from "moment";

import "./findVehicle.scss";

const { Option } = Select;

const FindVehicle = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="find-vehicle">
      <Card style={{ padding: "20px", borderRadius: "10px" }}>
        <Form
          form={form}
          name="car-filter"
          layout="vertical"
          onFinish={onFinish}
          className="car-filter-form"
        >
          <Row gutter={[16, 16]}>
            <Col className="filter-item">
              <Form.Item
                name="pickupLocation"
                label="Pick-up Location"
                rules={[
                  { required: true, message: "Please select a location" },
                ]}
              >
                <Input
                  placeholder="Search a location"
                  prefix={<SearchOutlined />}
                />
              </Form.Item>
            </Col>
            <Col className="filter-item">
              <Form.Item
                name="pickupDate"
                label="Pick-up Date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="filter-item">
              <Form.Item
                name="dropoffLocation"
                label="Drop-off Location"
                rules={[
                  { required: true, message: "Please select a location" },
                ]}
              >
                <Input
                  placeholder="Search a location"
                  prefix={<SearchOutlined />}
                />
              </Form.Item>
            </Col>
            <Col className="filter-item">
              <Form.Item
                name="dropoffDate"
                label="Drop-off Date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="filter-item">
              <Form.Item
                name="vehicleType"
                label="Choose Vehicle Type"
                rules={[
                  { required: true, message: "Please select a vehicle type" },
                ]}
              >
                <Select placeholder="Choose Vehicle Type">
                  <Option value="car">Car</Option>
                  <Option value="suv">SUV</Option>
                  <Option value="van">Van</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="filter-item">
              <Form.Item
                name="tripType"
                label="Trip Type"
                rules={[
                  { required: true, message: "Please select a trip type" },
                ]}
              >
                <Select placeholder="Trip Type">
                  <Option value="oneway">One Way</Option>
                  <Option value="roundtrip">Round Trip</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="filter-item find-btn">
              <Form.Item>
                <Button className="filter-btn">
                  Find a Vehicle <ArrowRightOutlined />
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      ;
    </div>
  );
};

export default FindVehicle;
