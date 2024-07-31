// FilterComponent.jsx
import React, { useState } from "react";
import { Slider, Checkbox, Collapse, Divider } from "antd";
import "./FilterComponent.scss";

const { Panel } = Collapse;

const FilterComponent = ({ onFilterChange }: any) => {
  const [priceRange, setPriceRange] = useState([1500, 16000]);
  const [carTypes, setCarTypes] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);

  const handlePriceChange = (value: any) => {
    setPriceRange(value);
    onFilterChange({ priceRange: value, carTypes, transmissions, fuelTypes });
  };

  const handleCarTypeChange = (checkedValues: any) => {
    setCarTypes(checkedValues);
    onFilterChange({
      priceRange,
      carTypes: checkedValues,
      transmissions,
      fuelTypes,
    });
  };

  const handleTransmissionChange = (checkedValues: any) => {
    setTransmissions(checkedValues);
    onFilterChange({
      priceRange,
      carTypes,
      transmissions: checkedValues,
      fuelTypes,
    });
  };

  const handleFuelTypeChange = (checkedValues: any) => {
    setFuelTypes(checkedValues);
    onFilterChange({
      priceRange,
      carTypes,
      transmissions,
      fuelTypes: checkedValues,
    });
  };

  return (
    <div className="filter-container">
      <h3>Find Your Perfect Ride!</h3>
      <Divider />
      <h4>Total Price</h4>
      <Slider
        range
        min={0}
        max={10000}
        defaultValue={priceRange}
        onChange={handlePriceChange}
        step={200}
        tooltipVisible
      />
      <div className="price-range">
        <span>Rs. {priceRange[0]}</span> - <span>Rs. {priceRange[1]}</span>
      </div>
      <Divider />
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Car Details" key="1">
          <h4>Filter By Car Type</h4>
          <Checkbox.Group onChange={handleCarTypeChange}>
            <Checkbox value="SUV">SUV</Checkbox>
            <Checkbox value="Sedan">Sedan</Checkbox>
            <Checkbox value="Hatchback">Hatchback</Checkbox>
            <Checkbox value="Luxury">Luxury</Checkbox>
          </Checkbox.Group>
          <Divider />
          <h4>Filter By Transmission</h4>
          <Checkbox.Group onChange={handleTransmissionChange}>
            <Checkbox value="Manual">Manual</Checkbox>
            <Checkbox value="Automatic">Automatic</Checkbox>
          </Checkbox.Group>
          <Divider />
          <h4>Filter By Fuel Type</h4>
          <Checkbox.Group onChange={handleFuelTypeChange}>
            <Checkbox value="Diesel">Diesel</Checkbox>
            <Checkbox value="Petrol">Petrol</Checkbox>
            <Checkbox value="Electric">Electric</Checkbox>
          </Checkbox.Group>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FilterComponent;
