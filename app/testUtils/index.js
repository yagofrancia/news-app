import React from 'react';
import { shallow } from 'enzyme'

export const setUpComponent = (ComponentToShallow, props = {}) => {
    const component = shallow(<ComponentToShallow {...props} />)
    return component;
}