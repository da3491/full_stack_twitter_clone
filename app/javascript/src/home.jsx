import React from 'react'
import ReactDOM from 'react-dom'

import './home.scss';

const Home = () => (
  <>
    <nav className='navbar navbar-expand navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href="#">Logo</a>
        <div className='collapse navbar-collapse'>
          <label htmlFor='language'>language:</label>
          <select name="language" id='language_dropdown'>
            <option>Bahasa Malaya</option>
            <option>Dansk</option>
            <option>English</option>
            <option>Suomi</option>
          </select>
        </div>
      </div>
    </nav>
    <main className='container row m-auto mt-5'>
      <div className='col-7 d-flex flex-column justify-content-between'>
        <div className='me-lg-5'>
          <h1 className='mb-4'>Welcome to Twitter.</h1>
          <p>Connect with your friends - and other fascinating people. Get in-the-moment updates on the things that interest you.  And watch events unfold, in real time, from every angle.</p>
        </div>
        <div>
          <div>Hack Pacific - Backendium Twitter Project</div>
          <a>Tweet and photo by @Hackpacific 3:20PM - 15 December 2016</a>
        </div>
      </div>
      <div className='col-5'>
        <div id="section__id" className='border rounded mb-3'>
          <div className='d-flex flex-column gap-3 m-3'>
            <input className='w-100' placeholder='Username'></input>
            <div className='d-flex justify-content-between'>
              <input className='flex-shrink-1 ' placeholder='Password'></input>
              <button className='btn btn-primary btn-sm text-nowrap'>Log in</button>
            </div>
            <div className='d-flex'>
              <div className='d-flex'>
                <input type='checkbox' className='me-2' />
                <div className='me-2'>Remember Me</div>
              </div>
              <a href="#" className='text-decoration-none'>Forgot password?</a>
            </div>
          </div>
        </div>
        <div id='section__signup' className='border rounded p-3'>
          <div>
            <strong className='pe-2'>New to Twitter?</strong>
            <a href="#" className='text-decoration-none text-secondary'>Sign up</a>
          </div>
          <div className='input-group'>
            <input className='my-2 w-100 form-control' placeholder='Username'></input>
            <input className='my-2 w-100 form-control' placeholder="Email"></input>
            <input className='my-2 w-100 form-control' placeholder='Password'></input>
          </div>
          <button className='btn btn-warning fw-bold'>Sign up for Twitter</button>
        </div>
        <div></div>
      </div>
    </main>
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
