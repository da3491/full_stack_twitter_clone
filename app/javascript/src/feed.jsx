import React from 'react'
import ReactDOM from 'react-dom';

const Feed = () => {
    return (
        <h1>The feed page</h1>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Feed />,
        document.body.appendChild(document.createElement('div')),
    )
})
