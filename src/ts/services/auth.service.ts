import axios from '../plugins/axios/index'
import { RegisterUser, LoginUser } from '../models/auth'

class AuthService {
	async register(user: RegisterUser) {
		try {
			const res = await axios.post(`/auth/signup`, JSON.stringify(user))

			console.log(res)

			return res
		} catch (error) {
			console.log(error)
			return Promise.reject(error)
		}
	}

	async login(user: LoginUser) {
		const { email, password } = user

		try {
			const res = await axios.post(
				`/auth/login`,
				JSON.stringify({ email, password }),
			)

			console.log(res)

			return res
		} catch (error) {
			console.log(error)
			return Promise.reject(error)
		}
	}
}

export default new AuthService()
