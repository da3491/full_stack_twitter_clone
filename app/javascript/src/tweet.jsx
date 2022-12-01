import React from 'react'
import { handleErrors, safeCredentials } from '../utils/fetchHelper';


const Tweet = ({ props, authUser }) => {
    const deleteTweet = () => {
        fetch(`/api/tweets/${props.id}`, safeCredentials({
            method: 'DELETE',
        }))
            .then(handleErrors)
            .then(data => {
                return data
            })
            .catch(error => {
                console.log(error)
            })
    }
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
                        {authUser === props.username ? <button className='btn border-none m-0 p-0 ms-auto text-primary' onClick={deleteTweet}>Delete</button> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tweet;