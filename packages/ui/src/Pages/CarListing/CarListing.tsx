// src/components/CarList.js
import { useEffect, useState } from "react";
import { carsData } from "../../Constants/constants";
import CarCard from "./CarCard";

import "./CarList.scss";
import FilterComponent from "./FilterComponent";
import { Empty } from "antd";
import EmptyStateIcon from "../../assets/icons/empty-state.png";
// const initialCars = [
//   {
//     id: 1,
//     name: "Tata Punch 2023",
//     price: 130,
//     type: "SUV",
//     transmission: "Manual",
//     fuel: "Petrol",
//     distance: "3.7 km",
//   },
//   {
//     id: 2,
//     name: "Maruti Suzuki Ertiga 2023",
//     price: 230,
//     type: "SUV",
//     transmission: "Manual",
//     fuel: "Petrol",
//     distance: "3.6 km",
//   },
//   // Add more cars as needed
// ];

const CarList = () => {
  const [cars, setCars] = useState(carsData);
  const [filteredCars, setFilteredCars] = useState(carsData);

  const handleFilterChange = (filters: any) => {
    const { priceRange, carTypes, transmissions, fuelTypes } = filters;

    const filtered = cars.filter((car: any) => {
      const priceMatch =
        car.price >= priceRange[0] && car.price <= priceRange[1];
      console.log("price", car.price, priceRange);
      const typeMatch = carTypes.length ? carTypes.includes(car.type) : true;
      const transmissionMatch = transmissions.length
        ? transmissions.includes(car.transmission)
        : true;
      const fuelMatch = fuelTypes.length ? fuelTypes.includes(car.fuel) : true;

      return priceMatch && typeMatch && transmissionMatch && fuelMatch;
    });

    setFilteredCars(filtered);
  };
  return (
    <div style={{ display: "flex", padding: 20 }} className="cars-display">
      <FilterComponent onFilterChange={handleFilterChange} />
      <div className="cars-layout">
        <div className="heading">
          <h2>Reach Your Favorite location with your Favorite Compainer</h2>
          <p className="description-text">
            Ranging from elegant sedans to powerful sports cars, all carefully
            selected to provide our customers with the ultimate driving
            experience.
          </p>
        </div>
        {filteredCars && filteredCars.length > 0 ? (
          <div className="car-list">
            {filteredCars.map((car, index) => (
              <CarCard car={car} index={index} />
            ))}
          </div>
        ) : (
          <div className="empty-image-center">
            <Empty
              description={
                <>
                  <p className="empty-state-title">
                    No cars available for your selection criteria
                  </p>
                  <p className="empty-state-description">
                    Let us know what you are looking for and we will get back to
                    you
                  </p>
                </>
              }
              image={EmptyStateIcon}
              imageStyle={{ height: "100%" }}
            ></Empty>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
