import React from "react";
import { Card, Row, Col, Input, DatePicker, Select, Form } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
// import moment from "moment";

import "./findVehicle.scss";
import Button from "../Button/Button";

const { Option } = Select;

const FindVehicle = () => {
  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="find-vehicle">
      <Card style={{ padding: "20px", borderRadius: "10px" }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={[16, 16]} justify="center">
            <Col>
              <Form.Item
                name="pickupLocation"
                label="Pick-up Location"
                rules={[
                  { required: true, message: "Please select a location" },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Search a location"
                  prefix={<SearchOutlined />}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="pickupDate"
                label="Pick-up Date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  // defaultValue={moment()}
                  format="DD/MM/YYYY"
                />
              </Form.Item>
            </Col>
            <Col>
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
            <Col>
              <Form.Item
                name="dropoffDate"
                label="Drop-off Date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  // defaultValue={moment()}
                  format="DD/MM/YYYY"
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="vehicleType"
                label="Choose Vehicle Type"
                rules={[
                  { required: true, message: "Please select a vehicle type" },
                ]}
              >
                <Select
                  placeholder="Choose Vehicle Type"
                  style={{ width: "100%" }}
                >
                  <Option value="car">Car</Option>
                  <Option value="suv">SUV</Option>
                  <Option value="van">Van</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="tripType"
                label="Trip Type"
                rules={[
                  { required: true, message: "Please select a trip type" },
                ]}
              >
                <Select placeholder="Trip Type" style={{ width: "100%" }}>
                  <Option value="oneway">One Way</Option>
                  <Option value="roundtrip">Round Trip</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                {/* <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F6AF03",
                    borderColor: "#F6AF03",
                  }}
                >
                  Find a Vehicle
                </Button> */}
                <Button
                  btnOnClick={() => {
                    console.log("filter vehicle");
                  }}
                  btnTitle={"Find Vehicle"}
                  showBtn={true}
                  btnIcon={<ArrowRightOutlined />}
                  classNames="btn custom-ant-primary-btn find-btn"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default FindVehicle;
