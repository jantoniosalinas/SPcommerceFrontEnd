//import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FiLogOut } from 'react-icons/fi'
import styles from './Logout.module.scss'

export default function Logout() {  
    const [ isLogin, setIsLogin ] = useState(false)
    const router = useRouter()

    useEffect(() => {
      const sToken = window.sessionStorage.getItem('token')
      //const sMail = window.sessionStorage.getItem('email')
      if ( sToken ) {
          setIsLogin(true)
          console.log(`Token Logo ${sToken}`)
      }
    }, [])

    const handleLogOut = event => {
        event.preventDefault()
        event.stopPropagation()
        
        window.sessionStorage.setItem('token', '')
        window.sessionStorage.setItem('email', '')
        router.push('/')
    }

    return (
            <div className={`section box ${styles.logout}`}>
                <div className='content'>
                    <h4>Logout</h4>   
                    <form>
                        <div className='field'>
                            <button className='button is-medium is-fullwidth is-primary' onClick={e => handleLogOut(e)}>
                                <span className='icon'>
                                <FiLogOut />
                                </span>
                                <span>Logout</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

