import React from "react";
import PropTypes from "prop-types";

const Weather = ({ result }) => {
  const { name, main } = result;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather of {name} is:</h2>
        {main ? (
          <p className="temperature">
            {parseFloat(main.temp - 273.15, 10).toFixed(2)}{" "}
            <span>&#x2103;</span>
          </p>
        ) : null}
        {main ? (
          <p>
            Max. Temperature:{" "}
            {parseFloat(main.temp_max - 273.15, 10).toFixed(2)}{" "}
            <span>&#x2103;</span>
          </p>
        ) : null}
        {main ? (
          <p>
            Min. Temperature:{" "}
            {parseFloat(main.temp_min - 273.15, 10).toFixed(2)}{" "}
            <span>&#x2103;</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

Weather.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Weather;
