const regExpDic: {
	email: RegExp
	password: RegExp
	nickname: RegExp
	first_name: RegExp
	last_name: RegExp
	phone: RegExp
	city: RegExp
	country: RegExp
	date: RegExp
} = {
	email:
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
	password: /^[0-9a-zA-Z]{4,}$/,
	first_name: /[a-zA-Z]$/,
	nickname: /[a-zA-Z]$/,
	last_name: /[a-zA-Z]$/,
	phone: /[0-9]$/,
	city: /[a-zA-Z]$/,
	country: /[a-zA-Z]$/,
	date: /(.|\s)*\S(.|\s)*/,
}

type Name = 'email' | 'password'

function validate(data: HTMLInputElement) {
	const regEpxName = <Name>data.dataset.required

	if (!regExpDic[regEpxName]) return true

	return regExpDic[regEpxName].test(data.value)
}

/** 
  // Functions validates input by provided regExp
  @param {HTMLInputElement}
  @returns {Boolean}

**/
export default validate
