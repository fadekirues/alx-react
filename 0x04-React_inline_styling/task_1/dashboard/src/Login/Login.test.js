import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Login />', () => {
  beforeEach (() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach (() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2); // Verifying that there are two input tags
    expect(wrapper.find('label').length).toBe(2); // Verifying that there are two label tags
  });
});
