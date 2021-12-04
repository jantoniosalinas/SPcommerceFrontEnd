import DetailCart from '../components/Pages/DetailCart'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'

import LoginForm from '../components/LoginForm'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BiUserPlus } from 'react-icons/bi'
import queryString from 'query-string'
import styles from './../components/Principal/Principal.module.scss'

export default function Detail() {
    const [ isError, setIsError ] = useState(false)
    
    //console.log('Alert',window)
    if ( typeof window === 'undefined' ) {
        window = {}
        setIsError(true)
    }
    let search = null;
    let params = null;
    let sku = null;
    if ( typeof window !== 'undefined' ) {
        search = window.location.search;
        params = new URLSearchParams(search);
        sku = params.get('sku');
    }
        
    //console.log('Error',window.location.search)
    //const val=value.sku;
    //console.log(`SKU.... ${search} -- ${params} --- ${sku}`)
    //sku='SPID2021000006'
    return (
        <>
        <Header />
            <div className='container columns'>
                <div className='content'>
                    { !isError &&
                      <DetailCart sku={sku} />
                    }
                    { isError &&
                        <div className='notification is-danger is-light'>
                            <button className='delete'></button>
                            Valor de SKU indefinido ...
                        </div>
                    }
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
