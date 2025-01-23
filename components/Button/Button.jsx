import React from 'react'

function Button(props) {

    // Destructuring Props
    const { buttonText, onClickFunction } = props

    return (
        <button onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default Button