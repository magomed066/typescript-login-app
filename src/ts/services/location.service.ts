import axios from '../plugins/axios/index'

class LocationsService {
	async getCountries() {
		try {
			const res = await axios.get(`/location/get-countries`)

			return res
		} catch (error) {
			console.log(error)
			return Promise.reject(error)
		}
	}

	async getCityByIndex(index: number) {
		try {
			const res = await axios.get(`/location/get-cities/${index}`)

			return res
		} catch (error) {
			console.log(error)
			return Promise.reject(error)
		}
	}
}

export default new LocationsService()
