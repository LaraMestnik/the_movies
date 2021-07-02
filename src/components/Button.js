import React from 'react'

export default function Button({ btnStyle, btnText, size }) {
    let btnSize = "btn-small"
    if (size === "medium") {
        btnSize = "btn-medium"
    }
    if (size === "large") {
        btnSize = "btn-large"
    }
    return (
        <button className={`btn ${btnStyle === 'primary' ? 'btn-primary' : 'btn-secondary'} ${btnSize}`}>{btnText}</button>
    )
}
