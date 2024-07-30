import React, { useState } from "react";
import { Card, Row, Col, Input, DatePicker, Select, Form, Button } from "antd";
import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
// import moment from "moment";

import "./findVehicle.scss";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const FindVehicle = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({});

  const navigate = useNavigate();

  const vehicleOptions = [
    { value: "suv", label: "SUV" },
    { value: "sedan", label: "Sedan" },
    { value: "hatchback", label: "Hatchback" },
    { value: "luxury", label: "Luxury" },
  ];

  const transmissionOptions = [
    { value: "manual", label: "Manual" },
    { value: "automatic", label: "Automatic" },
  ];

  const fuelOptions = [
    { value: "diesel", label: "Diesel" },
    { value: "petrol", label: "Petrol" },
    { value: "electric", label: "Electric" },
  ];

  const AvailableLocations = [
    { value: "madinaguda", label: "Madinaguda" },
    { value: "kukatpally", label: "Kukatpally" },
    { value: "secunderabad", label: "Secunderabad" },
  ];

  return (
    <div className="find-vehicle">
      <Card style={{ padding: "20px", borderRadius: "10px" }}>
        <Form
          form={form}
          name="car-filter"
          layout="vertical"
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
                <Select
                  placeholder="Search a location"
                  suffixIcon={<SearchOutlined />}
                  onChange={(value) =>
                    setFormValues({ ...formValues, pickUpLocation: value })
                  }
                >
                  {AvailableLocations.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col className="filter-item">
              <Form.Item
                name="pickupDate"
                label="Pick-up Date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker
                  format="DD/MM/YYYY"
                  style={{ width: "100%" }}
                  onChange={(value) =>
                    setFormValues({ ...formValues, pickupDate: value })
                  }
                />
              </Form.Item>
            </Col>
            <Col className="filter-item">
              <Form.Item
                name="fuelType"
                label="Fuel Type"
                rules={[{ required: true, message: "Please select fuel type" }]}
              >
                <Select
                  placeholder="Choose Vehicle Type"
                  onChange={(value) =>
                    setFormValues({ ...formValues, fuelType: value })
                  }
                >
                  {fuelOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col className="filter-item">
              <Form.Item
                name="dropoffDate"
                label="Drop-off Date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker
                  format="DD/MM/YYYY"
                  style={{ width: "100%" }}
                  onChange={(value) =>
                    setFormValues({ ...formValues, dropOfDate: value })
                  }
                />
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
                <Select
                  placeholder="Choose Vehicle Type"
                  onChange={(value) =>
                    setFormValues({ ...formValues, vehicleType: value })
                  }
                >
                  {vehicleOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col className="filter-item">
              <Form.Item
                name="transmissionType"
                label="Trip Type"
                rules={[
                  {
                    required: true,
                    message: "Please select transmission type",
                  },
                ]}
              >
                <Select
                  placeholder="Transmission Type"
                  onChange={(value) =>
                    setFormValues({ ...formValues, transmissionType: value })
                  }
                >
                  {transmissionOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col className="filter-item find-btn">
              <Form.Item>
                <Button
                  className="filter-btn"
                  type="primary"
                  htmlType="submit"
                  onClick={() => {
                    console.log("filterData", formValues);
                    navigate("./cars-list");
                  }}
                >
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
