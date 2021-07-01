import React from 'react'

export default function Button({ btnStyle, btnText }) {
    return (
        <button className={`btn ${btnStyle === 'primary' ? 'btn-primary' : 'btn-secondary'}`}>{btnText}</button>
    )
}
