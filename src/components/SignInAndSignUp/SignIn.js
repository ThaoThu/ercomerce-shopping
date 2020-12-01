import React, { useState } from 'react'
import FormInput from '../../components/form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import './signin.scss'
import { signInWithGG } from '../../firebase/firebase.utils'

export default function Signin() {
    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    let handleChange = (e) => {
        let { name, value } = e.target
        setValue({
            [name]: value
        })

    }
    let handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email </span>

            <form onSubmit={handleSubmit}>
                <FormInput className='form-input ' label='Email' name='email' type='email' value={value.email} onChange={handleChange} />

                <FormInput label='Password' className='form-input ' type='password' name='password' value={value.password} onChange={handleChange} />
                <div className='button'>

                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGG} isGGSignIn >Sign in with Google</CustomButton>
                </div>

            </form>
        </div>
    )
}
