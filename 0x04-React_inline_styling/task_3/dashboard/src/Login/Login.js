import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    const styles = StyleSheet.create({
        App: {
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            '@media (max-width: 900px)': {
                display: 'block',
            },
        },          
        AppBody: {
            margin: '10px',
            textAlign: 'left',
        },
        inputGroup: {
            marginBottom: '10px',
        },
        input: {
            marginRight: '10px',
        }
    });
    return (
        <div className={css(styles.App)}>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>

                <div className={css(styles.inputGroup)}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" className={css(styles.input)} />
                </div>

                <div className={css(styles.inputGroup)}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" className={css(styles.input)} />
                </div>
                <button>OK</button>
            </div>  
        </div>
    )
}

export default Login;