import axios from 'axios'

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
})

export const dataToUpdate = payload => ({
    type: 'DATA_TO_UPDATE',
    payload
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

export const setDataTable = payload => ({
    type: 'SET_DATA_TABLE',
    payload
})

export const getDataTable = payload => ({
    type: 'GET_ALL_FORMS',
    payload
})

export const loginUser = ({ email, password }, redirectUrl) => {
    return async (dispatch) => {
        try {
            let response = await axios({
                url: 'https://damp-tor-32976.herokuapp.com/api/auth/sign-in',
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
                document.cookie = `email=${data.user.email}`
                document.cookie = `name=${data.user.name}`
                document.cookie = `id=${data.user.id}`
                document.cookie = `token=${data.token}`

                dispatch(loginRequest(data))
                window.location.href = redirectUrl
            }
        }
        catch (err) {
            dispatch(setError(err))
        }
    }
}


export const registerUser = (payload, redirectUrl) => {
    return async (dispatch) => {
        try{
            let response = await axios.post('https://damp-tor-32976.herokuapp.com/api/auth/sign-up', payload)
            if(response.statusText) {
                dispatch(registerUser(response.data))
                window.location.href = redirectUrl
            }
        }
        catch(err){
            console.log(err)
        }
    }
}

export const createOneForm = (payload, redirectUrl, token) => {
    return async (dispatch) => {
        try {
            let response = await axios('https://damp-tor-32976.herokuapp.com/api/forms/createForm', {
                method: 'post',
                headers: {  
                    "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${token}`
                },
                data: payload,
            })

            if(response.statusText){
                dispatch(setDataTable(response.data))
                setTimeout(() => {
                    window.location.href = redirectUrl
                }, 5000)
            }
        }
        catch(err){
            dispatch(onLogout())
        }
    }
}

export const getForms = (token, email) => {
    return async(dispatch) => {
        try{
            let response = await axios('https://damp-tor-32976.herokuapp.com/api/forms', {
                method: 'post',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${token}`
                },
                data: {email}
            })

            if(response.statusText){
                const { data } = response
                dispatch(getDataTable(data))
            }
        }
        catch(err){
            console.log(err)
            dispatch(onLogout())
        }
    }
}

export const deleteForm = (token, id) => {
    return async (dispatch) => {
        console.log(id)
        try {
            let response = await axios(`https://damp-tor-32976.herokuapp.com/api/forms/${id}`, {
                method: 'delete',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${token}`
                },
            })

            console.log(response)
        }
        catch(err){
            console.log(err)
        }
    }
}