import React from 'react'
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class SignupWidget extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    signup = (e) => {
        if (e) { e.preventDefault(); }
        this.setState({
            error: '',
        });
        console.log('clicked')

        fetch('/api/users', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                }
            })
        }))
            .then(handleErrors)
            .then(data => {
                console.log(success)
                if (data.user) {
                    this.login()
                }
            }).catch(error => {
                this.setState({
                    error: 'Could not sign up.',
                })
            })
    }

    login = (e) => {
        if (e) { e.preventDefault(); }
        this.setState({
            error: '',
        });


        fetch('/api/sessions', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                }
            })
        }))
            .then(handleErrors)
            .then(data => {
                if (data.success) {
                    console.log(success)
                    const params = new URLSearchParams(window.location.search);
                    const redirect_url = params.get('redirect_url') || '/';
                    window.location = redirect_url;
                }
            }).catch(error => {
                this.setState({
                    error: 'Could not log in.',
                })
            })
    }

    render() {
        const { email, username, password, error } = this.state
        return (
            <form id='section__signup' className='border rounded p-3 bg-white' onSubmit={this.signup}>
                <div>
                    <strong className='pe-2'>New to Twitter?</strong>
                    <a href="#" className='text-decoration-none text-secondary'>Sign up</a>
                </div>
                <div className='input-group'>
                    <input name="username" className='my-2 w-100 form-control' placeholder='Username' value={username} onChange={this.handleChange}></input>
                    <input name="email" className='my-2 w-100 form-control' placeholder="Email" value={email} onChange={this.handleChange}></input>
                    <input name="password" className='my-2 w-100 form-control' placeholder='Password' value={password} onChange={this.handleChange}></input>
                </div>
                <div className='d-flex'>
                    <button id='signup__button' type="submit" className='btn btn-warning fw-bold ms-auto'>Sign up for Twitter</button>
                </div>
            </form>
        )
    }
}

export default SignupWidget;