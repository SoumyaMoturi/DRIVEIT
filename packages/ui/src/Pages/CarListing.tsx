// src/components/CarList.js
import React from "react";
import { Row, Col } from "antd";
import CarCard from "./CarCard";

const carData = [
  {
    model: "Jaguar XE | P250",
    reviews: "4.8",
    passengers: "4",
    price: "₹1,800",
    image:
      "https://wallup.net/wp-content/uploads/2019/09/841798-lamborghini-aventador-super-veloce-cars-supercars-red.jpg",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Cool-Car-Wallpapers-HD.jpg",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image:
      "https://2.bp.blogspot.com/-T_u7AixkhT8/TuXA0QKoMpI/AAAAAAAAFas/BDrVxQK_BLs/s1920/Audi-cars-wallpaper.JPG",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image: "https://wallpapercave.com/wp/wp8030431.jpg",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image: "https://wallpapercave.com/wp/wp8030431.jpg",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image: "https://wallpapercave.com/wp/wp8030431.jpg",
  },
];

const CarList = () => (
  <div className="car-listing">
    <Row gutter={[16, 16]}>
      {carData.map((car, index) => (
        <Col span={6} key={index}>
          <CarCard car={car} />
        </Col>
      ))}
    </Row>
  </div>
);

export default CarList;
