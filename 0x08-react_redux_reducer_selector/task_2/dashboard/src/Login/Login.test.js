/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Login from './Login'
import { StyleSheetTestUtils } from 'aphrodite'

describe('<Login />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })
  it('renders without crashing', () => {
    shallow(<Login />)
  })

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('input').length).toBe(2)
    expect(wrapper.find('label').length).toBe(2)
  })

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login/>)
    const submitButton = wrapper.find("input[type='submit']")
    expect(submitButton.prop('disabled')).toBe(true)
  })

  it('sunmit button is enabled after changing input values', () => {
    const wrapper = shallow(<Login/>)
    const emailInput = wrapper.find('input[name="email"]')
    const passwordInput = wrapper.find('input[name="password"]')
    const submitButton = wrapper.find('input[type="submit"]')

    emailInput.simulate('change', { target: { name: 'email', value: 'test@example.com' } })
    passwordInput.simulate('change', { target: { name: 'password', value: 'password123' } })

    expect(submitButton.prop('disabled')).toBe(false)
  })
})
