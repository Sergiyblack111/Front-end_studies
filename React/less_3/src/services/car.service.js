import {axiosService} from "./axios.service";

import {urls} from "../constants";

const carService = {
    getAll:() => axiosService.get(urls.cars), // get -> витягуємо інфу з сервера
    getById:(id) => axiosService.get(`${urls.cars}/${id}`),
    create:(car) => axiosService.post(urls.cars, car), // post -> записуємо інфу на сервер
    apdateById:(id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar), // update -> оновлення
    deleteById:(id) => axiosService.delete(`${urls.cars}/${id}`) // delete -> для видалення
} // "CRUD" operation
  // Create
  // Read
  // Update
  // Delete

export {
    carService
}