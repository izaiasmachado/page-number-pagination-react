const axios = require('axios')
const instance = axios.create({
    baseURL: 'http://localhost:8000', // api的base_url
})

export default instance