// Loader.tsx
import React from "react";
import { Spinner } from "./Spinner";

export const FullScreenLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "55%",
        zIndex: 1000,
        opacity: 1,
        transition: "opacity 0.1s ease-in-out",
      }}
    >
      <Spinner />
    </div>
  );
};
