import React from 'react'
import PropTypes from 'prop-types'
import "./Button.scss";

const Button = props => {
    return (
        <button
            className={`btn ${props.className}`} 
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    )
}

export const OutlineButton = props => {
    return (
        <Button
            className={`btn-outline ${props.className}`} 
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    )
}

export const ButtonForm = props => {
    return ( 
        <button 
            className={`btn btn-form ${props.className}`}
            type={props.type}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
