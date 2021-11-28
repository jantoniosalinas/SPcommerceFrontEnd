import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import ShowCart from '../components/Pages/ShowCart'
import Info from '../components/Pages/Info'
import { useRouter } from 'next/router'
//import LoginForm from '../components/LoginForm'
import Link from 'next/link'
//import { BiUserPlus } from 'react-icons/bi'
import queryString from 'query-string'
//import styles from './../components/Principal/Principal.module.scss'

export default function sCart() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const email=params.get('email');
    const router = useRouter()
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
            </div>
        <Footer />
        </>
    )
}
