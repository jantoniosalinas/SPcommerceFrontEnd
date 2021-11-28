//import React from 'react'
import LoginForm from "../LoginForm"
import styles from './Principal.module.scss'
import { BiUserPlus } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import RegisterForm from "../RegisterForm"
import Logout from "../Layout/Logout"


export default function Principal() {
  const [ isLogin,setIsLogin ] = useState(false)

  useEffect(() => {
    const sToken = window.sessionStorage.getItem('token')
    //const sMail = window.sessionStorage.getItem('email')
    if ( sToken ) {
        setIsLogin(true)
        console.log(`Token ${sToken} Log ${isLogin}`)
    } 
    else {
      setIsLogin(false)
      console.log(`Token ${sToken} Log ${isLogin}`)
    }
  }, [])

    return (
        <div className='tile is-ancestor'>
          <div className='tile is-vertical is-8'>
            <div className='tile'>
              <div className='tile is-parent is-vertical'>
                <Link href='/cart'>
                  <article className='tile is-child notification'>
                    <p className='title'>SP Book</p>
                    <p className='subtitle2'>Ordena el libro de tu agrado y nosotros nos encargamos de la magia...</p>
                    <figure className='image is-4by2'>
                      <img src='book3.jpg' alt='B1' />
                    </figure>
                  </article>
                </Link> 
              </div>
              <div className='tile is-parent is-vertical'>
                <Link href='/cartBB'>
                  <article className='tile is-child notification'>
                    <p className='title'>SP Book Box</p>
                    <p className='subtitle2'>Fabulos libros con actividades, snacks, o regalitos...</p>
                    <figure className='image is-3by2'>
                      <img src='book1.jpg' alt='B1' />
                    </figure>
                  </article>
                </Link>
                <Link href='/cartCB'> 
                  <article className='tile is-child notification'>
                    <p className='title'>SP Comic Box</p>
                    <p className='subtitle2'>Comic fantástico para disfrutarloe en grande...</p>
                    <figure className='image is-3by2'>
                      <img src='book5.jpg' alt='Surprise Comic' />
                    </figure>
                  </article>
                </Link>
              </div>
              <div className='tile is-parent is-vertical'>
                <Link href='/cartSB'>
                  <article className='tile is-child notification'>
                    <p className='title'>SP Surprise Book</p>
                    <p className='subtitle2'>Cuentanos sobre tí y recibe un libro especial...</p>
                    <div className='content'>
                      <figure className='image is-4by2'>
                        <img src='book4.jpg' alt='Surprise Book' />
                      </figure>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
          </div>

          <div className='tile is-parent'>
            <article className='tile is-child notification'>
              <div className='content'>
                <p className='title'>SPcommerce</p>
                <p className='subtitle'></p>
                <div className='content'>
                  { !isLogin && (
                   <LoginForm />
                  )
                  }
                  { isLogin && (
                    <Logout />
                  )
                  }
                </div>
                <div className={`content ${styles.aligned}`}>
                  <Link href='/register'>
                    <button className='button is-medium is-success'>
                      <span className='icon is-small is-left'>
                          <BiUserPlus />
                      </span>
                      <span>Registrarse</span>
                    </button> 
                 </Link> 
                </div>
              </div>
            </article>
          </div>
        </div>
    )
}