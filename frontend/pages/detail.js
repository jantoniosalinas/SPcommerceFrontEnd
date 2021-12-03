import DetailCart from "../components/Pages/DetailCart"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"

import LoginForm from "../components/LoginForm"

import Link from 'next/link'
import { BiUserPlus } from 'react-icons/bi'
import queryString from 'query-string'

import styles from './../components/Principal/Principal.module.scss'

export default function Detail() {
    let search = null;
    if ( window ) {
         search = window.location.search;
    }
    //console.log('Error',window.location.search)
    const params = new URLSearchParams(search);
    const sku = search.length > 0 ? params.get('sku'): null;
    //const val=value.sku;
    //console.log(`SKU.... ${search} -- ${params} --- ${sku}`)
    //sku='SPID2021000006'
    return (
        <>
        <Header />
            <div className='container columns'>
                <div className='content'>
                    <DetailCart sku={sku} />
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
