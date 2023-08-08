import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1); // Verifying that there is one img tag
    expect(wrapper.find('h1').length).toBe(1); // Verifying that there is one h1 tag
  });
});
