import { Notification } from '../models/notification'

// function getContainer() {
// 	return <HTMLElement>document.querySelector('.notify-container')!
// }

// function alertTemplate(msg: string, className: string, index: number = 0) {
// 	return `
//     <div class="alert ${className}" data-index="${index}">${msg}</div>
//   `
// }

// function getAlertIndex() {
// 	return document.querySelectorAll('.notify-container .alert').length
// }

// function notifyContainerTemplate() {
// 	return `
//     <div class="notify-container" style='position: fixed; top: 10px; right: 10px; z-inded: 99;'></div>
//   `
// }

// function createNotifyContainer() {
// 	const template = notifyContainerTemplate()
// 	document.body.insertAdjacentHTML('afterbegin', template)
// }

// export function notify({
// 	msg = 'Info message',
// 	className = 'alert-info',
// 	timeout = 2000,
// }: Notification) {
// 	if (!getContainer()) {
// 		createNotifyContainer()
// 	}

// 	const index = getAlertIndex()
// 	const template = alertTemplate(msg, className, index)
// 	const container = getContainer()

// 	container.insertAdjacentHTML('beforeend', template)

// 	setTimeout(() => {
// 		closeNotify(index)
// 	}, timeout)
// }

// export function closeNotify(index: number) {
// 	let alert: HTMLElement

// 	if (index === undefined) {
// 		alert = <HTMLElement>document.querySelector('.notify-container .alert')!
// 	} else {
// 		alert = <HTMLElement>(
// 			document.querySelector(`.notify-container .alert[data-index="${index}"]`)!
// 		)
// 	}

// 	if (!alert) {
// 		console.log('Alert not found!')
// 		return
// 	}

// 	const container = getContainer()
// 	container.removeChild(alert)
// }

class Notify {
	private msg: string
	private className: string
	private timeout: number

	constructor({
		msg = 'Default msg',
		className = 'alert-info',
		timeout = 2000,
	}: Notification) {
		this.msg = msg
		this.className = className
		this.timeout = timeout

		this.init()
	}

	private init() {
		if (!this.getContainer()) {
			this.createNotifyContainer()
		}

		const index = this.getAlertIndex()
		const template = this.alertTemplate(this.msg, this.className, index)
		const container = this.getContainer()

		container.insertAdjacentHTML('beforeend', template)

		setTimeout(() => {
			this.closeNotify(index)
		}, this.timeout)
	}

	private getContainer() {
		return <HTMLElement>document.querySelector('.notify-container')!
	}

	private createNotifyContainer() {
		const template = this.notifyContainerTemplate()
		document.body.insertAdjacentHTML('afterbegin', template)
	}

	private notifyContainerTemplate() {
		return `
      <div class="notify-container" style='position: fixed; top: 10px; right: 10px; z-inded: 99;'></div>
    `
	}

	private alertTemplate(msg: string, className: string, index: number = 0) {
		return `
      <div class="alert ${className}" data-index="${index}">${msg}</div>
    `
	}

	private getAlertIndex() {
		return document.querySelectorAll('.notify-container .alert').length
	}

	private closeNotify(index: number) {
		let alert: HTMLElement

		if (index === undefined) {
			alert = <HTMLElement>document.querySelector('.notify-container .alert')!
		} else {
			alert = <HTMLElement>(
				document.querySelector(
					`.notify-container .alert[data-index="${index}"]`,
				)!
			)
		}

		if (!alert) {
			console.log('Alert not found!')
			return
		}

		const container = this.getContainer()
		container.removeChild(alert)
	}
}

export default Notify
