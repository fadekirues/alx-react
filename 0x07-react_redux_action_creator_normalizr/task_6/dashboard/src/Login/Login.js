import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      enabledSubmit: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
      enabledSubmit: this.state.email !== '' && this.state.password !== ''
    })
  }

  handleLoginSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    if (email && password) {
      this.props.logIn(email, password)
    }
  }

  render () {
    return (
            <div className={css(styles.App)}>
                <div className={css(styles.AppBody)}>
                    <p>Login to access the full dashboard</p>
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className={css(styles.inputGroup)}>
                            <label htmlFor="email">Email: </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={css(styles.input)}
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className={css(styles.inputGroup)}>
                            <label htmlFor="password">Password: </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className={css(styles.input)}
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <input
                            type='submit'
                            value='ok'
                            disabled={!this.state.enabledSubmit}
                        />
                    </form>
                </div>
            </div>
    )
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  App: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    '@media (max-width: 900px)': {
      display: 'block'
    }
  },
  AppBody: {
    margin: '10px',
    textAlign: 'left'
  },
  inputGroup: {
    marginBottom: '10px'
  },
  input: {
    marginRight: '10px'
  }
})

export default Login
