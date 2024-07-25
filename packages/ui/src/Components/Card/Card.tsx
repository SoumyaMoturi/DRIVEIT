import { Card as AntCard } from "antd";
import React from "react";

interface CardProps {
  id?: any;
  key?: any;
  title: JSX.Element;
  onSelect?: () => void;
  styles?: any;
  classNames?: string;
}
export const Card = ({ title, onSelect, styles, classNames }: CardProps) => (
  <AntCard
    hoverable
    style={styles}
    onClick={() => onSelect && onSelect()}
    tabIndex={0}
    className={classNames}
  >
    <p>{title}</p>
  </AntCard>
);

export default Card;
