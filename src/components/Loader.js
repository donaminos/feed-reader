import React from "react";

export const Loader = ({ isLoading }) => {
  return isLoading ? <span>Loading...</span> : null;
};
