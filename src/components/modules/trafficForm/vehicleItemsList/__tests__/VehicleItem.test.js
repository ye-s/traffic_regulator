import React from 'react';
import VehicleItem from '../VehicleItem';

jest.mock("../../../../../assets/logo.svg", () => {
  return {};
});

const generateProps = (props) => {
	return {
		...props
	};
}

let wrapper, props;

beforeEach(() => {
	props = generateProps();
	wrapper = shallow(<VehicleItem {...props} /> );
});

describe('<VehicleItem /> rendering', () => {
	it('should render <div> with .vehicleItem__description class', () => {
    expect(wrapper.find('.vehicleItem__description'));
  });
});