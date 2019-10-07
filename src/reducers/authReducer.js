import { SIGN_IN, SIGN_OUT } from "../actions/types";


const INITIAL_STATE = {
    isSignedIn: true,
    userId: '53fdjdslf42354235428'
}
export default (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null}

        default:
            return state
    }
}