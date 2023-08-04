import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" html={{ __html: 'Test HTML' }} />);
  });

  it('renders correct HTML with dummy type and value props', () => {
    const type = 'default';
    const value = 'test';
    const wrapper = shallow(<NotificationItem type={type} value={value} html={{ __html: 'Test HTML' }} />);
    expect(wrapper.prop('data-notification-type')).toBe(type);
    expect(wrapper.text()).toBe(value);
  });

  it('renders correct HTML with dummy html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="default" value="test" html={html} />);
    expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual(html);
  });
});
