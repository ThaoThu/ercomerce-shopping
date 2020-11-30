import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/logo.svg'
import './header.scss'
export default function Header() {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>

                <img src={logo} alt='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shops</Link>
                <Link className='option' to='/contact'>Contact</Link>
            </div>

        </div>
    )
}
