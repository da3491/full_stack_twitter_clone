import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { getAuthUser, getTweets, createTweet, getTweetsByUser } from '../utils/API';

import Tweet from './tweet'
import Nav from './nav';

import './home.scss';

class Home extends React.Component {
  state = {
    tweets: [],
    authUser: '',
    userTweetCount: '',
    message: ''
  }

  componentDidMount() {
    getAuthUser().then(data => this.setState({ authUser: data.username }))
    getTweets().then(data => this.setState({ tweets: data.tweets }))
      .then(this.getUsersTweetCount)
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  handleReload = () => {
    getTweets().then(data => this.setState({ tweets: data.tweets }))
  }

  getUsersTweetCount = () => {
    const usersTweets = this.state.tweets.filter(tweet => tweet.username === this.state.authUser)
    this.setState({ userTweetCount: usersTweets.length })
  }

  render() {
    const { tweets, authUser, userTweetCount, message } = this.state;
    return (
      <>
        <Nav />
        <main className='container row gap-3 justify-content-center'>
          <div className='col-4 my-3'>
            <div className='border p-3 bg-white rounded'>
              <div>
                <h4 className='mb-0'>{authUser}</h4>
                <p className='text-secondary'>@{authUser}</p>
              </div>
              <div className='row'>
                <div className='col-4'>
                  <span className='text-secondary'>Tweets</span>
                  <div className='text-primary'>{userTweetCount}</div>
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
          <div className='col-6 p-0 my-3 rounded'>
            <form id='post-tweet' className='p-3' onSubmit={e => {
              createTweet(e, message)
                .then(this.handleReload)
              this.setState({ message: '' })
            }
            }>
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
            </form>
            <div id='tweet-feed'>
              {tweets.map(tweet => {
                return <Tweet key={tweet.id} props={tweet} authUser={authUser} reloadPage={this.handleReload} />
              })}
            </div>
          </div>
        </main>
      </>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
