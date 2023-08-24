import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext()

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
}

const defaultLogOut = () => {}

class AppProvider extends Component {
  state = {
    user: defaultUser,
    logOut: defaultLogOut
  }

  render () {
    const { user, logOut } = this.state
    const contextValue = { user, logOut }

    return (
        <AppContext.Provider value={contextValue}>
            {this.props.children}
        </AppContext.Provider>
    )
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}
export { AppContext, AppProvider, defaultUser }
