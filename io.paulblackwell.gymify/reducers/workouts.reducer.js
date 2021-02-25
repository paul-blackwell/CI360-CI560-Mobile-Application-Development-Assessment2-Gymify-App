
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_API_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_API_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state;
    }
}


export default reducer;