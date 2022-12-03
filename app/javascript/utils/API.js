import { handleErrors, safeCredentials } from './fetchHelper';

// get authenticated user
export const getAuthUser = () => {
    // if (e) { e.preventDefault(); }

    return fetch('/api/authenticated', safeCredentials({
        method: 'GET',
    }))
        .then(handleErrors)
        .then(data => {
            return data
        })
        .catch(error => {
            return error
        })
}

// delete session
export const endSession = (e) => {
    if (e) { e.preventDefault(); }

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
            return error
        })
}

// get tweets
export const getTweets = () => {
    // if (e) { e.preventDefault(); }
    return fetch('/api/tweets', safeCredentials({
        method: 'GET',
    }))
        .then(handleErrors)
        .then(data => {
            return data
        })
        .catch(error => {
            return error
        })
}

// get tweets by user
export const getTweetsByUser = (username) => {
    // if (e) { e.preventDefault() } 
    return fetch(`/api/users/${username}/tweets`, safeCredentials({
        method: 'GET',
    }))
        .then(handleErrors)
        .then(data => {
            return data
        })
        .catch(error => {
            return error
        })
}

// create tweet
export const createTweet = (e, message) => {
    if (e) { e.preventDefault() }
    return fetch('/api/tweets', safeCredentials({
        method: 'POST',
        body: JSON.stringify({
            tweet: {
                message: message,
            }
        })
    }))
        .then(handleErrors)
        .then(data => {
            console.log('successfully posted')
            return data
        })
        .catch(error => {
            return error
        })
}

// delete tweet
export const deleteTweet = (id) => {
    fetch(`/api/tweets/${id}`, safeCredentials({
        method: 'DELETE',
    }))
        .then(handleErrors)
        .then(data => {
            console.log('deleted post')
            return data
        })
        .catch(error => {
            return error
        })
}