import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { FaDyalog, FaUserAlt, FaUserCheck, FaRegAddressBook } from 'react-icons/fa'
import { AiFillLock } from 'react-icons/ai'
import { IoStorefront } from 'react-icons/io'
import { GiSaveArrow, GiSmartphone } from 'react-icons/gi'
import { MdOutlineInput, MdEmojiPeople } from 'react-icons/md'

import styles from './RegisterForm.module.scss'
    
const BACKEND_URL = 'http://localhost:5000'
console.log(BACKEND_URL)

export default function LoginForm() {
    const [ formData, setFormData ] = useState({})
    //const [ isLoading, setIsLoading ] = useState(false)
    //const [ isError, setIsError ] = useState(false)
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
        
        //setIsLoading(true)

        axios.post(`${BACKEND_URL}/products/users`,{
            firstname: formData.firstname,
            lastname: formData.lastname,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zipcode,
            phonenumber: formData.phonenumber,
            profile: 'general',
            usertype: 'initial'
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
              console.log(response.data)
              alert('Usuario agregado correctamente....')
              router.push('/home')
        })
        /*.catch( err => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })*/
    }
    return (
        <div className={`section box ${styles.register}`}>
            <div className='content'>
                <h4>Registro</h4>   
                <form onSubmit={e => handleSubmit(e)}>
                    <div className='field'>
                        <p className='control has-icons-left has-icons-right'>
                            <input
                                 onChange={e => handleOnChange(e)}
                                 name='firstname' className='input' type='text' placeholder='First Name' />
                            <span className='icon is-small is-left'>
                                <MdEmojiPeople />
                            </span>
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input 
                                 onChange={e => handleOnChange(e)}
                                 name='lastname' className='input' type='text' placeholder='Last Name' />
                            <span className='icon is-small is-left'>
                                <MdEmojiPeople />
                            </span>
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input 
                                 onChange={e => handleOnChange(e)}
                                 name='username' className='input' type='text' placeholder='UserName' />
                            <span className='icon is-small is-left'>
                                <FaUserCheck />
                            </span>
                        </p>
                    </div>
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
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input 
                                 onChange={e => handleOnChange(e)}
                                 name='address' className='input' type='text' placeholder='Address' />
                            <span className='icon is-small is-left'>
                                <FaRegAddressBook />
                            </span>
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input 
                                 onChange={e => handleOnChange(e)}
                                 name='city' className='input' type='text' placeholder='City' />
                            <span className='icon is-small is-left'>
                                <FaRegAddressBook />
                            </span>
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input 
                                 onChange={e => handleOnChange(e)}
                                 name='state' className='input' type='text' placeholder='State' />
                            <span className='icon is-small is-left'>
                                <FaRegAddressBook />
                            </span>
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input 
                                 onChange={e => handleOnChange(e)}
                                 name='zipcode' className='input' type='text' placeholder='ZipCode' />
                            <span className='icon is-small is-left'>
                                <FaRegAddressBook />
                            </span>
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input 
                                 onChange={e => handleOnChange(e)}
                                 name='phonenumber' className='input' type='text' placeholder='Phone Number' />
                            <span className='icon is-small is-left'>
                                <GiSmartphone />
                            </span>
                        </p>
                    </div>

                    <div className='field'>
                        <p className='control'>
                            <button className='button is-medium is-fullwidth is-primary'>
                                <span className='icon'>
                                    <GiSaveArrow />
                                </span>
                                <span>Guardar</span>
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
