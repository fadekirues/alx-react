import React, { useContext } from 'react'
import { getFullYear, getFooterCopy } from '../utils/utils'
import { StyleSheet, css } from 'aphrodite'
import { AppContext } from '../App/AppContext'

function Footer (props) {
  const context = useContext(AppContext)

  return (
        <div className={css(styles.AppFooter)}>
          <p> Copyright {getFullYear()} - {getFooterCopy(true)}</p>
          {context.user.isLoggedIn && (
            <p className={css(styles.contactUsStyle)}>
              <a href='#'>Contact Us</a>
            </p>
          )}
        </div>
  )
}

const styles = StyleSheet.create({
  AppFooter: {
    borderTop: '3px solid #e0354b',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    marginBottom: '0',
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  contactUsStyle: {
    marginTop: '5px'
  }
})

export default Footer
