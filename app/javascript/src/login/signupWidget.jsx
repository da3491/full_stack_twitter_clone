import React from 'react'
import { createUser, createSession } from '../../utils/API'

class SignupWidget extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { email, username, password } = this.state
        return (
            <form id='section__signup' className='border rounded p-3 bg-white' onSubmit={e => createUser(e, email, username, password).then(createSession(e, username, password))}>
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