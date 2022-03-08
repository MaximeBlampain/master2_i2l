import axios from "axios"
const API_URL = "https://restcountries.com/v3.1"

export function getAllCountries() {
    return axios.get(`${API_URL}/all`)
        .then(res => res.data)
        .catch(err => new Error(err))
}