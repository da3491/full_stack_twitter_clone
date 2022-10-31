import React from 'react'
import ReactDOM from 'react-dom'
import './login.jsx'

import './home.scss';

const Home = () => (
  <Login></Login>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
