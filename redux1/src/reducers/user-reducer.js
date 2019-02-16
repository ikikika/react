import { API_REQUEST_SUCCESS, API_REQUEST_ERROR, API_REQUEST_MADE } from '../actions/user-actions';

export default function userReducer(state = '', {type, payload}){
    switch(type){
        case API_REQUEST_SUCCESS: return payload.user;
        case API_REQUEST_ERROR: return payload.user;
        case API_REQUEST_MADE: return payload.user;
        default: return state;
    }
}