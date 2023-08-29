/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'
import { StyleSheetTestUtils } from 'aphrodite'
import { AppContext } from '../App/AppContext'

describe('<Header />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    )
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders img and h1 tags', () => {
    const wrapper = mount(
    <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
      <Header />
    </AppContext.Provider>
    )
    expect(wrapper.find('img').length).toBe(1)
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('does not render logoutSection with default context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    )
    expect(wrapper.find('.logoutSection').length).toBe(0)
  })

  it('renders logoutSection with user context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' } }}>
        <Header />
      </AppContext.Provider>
    )
    expect(wrapper.find('.logoutSection').length).toBe(1)
  })

  it('calls logOut function when logout link is clicked', () => {
    const logOutSpy = jest.fn()
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com', logOut: logOutSpy } }}>
        <Header />
      </AppContext.Provider>
    )
    wrapper.find('.logoutSection').simulate('click')
    expect(logOutSpy).toHaveBeenCalled()
  })
})
