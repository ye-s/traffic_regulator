import React from 'react';
import TrafficForm from '../TrafficForm';
import TrafficPicker from '../TrafficPicker';
import Loader from '../../../common/Loader';

jest.mock("../vehicleItemsList/vehicles.scss", () => {
  return {};
});
jest.mock("../trafficForm.scss", () => {
  return {};
});
jest.mock("../../../../assets/logo.svg", () => {
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
	wrapper = shallow(<TrafficForm {...props} /> );
});

describe('<TrafficForm /> rendering', () => {
	it('should render <TrafficForm>', () => {
		expect(wrapper.find('.vehicleForm')).toHaveLength(1);
	});
	it('should render <Loader> if there are no items', () => {
		expect(wrapper.find(Loader)).toHaveLength(1);
	});
	it('should render <TrafficPicker>', () => {
		expect(wrapper.find(TrafficPicker));
	});
	it('should render <TrafficPicker> <div> with .itemsSelect class', () => {
		expect(wrapper.find('.itemsSelect'));
	});
});