// src/components/CarList.js
import { carsData } from "../Constants/constants";
import CarCard from "./CarCard";

import "./CarList.scss";

export type CarCardProps = {
  model: string;
  image: string;
  rating: string;
  reviews: string;
  passengers: string;
  fuel: string;
  ac: string;
  doors: string;
  price: string;
};

const CarList = () => {
  return (
    <div className="car-list">
      {carsData.map((car, index) => (
        <CarCard car={car} index={index} />
      ))}
    </div>
  );
};

export default CarList;
