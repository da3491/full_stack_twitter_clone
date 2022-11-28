import React from 'react'
import { handleErrors, safeCredentials } from '../utils/fetchHelper'

class LoginWidget extends React.Component {
    state = {
        username: '',
        password: '',
        error: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
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
        const { username, password } = this.state
        return (
            <div id="section__login" className='border rounded mb-3 bg-white'>
                <form className='d-flex flex-column gap-3 m-3' onSubmit={this.login}>
                    <input name="username"
                        type="text"
                        className='w-100 form-control'
                        placeholder='Username'
                        value={username}
                        onChange={this.handleChange}
                        required></input>
                    <div className='form-group d-flex mw-100'>
                        <input name="password"
                            className='form-control'
                            placeholder='Password'
                            value={password}
                            onChange={this.handleChange}
                            required></input>
                        <button type="submit" className='btn btn-primary btn-sm text-nowrap ms-3'>Log in</button>
                    </div>
                    <div id='remember__me' className='d-flex'>
                        <label className='d-flex'>
                            <input type='checkbox' className='me-2' />
                            <span className='me-2'>Remember Me</span>
                        </label>
                        <a href="#" className='text-decoration-none'>Forgot password?</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginWidget;