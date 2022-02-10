import 'bootstrap/dist/css/bootstrap.css'
import '../css/style.css'

import UI from './config/ui.config'
import validate from './helpers/validateInput'
import Form from './views/form'
import AuthService from './services/auth.service'
import Notify from './views/notifications'
import NewsService from './services/news.service'
import Tabs from './views/tabs'
// import { setCountriesToInput } from './views/form'
import LocationsState from './state/LocationsState'
import LocationsService from './services/location.service'
import { AxiosResponse } from 'axios'
import locationService from './services/location.service'

document.addEventListener('DOMContentLoaded', (e: Event) => {
	const {
		form,
		inputEmail,
		inputPassword,
		inputCity,
		inputCountry,
		inputDate,
		radioFemale,
		radioMale,
		inputFirstName,
		inputLastName,
		inputNickname,
		inputPhone,
		formButton,
		inputRegEmail,
		inputRegPassword,
		registerButton,
		registerForm,
	} = UI

	const inputs = [inputEmail, inputPassword]
	const regInputs = [
		inputRegEmail,
		inputFirstName,
		inputLastName,
		inputNickname,
		inputDate,
		inputPhone,
		inputCountry,
		inputCity,
		inputRegPassword,
	]

	new Tabs('.tabs', '.tab-link', '.content', 'active')

	LocationsService.getCountries().then((res: AxiosResponse) => {
		const data = Object.entries(res).map(([index, value]) => ({
			index: Number(index),
			value: value,
		}))

		LocationsState.setState(data)

		Form.setCountriesToInput(inputCountry, LocationsState.getState().countries)
	})

	// Handlers
	form.addEventListener('submit', (e: Event) => {
		e.preventDefault()
		onSubmit()
	})

	registerForm.addEventListener('submit', (e: Event) => {
		e.preventDefault()
		onRegister()
	})

	inputCountry.addEventListener('change', (e: Event) => {
		const target = e.target as HTMLInputElement
		const countryName = target.value

		if (!countryName.length) {
			inputCity.disabled = true

			return
		}

		const index =
			LocationsState.getState().countries.find(
				(c) => c.value === countryName.trim(),
			)?.index || 0

		locationService.getCityByIndex(index).then((data) => {
			const res = Object.entries(data).map(([index, value]) => ({
				index: Number(index),
				value: value,
			}))

			LocationsState.setCities(res)
		})

		LocationsState.addListener(() => {
			Form.setCountriesToInput(
				inputCity,
				LocationsState.getState().cities,
				true,
			)
		})
	})

	inputs.forEach((input) =>
		input.addEventListener('focus', () => Form.removeInputError(input)),
	)

	regInputs.forEach((input) =>
		input.addEventListener('focus', () => Form.removeInputError(input)),
	)

	async function onSubmit() {
		const isValidForm = inputs.every((el) => {
			const isValid = validate(el)

			if (!isValid) {
				Form.showInputError(el)
			}

			return isValid
		})

		if (!isValidForm) return

		try {
			formButton.textContent = 'Loading...'

			await AuthService.login({
				email: inputEmail.value,
				password: inputPassword.value,
			})
			await NewsService.getNews()

			new Notify({
				msg: 'Logged in successfully!',
				className: 'alert-success',
				timeout: 2000,
			})

			formButton.textContent = 'Log In'

			form.reset()
		} catch (error) {
			new Notify({
				msg: 'Log in failed!',
				className: 'alert-danger',
				timeout: 2000,
			})
			formButton.textContent = 'Log In'
		}
	}

	async function onRegister() {
		try {
			const date = inputDate.value.split('-').reverse()

			const isValidForm = regInputs.every((el) => {
				const isValid = validate(el)

				if (!isValid) {
					Form.showInputError(el)
				}

				return isValid
			})

			if (!isValidForm) return

			if (!radioFemale.checked && !radioMale.checked) {
				alert('Choose your gender!')
				return
			}

			const user = {
				email: inputRegEmail.value,
				password: inputRegPassword.value,
				nickname: inputNickname.value,
				first_name: inputFirstName.value,
				last_name: inputLastName.value,
				phone: inputPhone.value,
				gender_orientation: radioMale.checked
					? 'male'
					: radioFemale.checked
					? 'female'
					: '',
				city: inputCity.value,
				country: inputCountry.value,
				date_of_birth_day: date[0],
				date_of_birth_month: date[1],
				date_of_birth_year: date[2],
			}

			registerButton.textContent = 'Loading...'

			await AuthService.register(user)

			new Notify({
				msg: 'Registered successfully!',
				className: 'alert-success',
				timeout: 2000,
			})

			registerButton.textContent = 'Sign Up'

			registerForm.reset()
		} catch (error) {
			new Notify({
				msg: 'Register failed!',
				className: 'alert-success',
				timeout: 2000,
			})
			registerButton.textContent = 'Sign Up'
		}
	}
})
