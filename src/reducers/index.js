const reducer = (state ={} , action) => {
    switch(action.type){
        case 'REGISTER_REQUEST':
        case 'LOGIN_REQUEST':
            return {
                ...state,
                data: action.payload
            }
        case 'DESTROY_SESSION':
           return state
        case 'GET_ALL_FORMS':
            return {
                ...state,
                forms: action.payload
            }
        case 'SET_DATA_TABLE':
            return {
                ...state,
                tab: action.payload
            }
        default:
            return state
    }
}
export default reducer