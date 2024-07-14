import React, { ReactNode } from "react";
import "./Link.scss";

interface LinkProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  link: string;
  newTab?: boolean;
  hoverEffect?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  children,
  link,
  newTab = true,
  hoverEffect = false,
  ...rest
}) => {
  return (
    <a
      href={link}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={hoverEffect ? "custom-link" : ""}
      {...rest}
    >
      {children}
    </a>
  );
};
