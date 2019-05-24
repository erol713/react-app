import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Single from '../../components/Single';
import Photo from '../../components/Single';
import Comments from '../../components/Single';

const setUp = (props={}) => {
    const component = shallow( <Single {...props} /> );
    return component;
};
describe('This is a Single component', () => {
	let component;
	beforeEach(()=> {
		component = setUp();
	});

	it('There is a Single class', () => {
		expect(component.find('.single-photo'));
	});

	it('There is a Image', () => {
		expect(component.find(<Photo />));
	});

	it('There are Comments', () => {
		expect(component.find(<Comments />));
	});
});
