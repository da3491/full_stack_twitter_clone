import React from 'react';

const Login = () => {
    return (
        <>
            <nav className='navbar navbar-expand navbar-light bg-light'>
                <div className='container'>
                    <a className='navbar-brand' href="#">Logo</a>
                    <div className='collapse navbar-collapse'>
                        <label for='language'>language:</label>
                        <select name="language" id='language_dropdown'>
                            <option>Bahasa Malaya</option>
                            <option>Dansk</option>
                            <option>English</option>
                            <option>Suomi</option>
                        </select>
                    </div>
                </div>
            </nav>
            <main>
                <div>
                    <h1>Welcome to Twitter.</h1>
                    <p>Connect with your friends - and other fascinating people. Get in-the-moment updates on the things that interest you.  And watch events unfold, in real time, from every angle.</p>
                    <div>
                        <div>Hack Pacific - Backendium Twitter Project</div>
                        <a>Tweet and photo by @Hackpacific 3:20PM - 15 December 2016</a>
                    </div>
                </div>
                <div>
                    <div id="section__id">
                        <input>Username</input>
                        <div>
                            <input>Password</input>
                            <button>Log in</button>
                        </div>
                        <div>
                            <checkbox></checkbox>
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                    <div id='section__signup'>
                        <div>
                            <strong>New to Twitter?</strong>
                            <a href="#">Sign up</a>
                        </div>
                        <div>
                            <input>Username</input>
                            <input>Email</input>
                            <input>Password</input>
                        </div>
                        <button>Sign up for Twitter</button>
                    </div>
                    <div></div>
                </div>
            </main>
        </>
    )
}

export default Login;