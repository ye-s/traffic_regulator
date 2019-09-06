import React from 'react';
import VehicleItem from './VehicleItem';
import PropTypes from 'prop-types';
import './vehicles.scss';

const VehicleItemsList = (props) => {

  const { items } = props;

  const vehicleItems = items.map(item => (
    <VehicleItem key={item.id} {...item} />
  ));

  return (
   <div className="vehicleItemsList">
    {
      vehicleItems.length
      ? vehicleItems
      : <p>Unfortunately there are no items with selected options.</p>
    }
   </div>
  );
}

VehicleItemsList.propTypes = {
  items: PropTypes.array
}

export default VehicleItemsList;