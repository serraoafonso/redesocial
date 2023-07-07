import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "http://localost:8800/api/",
    withCredentials: true,
})