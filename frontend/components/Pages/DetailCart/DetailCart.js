import axios from 'axios'
import  React, { useState, useEffect } from 'react'
import { MdEventBusy, MdOutlineAddShoppingCart } from 'react-icons/md'
import { BsSave } from 'react-icons/bs' 
import styles from './DetailCart.module.scss'
import Link from 'next/link'

const BACKEND_URL = 'http://localhost:5000'
console.log(BACKEND_URL)

const DetailCart = ( {sku} ) => {
     //console.log(`My SKU = ${sku}`)
     const [ productDetail, setProductDetail ] = useState([])
     const [ cart, setCart ] = useState([])

     const getProductById = () => {
         return axios.get(`${BACKEND_URL}/products/sku/${sku}`, {
            headers: {
                'Content-Type': 'application/json'
            }
         }).then ( data => {
             return data.data
         })
     }

     useEffect(() => {
         getProductById()
         .then( products => {
             setProductDetail(products)
             //console.log(products)
         })
     }, [])

     const handleAddProduct = ( evt, product ) => {
           evt.stopPropagation()
           const { id, sku, product_name, price }  = product
           const product_quantity = 1
           const total_price = product_quantity*price
           //console.log('tp',total_price,product_quantity)
           
           const myProduct = { id, sku, product_name, price, product_quantity, total_price }
           setCart(cart.concat(myProduct))
           //console.log(cart)
        
     }

     const saveCart = ( evt, idShoppingCart) => {
           evt.stopPropagation()
           //console.log(cart) 
        
           const sToken = window.sessionStorage.getItem('token');
           if ( ! sToken ) {
               return alert ('Debes abrir sesión para poder guardar un producto')
           }

           axios.post(`${BACKEND_URL}/products/carts`,{
               idShoppingCart,
               statusCart: "Orden",
               storage: cart
           },{
               headers: {
                   'Content-Type': 'application/json'
               }
           })
           .then(response => {
                 console.log(response.data)
                 alert('Producto agregado correctamente....')
                 //router.push('/home')
           })
     }

     return (
        <section className='section is-medium'>
            <div className='container'>
                <div className={styles.grid}>
            {   
                //productDetail.map( product => { 
                    <div className={`card styles.box styles.grid`}>
                        <div className='card-image'>
                            <figure className='image is-256x256'>
                                <img src={productDetail.image} alt='Placeholder image' />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-content'>
                                    <p className='title is-4'>{productDetail.product_name}</p>
                                    <p className='subtitle is-6'>{productDetail.description}</p>
                                    <p className='subtitle is-6'>SKU: <strong>{productDetail.sku}</strong></p>
                                    <p className='subtitle is-6'>Disponibles: <strong>{productDetail.quantity}</strong></p>
                                </div>
                            </div>
                            <div className='content'>
                                <span>Precio : 
                                   <strong> $ {productDetail.price} .00</strong>
                                </span>
                            </div>
                            <div className='content'>
                                <span>Calificación : 
                                   <strong> {productDetail.likes}
                                   </strong>
                                </span>
                                <span>
                                <img className = "image is-16x16" src="star_on.png" alt='likes' />
                                </span>
                            </div>
                            <div className='content'>
                                <span>Reseña : 
                                   <strong> {productDetail.review}</strong>
                                </span>
                            </div>
                            <div className='content'>
                                <button className='button is-small is-info' 
                                        onClick={e => handleAddProduct(e,productDetail)}>
                                    <span>Agregar</span>
                                    <span className='icon is-small is-rigth'>
                                        <MdOutlineAddShoppingCart />
                                    </span>
                                </button>
                                <span> </span>
                                <button className='button is-small is-info' onClick={e => saveCart(e, window.sessionStorage.getItem('email'))}>
                                    <span>Salvar Compra</span>
                                    <span className='icon is-small is-rigth'>
                                    <BsSave />
                                    </span>
                                </button>
                                <span> </span>
                                <Link href={{ pathname:'showCart', query: { email: `${window.sessionStorage.getItem('email')}` }}}>
                                      <button className='button is-small is-info'>
                                      <span>Ver Carrito</span>
                                      <span className='icon is-small is-rigth'>
                                        <MdOutlineAddShoppingCart />
                                      </span>
                                      </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                //})
            }
                </div>
            </div>
        </section>
     )
}

export default DetailCart
