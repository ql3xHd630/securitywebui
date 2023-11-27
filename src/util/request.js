import axios from "axios"
const config = localStorage.getItem('config')
console.log(config)
const configObject = JSON.parse(config)
const baseUrl = configObject.baseUrl + '/api/'

class request {
    static get(path) {
        return axios.get(baseUrl + path)
    }
    static post(path, payload) {
        return axios.post(baseUrl + path, payload)
    }
    static async delete(path, payload) {
        let result = undefined
        await axios.delete(baseUrl + path, payload).then((req) => {
            result = req.data
        })
        return result
    }
}
export default request
