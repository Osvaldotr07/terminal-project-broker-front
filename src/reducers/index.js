import { combineReducers } from 'redux'

const appReducer = combineReducers({
    state: (state = {}) => state
})

const reducer = (state, action) => {
    console.log(action.payload)
    switch(action.type){
        case 'REGISTER_REQUEST':
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'DESTROY_SESSION':
           return state
        default: 
            return state
    }
}

export default reducer