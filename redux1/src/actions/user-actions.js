import $ from 'jquery';

// UPDATE_USER scopes our action type to acoid collision with actions and other components
export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';

export function updateUser(newUser){
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
        payload: {
            user: 'User Error'
        }
    }
}

export function apiRequest() {
    return dispatch => {
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