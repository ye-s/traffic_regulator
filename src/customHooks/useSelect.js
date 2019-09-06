import { useState } from 'react';

const useSelect = () => {

  const [selectedOptions, setSelectedOptions] = useState(
    {
      brand: '',
      color: '',
      type: ''
    }
  );

  const compareItemToOptions = (item) => {
    let isItemPassed = false;
    for (let key in selectedOptions) {
      let selectType = selectedOptions[key];
      if (selectType && selectType.length > 0) {
        if ((key === 'color' && item.colors.includes(selectType)) 
            || (item[key] === selectType)) {
          isItemPassed = true;
        } else {
          isItemPassed = false;
          break;
        }
      }
    }
    return isItemPassed;
  };

  const saveOption = (option) => {
    setSelectedOptions(state =>
        ({
          ...state,
          [option.type]: option.value
        })
    );
  };

  return [
    selectedOptions,
    saveOption,
    compareItemToOptions
  ];
};

export default useSelect;