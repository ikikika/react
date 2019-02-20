import $ from 'jquery';

// UPDATE_USER scopes our action type to acoid collision with actions and other components
export const API_REQUEST_SUCCESS = 'users:updateUser';
export const API_REQUEST_ERROR = 'users:showError';
export const API_REQUEST_MADE = 'users:onRequest';

export function updateUser(newUser){
    return {
        type: API_REQUEST_SUCCESS,
        payload: {
            user: newUser
        }
    }
}

export function onRequest() {
    return {
        type: API_REQUEST_MADE,
        payload: {
            user: 'Request made'
        }
    }
}

export function showError() {
    return {
        type: API_REQUEST_ERROR,
        payload: {
            user: 'User Error'
        }
    }
}

export function apiRequest() {
    return dispatch => {

        dispatch(onRequest());

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            success(response) {
                console.log(response);
                dispatch(updateUser(response.title));
            },
            error() {
                console.log("error");
                dispatch(showError());
            }
        });
    }
}