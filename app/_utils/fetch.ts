import {toastr} from 'react-redux-toastr'

const errorTitle = 'Ошибка'
const errorMessage = 'Произошла ошибка, пожалуйста обновите страницу'

export function getRequest<T>(url: string, callback?: (data: T) => void) {
	return fetch(url,{ cache: 'no-store' })
		.then(res => res.json() as T)
		.then(data => {
			if (callback) callback(data)
			return data
		})
		.catch(error => {
			console.error(error)
			toastr.error(errorTitle, errorMessage)
		})
}

export function postRequest<T>(url: string, data: object, callback?: (data: T) => void) {
	return fetch(url, {method: 'POST', body: JSON.stringify(data), cache: 'no-store'})
		.then(res => res.json() as T)
		.then(responseData => {
			if (callback) callback(responseData)
			return responseData as T
		})
		.catch(error => {
			console.error(error)
			toastr.error(errorTitle, errorMessage)
		})
}

export function putRequest<T>(url: string, data: object, callback?: (data: T) => void) {
	return fetch(url, {method: 'PUT', body: JSON.stringify(data), cache: 'no-store'})
		.then(res => res.json() as T)
		.then(data => {
			if (callback) callback(data)
			return data
		})
		.catch(error => {
			console.error(error)
			toastr.error(errorTitle, errorMessage)
		})
}

export function deleteRequest<T>(url: string, data: object, callback?: (data: T) => void) {
	return fetch(url, {method: 'DELETE', body: JSON.stringify(data), cache: 'no-store'})
		.then(res => res.json() as T)
		.then(data => {
			if (callback) callback(data)
			return data
		})
		.catch(error => {
			console.error(error)
			toastr.error(errorTitle, errorMessage)
		})
}