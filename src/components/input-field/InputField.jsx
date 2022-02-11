import React from 'react'
import './InputField.scss'

const InputField = (props) => {
    return (
        <div className='input-field'>
            <label htmlFor={props.name} >{props.title}</label>
            <input 
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange ? (e) => props.onChange(e) : null} 
            />
        </div>
    )
}

export default InputField
