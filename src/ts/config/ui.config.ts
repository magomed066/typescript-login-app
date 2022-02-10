interface UI {
	form: HTMLFormElement
	inputEmail: HTMLInputElement
	inputPassword: HTMLInputElement
	formButton: HTMLButtonElement
	registerForm: HTMLFormElement
	inputFirstName: HTMLInputElement
	inputLastName: HTMLInputElement
	inputDate: HTMLInputElement
	inputNickname: HTMLInputElement
	inputPhone: HTMLInputElement
	inputCity: HTMLInputElement
	inputCountry: HTMLInputElement
	registerButton: HTMLButtonElement
	inputRegEmail: HTMLInputElement
	inputRegPassword: HTMLInputElement
	radioMale: HTMLInputElement
	radioFemale: HTMLInputElement
}

const UI: UI = {
	form: <HTMLFormElement>document.getElementById('loginForm')!,
	registerForm: <HTMLFormElement>document.getElementById('registerForm')!,
	inputEmail: <HTMLInputElement>document.getElementById('email')!,
	inputRegEmail: <HTMLInputElement>document.getElementById('regEmail')!,
	inputFirstName: <HTMLInputElement>document.getElementById('first_name')!,
	inputLastName: <HTMLInputElement>document.getElementById('last_name')!,
	inputDate: <HTMLInputElement>document.getElementById('date')!,
	inputNickname: <HTMLInputElement>document.getElementById('nickname')!,
	inputPhone: <HTMLInputElement>document.getElementById('phone')!,
	inputCity: <HTMLInputElement>document.getElementById('city')!,
	inputCountry: <HTMLInputElement>document.getElementById('country')!,
	inputPassword: <HTMLInputElement>document.getElementById('password')!,
	inputRegPassword: <HTMLInputElement>document.getElementById('regPassword')!,
	formButton: <HTMLButtonElement>document.getElementById('formBtn'),
	registerButton: <HTMLButtonElement>document.getElementById('registerBtn'),
	radioMale: <HTMLInputElement>document.getElementById('male'),
	radioFemale: <HTMLInputElement>document.getElementById('female'),
}

export default UI
