import axios from 'axios'

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
})

export const setError = payload => ({
    type: 'SET_ERROR',
    payload
})

export const loginUser = ({ email, password }, redirectUrl) => {
    console.log(email, password)
    return async (dispatch) => {
        try {
            let response = await axios({
                url: 'api/auth/sign-in',
                method: 'post',
                auth: {
                    username: email,
                    password,
                    apiKeyToken: "903e41d0538ae7a9d00e70dfab5ebfb7f75f9c9dfc0bf906b347255c51b9369c"
                }
            })
            console.log(response)
            if(response.statusText){
                const { data } = response
                console.log(data.user)
                document.cookie = `email=${data.user.email}`
                document.cookie = `name=${data.user.name}`
                document.cookie = `id=${data.user.id}`

                dispatch(loginRequest(data.user))
                window.location.href = redirectUrl
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}