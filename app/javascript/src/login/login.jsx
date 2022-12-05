import React from 'react'
import ReactDOM from 'react-dom'
import { safeCredentials, handleErrors } from '../../utils/fetchHelper';

import Nav from '../nav';
import LoginWidget from './loginWidget';
import SignupWidget from './signupWidget';

import './login.scss';

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
                <Nav />
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
