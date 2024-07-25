import React from "react";
import Card from "../../Components/Card/Card";

import "./RentByTile.scss";

export type CardItemProps = {
  name?: string;
  icon: JSX.Element;
};
export type RentByProps = {
  rentByType: string;
  title: string;
  cardItems: CardItemProps[];
};
const RentByTile = ({ rentByType, title, cardItems }: RentByProps) => {
  return (
    <div className={`rentby rentby-${rentByType}`}>
      <div className="title">{title}</div>
      <div className="rent-type-cards">
        {cardItems?.map(({ icon }) => {
          return (
            <Card onSelect={() => console.log("card clicked")} title={icon} />
          );
        })}
      </div>
    </div>
  );
};

export default RentByTile;
