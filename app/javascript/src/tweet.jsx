import React from 'react'
import { deleteTweet } from '../utils/API';

const Tweet = ({ props, authUser, reloadPage }) => {
    return (
        <>
            <div className='col border-top border-bottom m-0 bg-white'>
                <div className='p-3'>
                    <div className='d-flex align-items-start align-text-center'>
                        <div className='fw-bold me-2'>{props.username}</div>
                        <a className='text-secondary text-decoration-none' href={`/@${props.username}`}>@{props.username}</a>
                    </div>
                    <p>{props.message}</p>
                    <div className='d-flex'>
                        {authUser === props.username ? <button className='btn border-none m-0 p-0 ms-auto text-primary' onClick={e => { deleteTweet(props.id); reloadPage() }}>Delete</button> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tweet;