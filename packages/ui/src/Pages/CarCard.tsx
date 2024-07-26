// src/components/CarCard.js
import React from "react";
import { Card, Button } from "antd";
import { CarOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons";

import "./CarCard.scss";

const { Meta } = Card;

const CarCard = ({ car }: any) => (
  <Card
    hoverable
    cover={<img alt={car.model} src={car.image} />}
    actions={[
      <Button
        type="primary"
        onClick={() => {
          console.log("button clicked");
        }}
      >
        View Details
      </Button>,
    ]}
    className="car-card"
  >
    <Meta
      title={<p className="car-name">{car.model}</p>}
      description={
        <>
          <p className="car-info">
            <CarOutlined /> {car.reviews} reviews
          </p>
          <p className="car-info">
            <UserOutlined /> {car.passengers} passengers
          </p>
          <p className="car-info">
            <DollarOutlined /> {car.price} / day
          </p>
        </>
      }
    />
  </Card>
);

export default CarCard;
