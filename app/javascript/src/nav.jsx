import React from 'react'
import { endSession } from '../utils/API';

import './nav.scss'

const Nav = () => {
    return (
        <nav className='navbar navbar-expand navbar-light bg-light'>
            <div className='container'>
                <a href='/'>
                    <i className="fa-brands fa-twitter fs-5 text-primary"></i>
                </a>
                <div className='collapse navbar-collapse'>
                    <div className='input-group ms-auto'>
                        <input type='text' className='form-control' placeholder='Search for...' />
                        <span className='input-group-text'>Go!</span>
                    </div>
                    <div className='text-secondary ms-5'>
                        <span role='button' className='text-decoration-none' onClick={e => endSession(e)}>logout</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;