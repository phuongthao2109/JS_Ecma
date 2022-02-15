import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:3001",
});

axios.defaults.headers.post["Content-Type"] = "application/json";

export default Axios;

