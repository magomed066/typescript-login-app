interface RegisterUser {
	email: string
	password: string
	nickname: string
	first_name: string
	last_name: string
	phone: string
	gender_orientation: string
	city: string
	country: string
	date_of_birth_day: string
	date_of_birth_month: string
	date_of_birth_year: string
}

interface LoginUser {
	email: string
	password: string
}

export { RegisterUser, LoginUser }
