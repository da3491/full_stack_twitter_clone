import React from 'react'
import ReactDOM from 'react-dom';

const Tweets = () => {
    return (
        <>
            <nav>
                <div>logo</div>
                <div>
                    <input placeholder='Search for...'></input>
                    <button>Go!</button>
                    <div>username</div>
                </div>
            </nav>
            <div id='section__userstats'>
                <h1>username</h1>
                <div>@username</div>
                <div>
                    <div>
                        <div>TWEETS</div>
                        <div>0</div>
                    </div>
                    <div>
                        <div>FOLLOWING</div>
                        <div>0</div>
                    </div>
                    <div>
                        <div>FOLLOWERS</div>
                        <div>0</div>
                    </div>
                </div>
            </div>
            <div id='section__trending'>
                <div>
                    <h2>Trends</h2>
                    <a href="#">change</a>
                </div>
                <div href="#">#HongKong</div>
                <div href="#">#Ruby</div>
                <div href="#">#foobarbaz</div>
                <div href="#">#rails</div>
                <div href="#">#API</div>
            </div>
            <form>
                <input placeholder="What's happening?">
                </input>
                <div>
                    <div>Upload image</div>
                    <div>140</div>
                    <button>Tweet</button>
                </div>
            </form>
            <div>
                <div>Feed goes here</div>
            </div>
        </>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Tweets />,
        document.body.appendChild(document.createElement('div')),
    )
})
