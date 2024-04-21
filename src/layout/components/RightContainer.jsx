import React from "react";
import PropTypes from "prop-types";
import "./rightcontainer.css";
const RightContainer = ({ icons,iconStyles }) => {
  return (
    <div className="right-container">
      {Object.entries(icons).map(([key, Icon], index) => (
        <img key={index} src={Icon} className={iconStyles[key]} />
      ))}
    </div>
  );
};
RightContainer.propTypes = {
  icons: PropTypes.object.isRequired,
};
export default RightContainer;
