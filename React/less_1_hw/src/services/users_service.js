import {constants} from "../constants";

export const usersService = {
    getAllUsers: () => fetch(constants.apiUrl + 'users')
        .then(value => value.json())
}

// export const usersService = {
//     getAllUsers: () => fetch(`${constants.apiUrl2}/users`)
//         .then(value => value.json())
// }