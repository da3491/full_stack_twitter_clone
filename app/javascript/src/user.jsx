import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { getTweetsByUser, getAuthUser, endSession, createTweet, getTweets } from '../utils/API';

import Tweet from './tweet'

import './user.scss'

const username = window.location.pathname.replace('/@', '')

const User = () => {
    const [tweets, setTweets] = useState([])
    const [authUser, setAuthUser] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTweetsByUser(username).then(data => setTweets(data.tweets))
        getAuthUser().then(data => setAuthUser(data.username))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }

    const handleReload = () => {
        getTweetsByUser().then(data => setTweets(data.tweets))
    }


    return (
        <>
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
            <main className='container row gap-3 justify-content-center'>
                <div className='col-6 p-0 my-3 rounded'>
                    {authUser === username ?
                        <form id='post-tweet' className='p-3' value={message} onSubmit={e => {
                            createTweet(e, message)
                            setMessage('')
                            handleReload()
                        }}>
                            <input type="text"
                                className='w-100 mb-3 form-control'
                                placeholder="What's happening?"
                                onChange={handleChange} />
                            <div className='d-flex align-items-center justify-content-end'>
                                <div className='pe-3'>140</div>
                                <button type='submit' className='btn btn-sm btn-primary'>Tweet</button>
                            </div>
                        </form> : ''}
                    <div id='tweet-feed'>
                        {tweets.map(tweet => {
                            return <Tweet key={tweet.id} props={tweet} authUser={authUser} reloadPage={handleReload} />
                        })}
                    </div>
                </div>
                <div className='col-4 my-3'>
                    <div className='border p-3 bg-white rounded'>
                        <div>
                            <h4 className='mb-0'>{username}</h4>
                            <p className='text-secondary'>@{username}</p>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <span className='text-secondary'>Tweets</span>
                                <div className='text-primary'>{tweets.length}</div>
                            </div>
                            <div className='col-4'>
                                <span className='text-secondary'>Following</span>
                                <div className='text-primary'>0</div>
                            </div>            <div className='col-4'>
                                <span className='text-secondary'>Followers</span>
                                <div className='text-primary'>0</div>
                            </div>
                        </div>
                    </div>
                    <div className='col border my-3 bg-white rounded'>
                        <div className='p-3'>
                            <div className='d-flex align-items-center'>
                                <div className='fs-4 text-secondary'>Trends</div>
                                <div className='mx-2 mb-1'>.</div>
                                <div className='text-primary'>Change</div>
                            </div>
                            <ul className='text-decoration-none list-unstyled'>
                                <li className='text-primary'>#<a>Hongkong</a></li>
                                <li className='text-primary'>#<a>Ruby</a></li>
                                <li className='text-primary'>#<a>foobarbaz</a></li>
                                <li className='text-primary'>#<a>rails</a></li>
                                <li className='text-primary'>#<a>API</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <User />,
        document.body.appendChild(document.createElement('div')),
    )
})