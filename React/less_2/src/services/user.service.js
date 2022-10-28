import {axiosService} from "./axios.service";
import {urls} from "../constants";


const userService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService(`${urls.users}/${id}`)
}

export {userService}
