import axios from 'axios'

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
})

export const setError = payload => ({
    type: 'SET_ERROR',
    payload
})

export const setLogout = payload => ({
    type: 'DESTROY_SESSION',
    payload
})

export const onLogout = () => {
    return dispatch => {
        dispatch(setLogout({}))
        window.localStorage.removeItem('persist:root')
        window.location.href = '/login'
    }
}

export const loginUser = ({ email, password }, redirectUrl) => {
    return async (dispatch) => {
        try {
            let response = await axios({
                url: '/api/auth/sign-in',
                method: 'post',
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                auth: {
                    username: email,
                    password,
                }
            })
            if(response.statusText){
                const { data } = response
                console.log(data)
                document.cookie = `email=${data.user.email}`
                document.cookie = `name=${data.user.name}`
                document.cookie = `id=${data.user.id}`

                dispatch(loginRequest(data.user))
                // window.location.href = redirectUrl
            }
        }
        catch (err) {
            dispatch(setError(err))
        }
    }
}


export const registerUser = (payload, redirectUrl) => {
    return async (dispatch) => {
        console.log(payload)
        try{
            let response = await axios.post('https://damp-tor-32976.herokuapp.com/api/auth/sign-up', payload)
            console.log(response)
            if(response.statusText) {
                dispatch(registerUser(response.data))
                window.location.href = redirectUrl
            }
        }
        catch(err){

        }
    }
}