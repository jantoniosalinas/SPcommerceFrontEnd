//import React from 'react'
import Page from '../Pages/Page'
import LoginForm from '../LoginForm'
import styles from './Login.module.scss'

export default function Login() {
    return (
        <Page>
            <div className={styles.loginPage}>
                <LoginForm /> 
            </div>
        </Page>
    )
}
