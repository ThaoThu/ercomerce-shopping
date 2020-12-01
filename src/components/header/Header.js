import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/logo.svg'
import './header.scss'
import { auth } from '../../firebase/firebase.utils'

export default function Header({ currentUser }) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>

                <img src={logo} alt='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shops</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {
                    currentUser ? <div className='option' onClick={() => auth.signOut()}>Sign out</div> : <Link className='option' to='/sign-in'>Sign in</Link>
                }

            </div>

        </div>
    )
}
