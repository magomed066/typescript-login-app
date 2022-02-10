import axios from 'axios'
import API_ENV from '../../config/api.config'
import interceptors from './interceptors'

const instanse = axios.create({
	baseURL: API_ENV.apiUrl,
	headers: {
		'Content-Type': 'application/json',
	},
})

interceptors(instanse)

export default instanse
