import axios from "axios";

const Axios = axios.create({
    baseURL: "https://61e7a9b5e32cd90017acbc23.mockapi.io/",
});

axios.defaults.headers.post["Content-Type"] = "application/json";

export default Axios;