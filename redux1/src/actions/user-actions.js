import $ from 'jquery';

// UPDATE_USER scopes our action type to acoid collision with actions and other components
export const UPDATE_USER = 'users:updateUser';

export function updateUser(newUser){
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            success(data) {
                console.log(data);
            },
            error() {
                console.log("error");
            }
        });
    }
}