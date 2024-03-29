import React from "react";

export const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      {children}
    </div>
  );
};