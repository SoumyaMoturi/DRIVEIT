import React, { useState } from "react";
import { Row, Col } from "antd";
import Card from "../../Components/Card/Card";

import "./RentByBrand.scss";

export type CardItemProps = {
  name?: string;
  //   icon: JSX.Element;
  icon: string;
};
export type RentByProps = {
  rentByType: string;
  title: string;
  cardItems: CardItemProps[];
};

const RentByBrand = ({ title, cardItems }: RentByProps) => {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? cardItems : cardItems.slice(0, 12);

  return (
    <div style={{ margin: "20px" }} className="container rentby">
      <div className="rent-by-heading">
        <div className="title">{title}</div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <span onClick={() => setShowAll(!showAll)} className="view">
            {showAll ? "View Less" : "View All"}
          </span>
        </div>
      </div>
      <Row gutter={[16, 16]} justify="center">
        {displayedData.map((item) => (
          <Col key={item.name}>
            <Card
              onSelect={() => console.log("card clicked")}
              title={
                <div>
                  <div style={{ fontSize: "40px" }}>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              }
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RentByBrand;
