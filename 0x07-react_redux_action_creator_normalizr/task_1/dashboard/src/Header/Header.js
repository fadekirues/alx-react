import React, { Component } from 'react'
import logo from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite'
import { AppContext } from '../App/AppContext'

class Header extends Component {
  static contextType = AppContext

  render () {
    return (
      <>
        <div className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.AppLogo)} alt="logo" />
          <h1>School dashboard</h1>
        </div>
        {
          this.context.user.isLoggedIn
            ? <div className={css(styles.loginText)}>
                Welcome <b>{this.context.user.email}</b> (<a className={css(styles.logoutSection)} onClick={this.context.logOut}>logout</a>)
              </div>
            : null
        }
      </>
    )
  }
}

const styles = StyleSheet.create({
  AppHeader: {
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    color: '#e0354b',
    borderBottom: '3px solid #e0354b',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  AppLogo: {
    width: '200px'
  },
  logoutSection: {
    cursor: 'Pointer',
    fontStyle: 'italic'
  },
  loginText: {
    textAlign: 'center'
  }
})

export default Header
