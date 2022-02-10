// function inputErrorTemplate(msg: string) {
// 	return `
//     <div class="invalid-feedback">
//       ${msg}
//     </div>
//   `
// }

import { Location } from '../models/locations'

// function dataListOptionTemlate(value: any) {
// 	return `
//     <option value="${value}"></option>
//   `
// }

// export function showInputError(input: HTMLInputElement) {
// 	const parentEl = input.parentElement

// 	const msg = input.dataset.invalidMessage || 'Invalid Input'

// 	const template = inputErrorTemplate(msg)

// 	input?.classList.add('is-invalid')
// 	parentEl?.insertAdjacentHTML('beforeend', template)
// }

// export function removeInputError(el: HTMLInputElement) {
// 	const parentEl = el.parentElement
// 	const error = parentEl?.querySelector('.invalid-feedback')!

// 	if (!error) return

// 	el.classList.remove('is-invalid')
// 	parentEl?.removeChild(error)
// }

// export function setCountriesToInput(el: HTMLInputElement, arr: any) {
// 	const countriesDatalist = el.nextElementSibling

// 	const template = Object.values(arr).map(dataListOptionTemlate).join(' ')

// 	countriesDatalist?.insertAdjacentHTML('beforeend', template)
// }

class Form {
	showInputError(input: HTMLInputElement) {
		const parentEl = input.parentElement

		const msg = input.dataset.invalidMessage || 'Invalid Input'

		const template = this.inputErrorTemplate(msg)

		input?.classList.add('is-invalid')
		parentEl?.insertAdjacentHTML('beforeend', template)
	}

	removeInputError(el: HTMLInputElement) {
		const parentEl = el.parentElement
		const error = parentEl?.querySelector('.invalid-feedback')!

		if (!error) return

		el.classList.remove('is-invalid')
		parentEl?.removeChild(error)
	}

	private inputErrorTemplate(msg: string) {
		return `
      <div class="invalid-feedback">
        ${msg}
      </div>
    `
	}

	setCountriesToInput(el: HTMLInputElement, arr: Location[], activate = false) {
		const countriesDatalist = el.nextElementSibling

		if (activate) {
			el.disabled = false
		}

		const template = arr
			.map((item) => {
				return this.dataListOptionTemlate(item)
			})
			.join(' ')

		countriesDatalist?.insertAdjacentHTML('beforeend', template)
	}

	private dataListOptionTemlate(item: Location) {
		return `
      <option value="${item.value}"></option>
    `
	}
}

export default new Form()
