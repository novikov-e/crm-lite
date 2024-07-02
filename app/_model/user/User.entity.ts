import {z} from 'zod'
import {oneCapitalLetter, oneDigit, oneSymbol} from '../../_utils/string/regexes'
import {UserRole} from './UserRole.enum'

export interface IUser {
	id: string
	email: string
	password: string
	role: string
	name: string,
	surname: string,
	createdAt: Date
}

export const IUserFields = {
	id: true,
	email: true,
	role: true,
	name: true,
	surname: true,
	createdAt: true
}

export interface CreateUserInterface {
	name: string
	surname: string
	email: string
	password: string
	role: string
}

export const LoginValidationSchema = z.object({
	email: z.string()
		.email('Некорректно введён адрес электронной почты'),
	password: z.string()
		.min(8, 'Длина не менее восьми символов')
		.regex(new RegExp(oneDigit), 'Минимум одна цифра')
		.regex(new RegExp(oneSymbol), 'Минимум один символ')
		.regex(new RegExp(oneCapitalLetter), 'Минимум одна заглавная буква')
})

export const EditProfileValidationSchema = z.object({
	name: z.string().max(30, 'Длина не должна превышать 30 символов'),
	surname: z.string().max(30, 'Длина не должна превышать 30 символов')
})

export const UserCreatedByAdminValidationSchema = z.object({
	email: z.string()
		.email('Некорректно введён адрес электронной почты'),
	password: z.string()
		.min(8, 'Длина не менее восьми символов')
		.regex(new RegExp(oneDigit), 'Минимум одна цифра')
		.regex(new RegExp(oneSymbol), 'Минимум один символ')
		.regex(new RegExp(oneCapitalLetter), 'Минимум одна заглавная буква'),
	role: z.enum([UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT]),
	name: z.string()
		.max(30, 'Длина не должна превышать 30 символов')
		.optional(),
	surname: z.string()
		.max(30, 'Длина не должна превышать 30 символов')
		.optional()
})

export const UserUpdateByAdminValidationSchema = z.object({
	id: z.string()
		.cuid(),
	role: z.enum([UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT]),
	name: z.string()
		.max(30, 'Длина не должна превышать 30 символов')
		.optional(),
	surname: z.string()
		.max(30, 'Длина не должна превышать 30 символов')
		.optional()
})


