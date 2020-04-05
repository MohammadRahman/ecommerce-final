const initState = {
    message: null,
    type:null
}
const notifyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'NOTIFY_USER':{
            return {
                ...state,
                message: action.message,
                type: action.type
            }
        }
        default: return state
    }
}
export default notifyReducer;