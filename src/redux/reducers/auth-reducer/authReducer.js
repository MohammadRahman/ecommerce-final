const initState = {
    currentUser:null
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER": 
            return {
                ...state,
                currentUser:action.payload
            }
            default:
                { return state }  
    }

}
export default authReducer;