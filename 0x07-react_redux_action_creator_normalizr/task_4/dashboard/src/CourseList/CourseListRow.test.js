import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  // When isHeader is true
  it('renders one cell with colSpan=2 when textSecondCell does not exist', () => {
    const textFirstCell = 'Header Cell';
    const wrapper = shallow(<CourseListRow isHeader textFirstCell={textFirstCell} />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
    expect(wrapper.find('th').text()).toBe(textFirstCell);
  });

  it('renders two cells when textSecondCell is present', () => {
    const textFirstCell = 'Header Cell 1';
    const textSecondCell = 'Header Cell 2';
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell={textFirstCell} textSecondCell={textSecondCell} />
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(1);
    expect(wrapper.find('th').text()).toBe(textFirstCell);
    expect(wrapper.find('td')).toHaveLength(1);
    expect(wrapper.find('td').text()).toBe(textSecondCell);
  });

  // When isHeader is false
  it('renders two td elements within a tr element', () => {
    const textFirstCell = 'Data Cell 1';
    const textSecondCell = 'Data Cell 2';
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell={textFirstCell} textSecondCell={textSecondCell} />
    );
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toBe(textFirstCell);
    expect(wrapper.find('td').at(1).text()).toBe(textSecondCell);
  });
});
