function reducer(state, action) {
    switch(action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "CHANGE_AGE":
            return {
                ...state,
                age: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export default reducer