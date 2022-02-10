const myToken = 'my_app_token'

function setToken(req: any) {
	const isAuthUrl = req.url.includes('auth')

	if (!isAuthUrl) {
		const token = localStorage.getItem(myToken)

		req.headers['x-access-token'] = token
	}

	return req
}

function setTokenOnLogin(res: any) {
	const isLoginUrl = res.config.url.includes('login')

	if (isLoginUrl) {
		const token = res.data.token

		localStorage.setItem(myToken, token)
	}

	return res
}

function getClearResponse(res: any) {
	return res.data
}

function onError(err: any) {
	return Promise.reject(err)
}

export default function (axios: any) {
	axios.interceptors.request.use(setToken)
	axios.interceptors.response.use(setTokenOnLogin)
	axios.interceptors.response.use(getClearResponse, onError)
}
