import React from 'react'


export default function Button({ className, children, handleClick }) {

    return (
        <button onClick={handleClick} className={`btn ${className}`}>{children}</button>
    )
}
