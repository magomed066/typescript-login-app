import axios from '../plugins/axios/index'

class NewsService {
	async getNews() {
		try {
			const res = await axios.get('/news')

			console.log(res)

			return res
		} catch (error) {
			console.log(error)
			return Promise.reject(error)
		}
	}
}

export default new NewsService()
