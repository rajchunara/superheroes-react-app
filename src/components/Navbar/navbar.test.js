import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import { findByTestAttribute } from '../../../TestUtils';

export const setup = (props = {}) => {
  const component = shallow(<Navbar {...props} />);
  return component;
};

describe('Navbar Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should render navbar without errors', () => {
    const wrapper = findByTestAttribute(component, 'navbarComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render title without errors', () => {
    const wrapper = findByTestAttribute(component, 'title');

    expect(wrapper.length).toBe(1);
  });
});
