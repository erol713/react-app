import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Main from '../../components/Main';

const setUp = (props={}) => {
    const component = shallow( <Main {...props} /> );
    return component;

}

describe('This is a Main component', ()=>{

    let component;
    beforeEach( ()=>{
        component = setUp();
    })

    it('There is a header', () => {
        const header = component.find('h1');
        expect(header.length).toBe(1);
    });
    it('Header is New Social Media', () => {
        const header = component.find('h1');
        expect(header.text()).toBe('New Social Media');
    });
})
