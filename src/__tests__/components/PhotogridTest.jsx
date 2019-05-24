import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Photogrid from '../../components/Photogrid';

configure({ adapter: new Adapter() });

test('This is a Photogrid component', () => {
	shallow(<Photogrid />);
});
