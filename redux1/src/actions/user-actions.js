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