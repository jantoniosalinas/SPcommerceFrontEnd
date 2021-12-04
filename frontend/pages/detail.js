import DetailCart from '../components/Pages/DetailCart'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'

import LoginForm from '../components/LoginForm'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BiUserPlus } from 'react-icons/bi'
import queryString from 'query-string'
import styles from './../components/Principal/Principal.module.scss'

export default function Detail () {

    const isBrowser = typeof window !== "undefined";
    //console.log('estoy en',isBrowser)
    if ( !isBrowser ) {
        return null
    }
    const params = new URLSearchParams(window.location.search);
    const sku = params.get('sku'); 

    return (
        <>
        <Header />
            <div className='container columns'>
                <div className='content'>
                    <DetailCart sku={sku} />
                    {/* !isError &&
                    }
                    { isError &&
                        <div className='notification is-danger is-light'>
                            <button className='delete'></button>
                            Valor de SKU indefinido ...
                        </div>
                    */}
                </div>
                <div className='tile is-parent'>
                    <article className='tile is-child notification'>
                        <div className='content'>
                            <p className='title'>SPcommerce</p>
                            <p className='subtitle'></p>
                            <div className={`content ${styles.aligned}`}>
                                <LoginForm /> 
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
        <Footer />
        </>
    )
}
