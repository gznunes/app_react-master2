import axios from "axios";
const Api = axios.create ({
    baseURL: "https://api-livros.onrender.com/livros"
})

export default Api;