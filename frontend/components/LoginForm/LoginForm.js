import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { FaDyalog, FaUserAlt } from 'react-icons/fa'
import { AiFillLock } from 'react-icons/ai'
import { IoStorefront } from 'react-icons/io'

import styles from './LoginForm.module.scss'
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons'

const BACKEND_URL = 'http://localhost:5000'
console.log(BACKEND_URL)

export default function LoginForm() {
    const [ formData, setFormData ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const [ isLogin, setIsLogin] = useState(false)

    const router = useRouter()

    const handleOnChange = (event) => {
          setFormData({
              ...formData,
              [event.target.name]: event.target.value
          })
    }

    const handleSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        
        setIsLoading(true)

        axios.post(`${BACKEND_URL}/products/auth/login`,{
            email: formData.email,
            password: formData.password
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
              //console.log(response.data)
              window.sessionStorage.setItem('token', response.data?.token)
              window.sessionStorage.setItem('email', response.data?.email)
              router.push('/home')
        })
        .catch( err => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }
    return (
         
        <div className={`section box ${styles.login}`}>
            <div className='content'>
                <h4>Login</h4>   
                <form onSubmit={e => handleSubmit(e)}>
                
                    <div className='field'>
                        <p className='control has-icons-left has-icons-right'>
                            <input
                                 onChange={e => handleOnChange(e)}
                                 name='email' className='input' type='email' placeholder='Email' />
                            <span className='icon is-small is-left'>
                                <FaUserAlt />
                            </span>
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input 
                                 onChange={e => handleOnChange(e)}
                                 name='password' className='input' type='password' placeholder='Password' />
                            <span className='icon is-small is-left'>
                                <AiFillLock />
                            </span>
                        </p>
                    </div>
                    { isError && 
                        <div className='notification is-danger is-light'>
                            <button className='delete'></button>
                            Usuario o contraseña incorrectos ...
                        </div>
                    }
                    <div className='field'>
                        <p className='control'>
                            <button className={`button is-medium is-fullwidth is-primary ${isLoading && 'is-loading'}`}>
                                <span className='icon'>
                                    <FiLogIn />
                                </span>
                                <span>Ingresar</span>
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>        
    )
}
