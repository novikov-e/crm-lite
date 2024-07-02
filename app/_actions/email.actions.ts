'use server'

import {sendEmail} from '../_utils/email'
import {randomUUID} from 'crypto'

export const emailConfirmation = async() => {
	await sendEmail(
		'noved256@yandex.ru',
		'Test subject',
		'Test text',
		`<a href="${process.env.APP_URL}/confirm_email/${randomUUID()}">Подтвердить адрес электронной почты</a>`
	)
}