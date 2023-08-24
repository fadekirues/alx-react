/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList'
import { StyleSheetTestUtils } from 'aphrodite'

describe('<App />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).not.toBeNull()
  })

  it('renders the Notifications component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Notifications).length).toBe(1)
  })

  it('renders the Header component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header).length).toBe(1)
  })

  it('renders the Login component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Login).length).toBe(1)
  })

  it('renders the Footer component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Footer).length).toBe(1)
  })

  it('does not render the CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(CourseList).length).toBe(0)
  })

  it('should update displayDrawer state to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.handleDisplayDrawer()
    expect(wrapper.state('displayDrawer')).toBe(false)
  })

  it('should update displayDrawer state to false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.handleDisplayDrawer()
    expect(wrapper.state('displayDrawer')).toBe(false)
  })

  it('updates the state correctly when markNotificationAsRead is called', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()

    const initialNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' }
    ]

    wrapper.setState({ listNotifications: initialNotifications })

    const notificationId = 1
    instance.markNotificationAsRead(notificationId)

    const expectedNotifications = [
      { id: 2, type: 'urgent', value: 'Notification 2' }
    ]
    expect(wrapper.state('listNotifications')).toEqual(expectedNotifications)
  })

  describe('when isLoggedIn is true', () => {
    it('does not render the Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />)
      expect(wrapper.find(Login).length).toBe(0)
    })

    it('renders the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />)
      expect(wrapper.find(CourseList).length).toBe(1)
    })
  })

  describe('when the keys control and h are pressed', () => {
    let originalAlert
    let logOutMock

    beforeEach(() => {
      logOutMock = jest.fn()
      const wrapper = shallow(<App />)
      originalAlert = window.alert
      wrapper.setState({ logOut: logOutMock })
    })

    afterEach(() => {
      window.alert = originalAlert
      jest.restoreAllMocks()
    })

    it('calls the logOut function', () => {
      document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' }))
      expect(logOutMock).toHaveBeenCalled()
    })

    it('displays the alert message "Logging you out"', () => {
      window.alert = jest.fn()
      document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' }))
      expect(window.alert).toHaveBeenCalledWith('Logging you out')
    })
    it('updates state correctly when logIn is called', () => {
      const wrapper = shallow(<App />)
      const instance = wrapper.instance()
      instance.logIn('test@example.com', 'password')
      expect(wrapper.state('user')).toEqual({
        email: 'test@example.com',
        password: 'password',
        isLoggedIn: true
      })
    })

    it('updates state correctly when logOut is called', () => {
      const wrapper = shallow(<App />)
      const instance = wrapper.instance()
      instance.logOut()
      expect(wrapper.state('user')).toEqual({
        email: '',
        password: '',
        isLoggedIn: false
      })
    })
  })
})
