import React from 'react';
import VehicleItemsList from '../VehicleItemsList';
import VehicleItem from '../VehicleItem';

jest.mock("../vehicles.scss", () => {
  return {};
});

const generateProps = (props) => {
	return {
		items: [],
		...props
	};
}
const vehicleData = [
	{
		id: 1,
		type: 'car',
		brand: 'Bugatti Veyron',
		colors: ['red', 'black'],
		img: 'https://car.jpg'
	},
	{
		id: 2,
		type: 'airplane',
		brand: 'Boeing 787 Dreamliner',
		colors: ['red', 'white', 'black', 'green'],
		img: 'https://plane.jpg'
	},
	{
		id: 3,
		type: 'train',
		brand: 'USRA 0-6-6',
		colors: ['yellow', 'white', 'black'],
		img: 'https://train.JPG'
	}
];
let wrapper, props;

beforeEach(() => {
	props = generateProps();
	wrapper = shallow(<VehicleItemsList {...props} /> );
});

describe('<VehicleItemsList /> rendering', () => {
	it('should render 0 <VehicleItem> if items props are empty', () => {
		expect(wrapper.find(VehicleItem)).toHaveLength(0);
	});
	it('should render 3 <VehicleItem> if items has 3 values', () => {
		wrapper.setProps({ items: vehicleData });
		expect(wrapper.find(VehicleItem)).toHaveLength(3);
  });
});
