import React from "react";
const customArrow = (props) => {
  const { className, style, onClick,icon } = props;
  return (
    <img
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
      src={icon}
    />
  );
};

export default customArrow;
