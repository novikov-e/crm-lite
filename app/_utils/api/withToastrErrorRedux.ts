import {errorCatch} from '_utils/api/api.helpers'
import {toastr} from 'react-redux-toastr'

export const toastError = (error: any, title?: string) => {
	const message = errorCatch(error)
	toastr.error(title || 'Error request', message)
	throw message
}
