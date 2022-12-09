import { handleErrors, safeCredentials } from './fetchHelper';

// create user
export const createUser = (e, email, username, password) => {
    if (e) { e.preventDefault(); }

    return fetch('/api/users', safeCredentials({
        method: 'POST',
        body: JSON.stringify({
            user: {
                email: email,
                username: username,
                password: password,
            }
        })
    }))
        .then(handleErrors)
        .then(data => {
            return data
        }).catch(error => {
            return error
        })
}

// create session
export const createSession = (e, username, password) => {
    if (e) { e.preventDefault(); }

    return fetch('/api/sessions', safeCredentials({
        method: 'POST',
        body: JSON.stringify({
            user: {
                username: username,
                password: password,
            }
        })
    }))
        .then(handleErrors)
        .then(data => {
            if (data.success) {
                const params = new URLSearchParams(window.location.search);
                const redirect_url = params.get('redirect_url') || '/';
                window.location = redirect_url;
            }
            return data
        }).catch(error => {
            console.log(error)
            return error
        })
}

// get authenticated user
export const getAuthUser = () => {
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

    return fetch('/api/sessions', safeCredentials({
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
    return fetch('/api/tweets', safeCredentials({
        method: 'GET',
    }))
        .then(handleErrors)
        .then(data => {
            return data
        })
        .catch(error => {
            console.log(error)
            return error
        })
}

// get tweets by user
export const getTweetsByUser = (username) => {
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
export const deleteTweet = (e, id) => {
    if (e) { e.preventDefault() }
    return fetch(`/api/tweets/${id}`, safeCredentials({
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