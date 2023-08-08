import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    const styles = StyleSheet.create({
        App: {
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        },          
        AppBody: {
            margin: '50px',
            textAlign: 'left',
        },
          
        input: {
            marginRight: '10px',
        }
    });
    return (
        <div className={css(styles.App)}>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" className={css(styles.input)} />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" className={css(styles.input)} />
                <button>OK</button>
            </div>  
        </div>
    )
}

export default Login;