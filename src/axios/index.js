import axios from "axios";



const Axios = axios.create({
    baseURL: 'https://mobile.olcha.uz/api/v2'
})

export default Axios