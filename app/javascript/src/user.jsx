import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { getTweetsByUser, getAuthUser, createTweet } from '../utils/API';

import Tweet from './tweet'
import Nav from './nav';

import './user.scss'

const username = window.location.pathname.replace('/@', '')

class User extends React.Component {
    state = {
        tweets: [],
        authUser: '',
        message: '',
    }

    componentDidMount() {
        getTweetsByUser(username).then(data => this.setState({ tweets: data.tweets }))
        getAuthUser().then(data => this.setState({ authUser: data.username }))
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleReload = () => {
        getTweetsByUser(username).then(data => this.setState({ tweets: data.tweets }))
    }

    render() {
        const { tweets, authUser, message } = this.state;
        return (
            <>
                <Nav />
                <main className='container row gap-3 justify-content-center'>
                    <div className='col-6 p-0 my-3 rounded'>
                        {authUser === username ?
                            <form id='post-tweet' className='p-3' onSubmit={e => {
                                createTweet(e, message)
                                    .then(this.handleReload)
                                this.setState({ message: '' })
                            }}>
                                <input name="message"
                                    type="text"
                                    className='w-100 mb-3 form-control'
                                    placeholder="What's happening?"
                                    value={message}
                                    onChange={this.handleChange} />
                                <div className='d-flex align-items-center justify-content-end'>
                                    <div className='pe-3'>140</div>
                                    <button type='submit' className='btn btn-sm btn-primary'>Tweet</button>
                                </div>
                            </form> : ''}
                        <div id='tweet-feed'>
                            {tweets.map(tweet => {
                                return <Tweet key={tweet.id} props={tweet} authUser={authUser} reloadPage={this.handleReload} />
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

}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <User />,
        document.body.appendChild(document.createElement('div')),
    )
})