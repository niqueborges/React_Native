import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "a2fdd650fb8c6b72e33e0c63e843bb95",
        language: "pt-BR",
        include_adult: false,
    };
})