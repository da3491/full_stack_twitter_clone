import React from 'react'
import ReactDOM from 'react-dom'
import { handleErrors, safeCredentials } from '../utils/fetchHelper';

import Tweet from './tweet'

import './home.scss';

class Home extends React.Component {
  state = {
    tweets: [],
    authUser: '',
    message: '',
    loading: true,
    error: ''
  }

  componentDidMount() {
    this.getTweets()
    this.getAuthUser()
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      message: e.target.value
    })
  }

  getTweets = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch('/api/tweets', safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
      .then(data => {
        this.setState({
          tweets: data.tweets,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({ error: 'Could not get tweets.' })
      })
  }

  getAuthUser = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch('/api/authenticated', safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
      .then(data => {
        this.setState({
          authUser: data.username,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({ error: 'Could not get user.' })
      })
  }

  endSession = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });


    fetch('/api/sessions', safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          console.log('successfully ended session')
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/login';
          window.location = redirect_url;
        }
      }).catch(error => {
        this.setState({ error: 'Could not log out.' })
      })
  }

  createTweet = (e) => {
    this.setState({
      error: '',
    });

    fetch('/api/tweets', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        tweet: {
          message: this.state.message,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        this.setState({ error: 'Could not post tweet.' })
      })
  }

  render() {
    const { tweets, authUser, loading } = this.state
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
                <span role='button' className='text-decoration-none' onClick={this.endSession}>logout</span>
              </div>
            </div>
          </div>
        </nav>
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
                  <div className='text-primary'>4</div>
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
            <form id='post-tweet' className='p-3' onSubmit={this.createTweet}>
              <input type="text"
                className='w-100 mb-3 form-control'
                placeholder="What's happening?"
                onChange={this.handleChange} />
              <div className='d-flex align-items-center justify-content-end'>
                <div className='pe-3'>140</div>
                <button type='submit' className='btn btn-sm btn-primary'>Tweet</button>
              </div>
            </form>
            <div id='tweet-feed'>
              {tweets.map(tweet => {
                return <Tweet key={tweet.id} props={tweet} authUser={authUser} />
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
