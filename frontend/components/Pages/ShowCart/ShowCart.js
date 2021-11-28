import axios from 'axios'
import  React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsCartDash, BsCartX, BsCartCheck } from 'react-icons/bs'
import styles from './ShowCart.module.scss'

const BACKEND_URL = 'http://localhost:5000'
console.log(BACKEND_URL)

const ShowCart = ( {email} ) => {
     const [ shoppingCart, setShoppingCart ] = useState([])
     const router = useRouter()

     const sToken = window.sessionStorage.getItem('token');
     if ( ! sToken ) {
         return null 
     }
    

     const deleteCart = (evt, idShoppingCart, _id ) => {
         evt.preventDefault()
         evt.stopPropagation()
         const sToken = window.sessionStorage.getItem('token');
         if ( ! sToken ) {
             return alert ('Debes abrir sesión para poder eliminar un producto')
         }

         axios.delete(`${BACKEND_URL}/products/deleteCart/${_id}`,{
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         .then(response => {
             //console.log(response)
             alert('Producto eliminado correctamente....')
             router.push(`/showCart?email=${idShoppingCart}`);
         })
         .catch( err => {
                alert(err)
         })
         
     }

     const getCart = () => {
         if ( ! email ) {
              return router.push('/')
         }
         return axios.get(`${BACKEND_URL}/products/getCart/${email}`, {
            headers: {
                'Content-Type': 'application/json'
            }
         }).then ( data => {
             return data.data
         })
         .catch (err => {
            return router.push('/');
         })
     }

     useEffect(() => {
             getCart()
             .then( carts => {
                 setShoppingCart(carts)
                })
     }, [])

     return (
        <section className='section is-medium'>
            <div className='container'>
                <div className={styles.grid}>
                    <div className={`card styles.box styles.grid`}>
                        <div className='card-content'>
                { shoppingCart.map( scart =>  
                            <div className='media'>
                                <div className='media-content'>
                                    <p className='title is-4'>Status: <strong>{scart.statusCart}</strong></p>
                            { scart.storage.map( mecart => 
                                    <> 
                                    <div className='media-content'>
                                        <p className='subtitle is-6'>
                                            <span>SKU :
                                            {mecart.sku}
                                            </span>
                                        </p>
                                        <p className='subtitle is-6'>
                                            <span>Producto :
                                            {mecart.product_name}
                                            </span>
                                        </p>
                                        <p className='subtitle is-6'>
                                            <span>Total :
                                                <strong>{mecart.product_quantity}</strong>
                                            </span> 
                                        </p>
                                        <p>
                                            <span>Precio : 
                                                <strong> $ {mecart.price} .00</strong>
                                            </span>
                                        </p>
                                        <p>
                                            <span>Total a Pagar : 
                                                <strong> $ {mecart.total_price} .00</strong>
                                            </span>
                                        </p>
                                    </div>
                                    <div className='content'>
                                        <div className='media-content'>
                                            <button className='button is-info is-small' 
                                                    onClick={e => deleteCart(e, window.sessionStorage.getItem('email'), scart._id)}>
                                                    <span>Borrar product</span>
                                                    <span className='icon is-small is-rigth'>
                                                        <BsCartDash />
                                                    </span>
                                            </button>
                                            <span> </span>
                                            <button className='button is-info is-small' 
                                                    onClick={e => deleteCart(e, window.sessionStorage.getItem('email'), scart._id)}>
                                                    <span>Limpiar Carrito</span>
                                                    <span className='icon is-small is-rigth'>
                                                        <BsCartX />
                                                    </span>
                                            </button>
                                            <span> </span>
                                            <button className='button is-info is-small' 
                                                    onClick={e => updateCart(e, window.sessionStorage.getItem('email'). scart._id)}>
                                                    <span>Realizar Compra</span>
                                                    <span className='icon is-small is-rigth'>
                                                        <BsCartCheck />
                                                    </span>
                                            </button>
                                        </div>
                                    </div>
                                    </>
                            )}
                            </div>
                        </div>
                    ) }
                    </div>
                    </div>
            </div>
            </div>
        </section>
     )
}

export default ShowCart
