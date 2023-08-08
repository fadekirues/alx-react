import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).not.toBeNull();
  });

  it('renders the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('renders the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('renders the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('renders the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('does not render the CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  describe('when isLoggedIn is true', () => {
    it('does not render the Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login).length).toBe(0);
    });

    it('renders the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });

  describe('when the keys control and h are pressed', () => {
    let originalAlert;

    beforeEach(() => {
      const logOutMock = jest.fn();
      const wrapper = shallow(<App logOut={logOutMock} />);
      originalAlert = window.alert;
    });

    afterEach(() => {
      window.alert = originalAlert;
      jest.restoreAllMocks();
    });

    it('calls the logOut function', () => {
      document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' }));
      expect(logOutMock).toHaveBeenCalled();
    });

    it('displays the alert message "Logging you out"', () => {
      window.alert = jest.fn();
      document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' }));
      expect(window.alert).toHaveBeenCalledWith('Logging you out');
    });
  });
});
