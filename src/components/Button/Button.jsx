import React from 'react'
import './Button.css'

function Button(props) {

    // Destructuring Props
    const { buttonText, onClick } = props

    return (
        <button onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default Button