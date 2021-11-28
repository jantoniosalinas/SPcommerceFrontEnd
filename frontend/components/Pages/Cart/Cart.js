import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md' 
import { VscPreview } from 'react-icons/vsc'
import Link from 'next/link'
import styles from './Cart.module.scss'

const BACKEND_URL = 'http://localhost:5000'
console.log(BACKEND_URL)

const Cart = ({ classBook }) => {
     const [ list, setList ] = useState([])
     const getProductsByCategory = () => {
         return axios.get(`${BACKEND_URL}/products/search/${classBook}`, {
            headers: {
                'Content-Type': 'application/json'
            }
         }).then ( data => {
             return data.data
         })
     }

     useEffect(() => {
         getProductsByCategory()
         .then( products => {
             setList(products)
         })
     }, [])
   
     const myButton = React.forwardRef(({ onClick, href }, ref) => {
         return (
             <a href={href} onClick={onClick} ref={ref}>Ver</a>
         )
     })

     return (
        <section className='section is-medium'>
            <div className='container'>
                <div className={styles.grid}>
            {
                list.map(product => 
                    <div className={`card styles.box styles.grid`}>
                        <div className='card-image'>
                            <figure className='image is-256x256'>
                                <img src={product.image} alt='Placeholder image' />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-content'>
                                    <p className='title is-4'>{product.product_name}</p>
                                    <p className='subtitle is-6'>{product.description}</p>
                                </div>
                            </div>
                            <div className='content'>
                                <span>Precio : 
                                   <strong> $ {product.price} .00</strong>
                                </span>
                            </div>
                            <div className='content'>
                                <span>Calificación : 
                                    <strong> {product.likes} </strong>
                                    <img className = "image is-16x16" src="star_on.png" alt='likes' />
                                </span>
                            </div>
                            <div className='content'>
                                <Link href={{ pathname:'detail', query: { sku: `${product.sku}` }}}>
                                    <button className='button is-small is-info'>Ver</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
                </div>
            </div>
        </section>
     )
}


const buildStart = (stars) => {
    const max_stars = 5;
    let stars_off = 0;
    let html_stars = ""; //"<figure className='image is-4by3'>"

    for ( let i = 0; i < stars; i++ ) {
          html_stars += "<img src='star_on.png' alt='1' />";
    }
      
    if ( stars < max_stars ) {
         stars_off = max_stars - stars;    
         for ( let i = 0; i < stars_off; i++ ) {
               html_stars += "<img src='star_off.png' alt='2' />";
         }
    }

    //html_stars += "</figure>"
    return html_stars
}

export default Cart