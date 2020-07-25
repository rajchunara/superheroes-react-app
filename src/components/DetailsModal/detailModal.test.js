import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import DetailsModal from './DetailsModal';
import { findByTestAttribute } from '../../../TestUtils';

export const setup = (props = {}) => {
  const component = shallow(<DetailsModal {...props} />);
  return component;
};

describe('DetailsModal Component', () => {
  describe('Check prop-types', () => {
    it('should render with props', () => {
      ex;
    });
  });
});
