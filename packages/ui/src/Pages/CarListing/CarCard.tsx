import React from "react";
import "./CarCard.scss";

const CarCard = ({ car, index }: any) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} className="car-image" />
      <h2>{car.model}</h2>
      <div className="rating">
        <span>{car.rating}</span> ({car.reviews} reviews)
      </div>
      <div className="car-details">
        <p>{car.passengers} Passengers</p>
        <p>{car.fuel}</p>
        <p>{car.ac}</p>
        <p>{car.doors}</p>
      </div>
      <div className="price">
        <p>Price</p>
        <h3>₹{car.price}/day</h3>
      </div>
      <button className="view-details">View Details</button>
    </div>
  );
};

export default CarCard;
