import React from 'react'
import './custom-button.scss'

export default function CustomButton(props) {
    let { children, isGGSignIn } = props
    return (
        <button className={`${isGGSignIn ? 'google-sign-in' : ''} custom-button`} onClick={props.onClick}>
            {children}
        </button>
    )
}
