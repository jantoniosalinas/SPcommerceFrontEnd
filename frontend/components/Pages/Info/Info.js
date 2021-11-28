import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './Info.module.scss'

const BACKEND_URL = 'http://localhost:5000'
console.log(BACKEND_URL)

const Info = ( {email} ) => {
    const [ personalInfo, setPersonalInfo ] = useState([])
    const router = useRouter()
    const sToken = window.sessionStorage.getItem('token');
    if ( ! sToken && ! email ) {
         return null         
    }

    const getInfo = () => {
        return axios.get(`${BACKEND_URL}/products/getInfo/${email}`, {
           headers: {
               'Content-Type': 'application/json'
           }
        }).then ( data => {
            return data.data
        })
    }

    useEffect(() => {
        getInfo()
        .then( info => {
            setPersonalInfo(info)
        })
    }, [])


    return (
        <section className='section is-medium'>
            <div className='container'>
                <div className={styles.grid}>
                <h1 className={styles.h1}>Mis Datos</h1>
                { personalInfo.map( mydata =>  
                    <div className={`card styles.box styles.grid`}>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-content'>
                                    <p className='subtitle is-6'>Nombre :
                                        <strong> {mydata.firstname} {mydata.lastname}</strong>
                                    </p>
                                    <p className='subtitle is-6'>Usuario :
                                        <strong> {mydata.username}</strong>
                                    </p>
                                    <p className='subtitle is-6'>Email :
                                        <strong> {mydata.email}</strong>
                                    </p>
                                    <p className='subtitle is-6'>Dirección :
                                        <strong> {mydata.address}, {mydata.city}, {mydata.state}, {mydata.zipcode}</strong>
                                    </p>
                                    <p className='subtitle is-6'>Teléfono :
                                        <strong> {mydata.phonenumber}</strong>
                                    </p>
                                    <p className='subtitle is-6'>Usuario Categoría :
                                        <strong> {mydata.usertype}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </section>
    )
}

export default Info
