import axios from 'axios'
import  React, { useState, useEffect } from 'react'
import { MdEventBusy, MdOutlineAddShoppingCart } from 'react-icons/md' 
import styles from './DetailCart.module.scss'

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
           const { id, sku, product_name, price, quantity }  = product
           console.log('tp',total_price,quantity)
           const total_price = quantity*price
           console.log(total_price)
           const myProduct = {id, sku, product_name, price, quantity, total_price }
           setCart(cart.concat(myProduct))
           console.log(cart)
     }

     const saveCart = ( evt, idShoppingCart) => {
        console.log(cart) 
        evt.stopPropagation()
        axios.post(`${BACKEND_URL}/products/carts`,{
            idShoppingCart,
            statusCart:1,
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

     /*    axios({
             url: `${BACKEND_URL}/products/carts`,
             method: 'post',
             headers: {
                'Content-Type': 'application/json'
             },
             data: {
                 idShoppingCart,
                 statusCart: 1,
                 storage: cart
             } 
         })
         .then( r => {
             console.log(r.data)
         })
         .catch( err => {
             console.error(err)
         })
       */
     }

     return (
        <section className='section is-medium'>
            <div className='container'>
                <div className={styles.grid}>
            {   
                //productDetail.map( product => { 
                    <div className={`card styles.box styles.grid`}>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src={productDetail.image} alt='Placeholder image' />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-content'>
                                    <p className='title is-4'>{productDetail.product_name}</p>
                                    <p className='subtitle is-6'>{productDetail.description}</p>
                                    <p className='subtitle is-6'>{productDetail.sku}</p>
                                    <p className='subtitle is-6'>Disponibles: {productDetail.quantity}</p>
                                </div>
                            </div>
                            <div className='content'>
                                <span>Precio : 
                                   <strong> $ {productDetail.price} .00</strong>
                                </span>
                            </div>
                            <div className='content'>
                                <span>Calificación : 
                                   <strong> {productDetail.likes}</strong>
                                </span>
                            </div>
                            <div className='content'>
                                <span>Reseña : 
                                   <strong> {productDetail.review}</strong>
                                </span>
                            </div>
                            <div className='content'>
                                <button className='button is-primary' 
                                        onClick={e => handleAddProduct(e,productDetail)}>
                                    <span className='icon is-small is-left'>
                                        <MdOutlineAddShoppingCart />
                                    </span>
                                     Agregar
                                </button>
                                <span> </span>
                                <button className='button is-primary' onClick={e => saveCart(e, window.sessionStorage.getItem('email'))}>Salvar Compra</button>
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
