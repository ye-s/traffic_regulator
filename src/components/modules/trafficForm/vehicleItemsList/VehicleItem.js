import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';

const VehicleItem = (props) => {

  const { img, type, brand, colors } = props;

  const colorsText = <span>{colors.join(', ')}</span>;

  const loaderPlaceholder = (
    <div className="vehicleItem__imagePlaceholder">Loading image...</div>
  );
  const unloaderPlaceholder = (
    <div className="vehicleItem__imagePlaceholder">No image available :(</div>
  );

  return (
   <div className="vehicleItem">
    <Img
      className="vehicleItem__image"
      src={img}
      loader={loaderPlaceholder}
      unloader={unloaderPlaceholder}
      decode={false}
    />
    <div className="vehicleItem__description">
      <p>{brand} ({type})</p>
      <p>Available colors - {colorsText}.</p>
    </div>
   </div>
  );
}

VehicleItem.propTypes = {
  img: PropTypes.string,
  brand: PropTypes.string,
  type: PropTypes.string,
  colors: PropTypes.array
}

VehicleItem.defaultProps = {
  colors: []
}

export default VehicleItem;