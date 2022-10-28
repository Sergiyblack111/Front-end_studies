import axios from "axios";

import baseURL from "../components/constants/links";

const axiosService = axios.create({baseURL});

export {
    axiosService
};