import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TrafficPicker = (props) => {

  const { options, onSelectChange, type } = props;

  const [hasOptions, setHasOptions] = useState(options.length > 0);

  useEffect(() => {
    setHasOptions(options.length > 0);
  }, [options]);

  const trafficItems = options.map((option) => {
    return (
      <option key={option}
              value={option}>{option}</option>
    );
  });

  const defaultOption = hasOptions
    ? (<option value="">Choose all {type}s</option>)
    : (<option value="">No options availiable</option>);

  const handleSelectChange = event => {
    const { value } = event.target;
    onSelectChange({ type, value });
  };
  

  return (
    <div className="itemsSelectBlock">
      <p className="itemsSelectLabel">Select {type}</p>
      <select 
        className="itemsSelect"
        onChange={handleSelectChange}>
          {defaultOption}
          {hasOptions && trafficItems}
      </select>
    </div>
  );
}

TrafficPicker.propTypes = {
  options: PropTypes.array,
  onSelectChange: PropTypes.func,
  type: PropTypes.string
}

export default TrafficPicker;