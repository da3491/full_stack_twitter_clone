import React from 'react'
import ReactDOM from 'react-dom'
import { safeCredentials, handleErrors } from '../../utils/fetchHelper';

import LoginWidget from './loginWidget';
import SignupWidget from './signupWidget';

import './login.scss';

// post user
// get user/authenticated

class Login extends React.Component {
    state = {
        authenticated: false,
        show_login: true,
    }

    componentDidMount() {
        fetch('/api/authenticated')
            .then(handleErrors)
            .then(data => {
                this.setState({
                    authenticated: data.authenticated,
                })
            })
    }

    render() {
        const { authenticated, show_login } = this.state;
        return (
            <>
                <nav className='navbar navbar-expand navbar-light bg-light'>
                    <div className='container'>
                        <a href="/">
                            <i className="fa-brands fa-twitter fs-5 text-primary"></i>
                        </a>
                        <div className='collapse navbar-collapse'>
                            <div className='ms-auto'>
                                <label htmlFor='language'>language:</label>
                                <select className='ms-2' name="language" id='language_dropdown'>
                                    <option>Bahasa Malaya</option>
                                    <option>Dansk</option>
                                    <option>English</option>
                                    <option>Suomi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className='container row m-auto mt-5'>
                    <div className='col-6 d-flex flex-column justify-content-between'>
                        <div className='me-lg-5'>
                            <h1 className='mb-4'>Welcome to Twitter.</h1>
                            <p>Connect with your friends - and other fascinating people. Get in-the-moment updates on the things that interest you.  And watch events unfold, in real time, from every angle.</p>
                        </div>
                        <div>
                            <div>Hack Pacific - Backendium Twitter Project</div>
                            <a>Tweet and photo by @Hackpacific 3:20PM - 15 December 2016</a>
                        </div>
                    </div>
                    <div className='col-4'>
                        <LoginWidget />
                        <SignupWidget />
                    </div>
                </main>
            </>
        )
    }

}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Login />,
        document.body.appendChild(document.createElement('div')),
    )
})
