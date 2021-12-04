import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import ShowCart from '../components/Pages/ShowCart'
import Info from '../components/Pages/Info'
import { useRouter } from 'next/router'
import { useState } from 'react'
//import LoginForm from '../components/LoginForm'
import Link from 'next/link'
//import { BiUserPlus } from 'react-icons/bi'
import queryString from 'query-string'
//import styles from './../components/Principal/Principal.module.scss'

export default function sCart() {
    const [ isError, setIsError ] = useState(false)
    const router = useRouter()

    if ( typeof window === "undefined" ) {
        window = {}
        setIsError(true)
    }
    let search = null;
    let params = null;
    let email = null;
    if ( typeof window !== "undefined" ) {
         search = window.location.search;
         params = new URLSearchParams(search);
         email=params.get('email');
    }

    if ( !email ) {
        return alert("Error en email")
    }
    //const val=value.sku;
    //console.log(`SKU.... ${search} -- ${params} --- ${sku}`)
    //sku='SPID2021000006'
    return (
        <>
        <Header />
            <div className='container columns'>
                { !isError &&
                    <>
                    <div className='content'>
                        <ShowCart email={email} />
                    </div>
                    <div className='tile is-parent'>
                        <article className='tile is-child notification'>
                            <div className='content'>
                            <Info email={email} />                             
                            </div>
                        </article>
                    </div>
                    </>
                }
                {
                    isError &&
                    <div className='notification is-danger is-light'>
                            <button className='delete'></button>
                            No se puede mostrar el producto ...
                    </div>
                }
            </div>
        <Footer />
        </>
    )
}
