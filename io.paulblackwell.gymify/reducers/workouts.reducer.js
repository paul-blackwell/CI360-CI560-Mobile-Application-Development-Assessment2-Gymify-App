
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_API_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: '',
                jwt: '',
                currentSelectedWeek: ''
            }
        case 'FETCH_API_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong',
                jwt: '',
                currentSelectedWeek: ''
            }
        case 'FETCH_JWT_SUCCESS':
            return { ...state, jwt: action.payload }
        case 'SET_LOADING':
            return { ...state, loading: action.payload }
        case 'SET_CURRENT_SELECTED_WEEK':
            return { ...state, currentSelectedWeek: action.payload }
        default:
            return state;
    }
}




export default reducer;