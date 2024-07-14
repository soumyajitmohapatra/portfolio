import React, { ReactNode } from "react";
import { Header, HeaderProps } from "./Header";

export interface CardProps extends Omit<HeaderProps, "headerTitle"> {
  description: string;
  icon: ReactNode;
  cardTitle: string;
}

export const Card: React.FC<CardProps> = ({
  cardTitle,
  description,
  icon,
  headerClassName,
  headerElementName,
}) => {
  return (
    <>
      <div className="service-icon-box">{icon}</div>
      <div className="service-content-box">
        <Header
          headerElementName={headerElementName}
          headerClassName={headerClassName}
          headerTitle={cardTitle}
        />
        <p className="service-item-text">{description}</p>
      </div>
    </>
  );
};
