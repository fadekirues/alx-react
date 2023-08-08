import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css} from 'aphrodite';

function Header() {
  const styles = StyleSheet.create({
    AppHeader: {
      backgroundColor: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px',
      color: '#e0354b',
      borderBottom: '3px solid #e0354b',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
  },
  AppLogo: {
    width: '200px',
  }
  });
    return (
        <div className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.AppLogo)} alt="logo" />
          <h1>School dashboard</h1>
        </div>
    )
};

export default Header;