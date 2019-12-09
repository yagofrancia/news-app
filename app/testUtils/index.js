import React from 'react';
import { shallow } from 'enzyme';

export default (ComponentToShallow, props = {}) => {
  const component = shallow(<ComponentToShallow {...props} />);
  return component;
};
