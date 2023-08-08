import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';


describe('<CourseList />', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  // Check that it renders CourseList component without crashing
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  // Check that it renders the 5 different rows
  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(5);

    // Check the props of each row
    expect(rows.at(0).props()).toEqual({ isHeader: true, textFirstCell: 'Available courses' });
    expect(rows.at(1).props()).toEqual({ isHeader: true, textFirstCell: 'Course name', textSecondCell: 'Credit' });
    expect(rows.at(2).props()).toEqual({ isHeader: false, textFirstCell: 'ES6', textSecondCell: '60' });
    expect(rows.at(3).props()).toEqual({ isHeader: false, textFirstCell: 'Webpack', textSecondCell: '20' });
    expect(rows.at(4).props()).toEqual({ isHeader: false, textFirstCell: 'React', textSecondCell: '40' });
  });

  // Add a new test to verify that CourseList renders correctly if you pass an empty array
  it('renders correctly with an empty listCourses array', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(1); // Only the header row should be rendered
  });

  // Add a new test to verify that CourseList renders correctly if you don’t pass the listCourses property
  it('renders correctly when listCourses is not provided', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(5); // Default rows should be rendered
  });

  // Add a new test to verify that when you pass a list of courses, the component renders it correctly
  it('renders the correct number of CourseListRow elements with provided listCourses', () => {
    const listCourses = [
      { id: 1, name: 'Course 1', credit: 3 },
      { id: 2, name: 'Course 2', credit: 4 },
      { id: 3, name: 'Course 3', credit: 2 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(listCourses.length + 2); // +2 for the header rows
  });
});
