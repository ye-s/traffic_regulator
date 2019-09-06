import React, { useState, useEffect } from 'react';
import TrafficPicker from './TrafficPicker';
import PropTypes from 'prop-types';
import VehicleItemsList from './vehicleItemsList/VehicleItemsList';
import useSelect from '../../../customHooks/useSelect';
import Loader from '../../common/Loader';
import './trafficForm.scss';

const TrafficForm = (props) => {

  const { items } = props;

  const [isVechiclesFetched, setVechiclesFetched ] = useState(false);
  const [filteredVehicleItems, setFilteredVehicleItems] = useState(items);
  const [selectorTypes, setSelectorTypes] = useState({
    brands: [],
    colors: [],
    types: []
    }
  );

  const [selectedOptions, addSelectedOption, compareItemToSelectedOptions] = useSelect();

  useEffect(() => {
      if (items.length > 0) {
        createSelectOptionsLists(items);
        setVechiclesFetched(true);
      }
    }, [items]
  );

  /**
   * Creates lists of options
   * @param {Array} items 
   */
  const createSelectOptionsLists = (items) => {
    let allSelectors = {};
    allSelectors = items.reduce(
      (selectors, item) => {
        selectors.brands.add(item.brand);
        item.colors.forEach(color => selectors.colors.add(color));
        selectors.types.add(item.type);
        return selectors;
      },
      {
        brands: new Set([]),
        colors: new Set([]),
        types: new Set([])
      }
    );
    setSelectorTypes({ ...allSelectors });
    setFilteredVehicleItems(items);
  };
  
  /**
   * Filter all vehicle items by selected options
   * from brand, color or type categories
   */
  const filterBySelectedValues = () => {
    const { brand, color, type } = selectedOptions
    if (brand.length || color.length || type.length) {
      const filteredVehicles = items.filter(item => (compareItemToSelectedOptions(item)));
      createSelectOptionsLists(filteredVehicles);
    } else {
      createSelectOptionsLists(items);
    }
  };

  const handleSelectChange = select => {
    const { type, value } = select;
    addSelectedOption({ type, value });
  }

  useEffect(() => {
    filterBySelectedValues();
  }, [selectedOptions]);

  return (
    <div className="vehicleForm">
      { 
        !isVechiclesFetched
        ? (<Loader />)
        : (
          <>
            <TrafficPicker
              onSelectChange={handleSelectChange}
              options={[...selectorTypes.brands]}
              type="brand"
            />
            <TrafficPicker
              onSelectChange={handleSelectChange}
              options={[...selectorTypes.colors]}
              type="color"
            />
            <TrafficPicker
              onSelectChange={handleSelectChange}
              options={[...selectorTypes.types]}
              type="type"
            />
            <VehicleItemsList
              items={filteredVehicleItems}
            />
          </>)
      }
    </div>
  );
}

TrafficForm.propTypes = {
  items: PropTypes.array
}

export default TrafficForm;