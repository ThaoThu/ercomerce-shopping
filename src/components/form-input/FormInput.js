import React from 'react'

export default function FormInput(props) {
    let { label, handleChange, otherProps } = props
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {
                label ? <label className={`form-input-label ${props.value.length ? 'shrink' : ''}`} >{label}</label> : null
            }

        </div>
    )
}
