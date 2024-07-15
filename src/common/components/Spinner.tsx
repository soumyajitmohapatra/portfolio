import React from "react";
import "./Spinner.scss"; // Ensure you have the appropriate CSS for the spinner

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 40,
  color,
  className,
}) => {
  const spinnerStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderColor: color,
    borderTopColor: "transparent", // To create the spinning effect
  };

  return <div className={`spinner ${className}`} style={spinnerStyle}></div>;
};
