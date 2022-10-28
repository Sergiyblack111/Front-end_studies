import {axiosService} from "./axios.service";
import {urls} from "../components/constants";

const postsService = {
    getPostsByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`),

    getAll2: () => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()),
}

export {
    postsService
};
