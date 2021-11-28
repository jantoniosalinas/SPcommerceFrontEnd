//import React from 'react'
import { useState, useEffect } from 'react'
import Page from '../Page'
import Layout from '../../Layout'

export default function Home() {
    
    const [ token, setToken ] = useState('');
    
    useEffect(() => {
        const sToken = window.sessionStorage.getItem('token')
        console.log(`my token de sesión es: ${sToken}`)
        setToken(sToken)
    }, [])
    
    return (
        <Page>
            <Layout>
            </Layout>
        </Page>
    )
}
