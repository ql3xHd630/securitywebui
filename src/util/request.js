import axios from "axios"
const baseUrl = 'http://104.214.137.120:5000/api/'
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
