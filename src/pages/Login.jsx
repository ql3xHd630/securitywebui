import request from '../util/request'
import Axios from 'axios'
function Login() {
    const login = () => {
        let payload = {
            email: 'admin',
            password: '123456'
        }
        request.get('User').then((res) => {
            console.log(res.data)
        })

    }
    return (
        <>Login Page
            <button onClick={login}>登录</button>
        </>
    )
}

export default Login