'use client'

import {Body} from '_components/Body'
import React, {ChangeEventHandler, FC, useState} from 'react'
import {userRegistration} from '../_actions/user.actions'
import {useRouter} from 'next/navigation'
import {toastr} from 'react-redux-toastr'
import {MaterialIcon} from '_components/ui/icons/MaterialIcon'
import {emailRegex, oneCapitalLetter, oneDigit, oneSymbol} from '../_utils/string/regexes'
import {RequirementType} from '../_utils/validation/RequirementType.enum'
import {Requirement} from '../_utils/validation/Requirement.interface'
import {validate} from '../_utils/validation/validation'
import {RequirementItem} from '../_utils/validation/RequirementItem'
import classNames from 'classnames'
import {useTimeoutAfterLastChange} from '../_hooks/useTimeoutAfterLastChange'

export const Registration: FC = props => {
	const router = useRouter()
	const [email, setEmail] = useState<string>('')
	const [emailValidated, setEmailValidated] = useState<boolean>()
	const checkEmailAvailable = async (email: string) => {
		const response = await fetch('/api/email_available', {
			method: 'POST',
			body: JSON.stringify({email})
		})
		const {isAvailable} = await response.json()
		return isAvailable
	}

	const [emailRequirements, setEmailRequirements] = useState<Requirement[]>([
		{
			name: 'required',
			type: RequirementType.REQUIRED,
			value: 0,
			message: 'Обязательно для заполнения',
			validation: null
		},
		{
			name: 'regex',
			type: RequirementType.REGEX,
			value: emailRegex,
			message: 'В формате example@email.ru',
			validation: null
		},
		{
			name: 'isAvailable',
			type: RequirementType.FUNCTION,
			value: 0,
			message: 'Данный аккаунт занят',
			validation: null
		}
	])

	const [password, setPassword] = useState('')
	const [passwordValidated, setPasswordValidated] = useState<boolean>()
	const [passwordFocused, setPasswordFocused] = useState(false)
	const [passwordVisible, setPasswordVisible] = useState(false)

	const [passwordRequirements, setPasswordRequirements] = useState<Requirement[]>([
		{
			name: 'required',
			type: RequirementType.REQUIRED,
			value: 0,
			message: 'Обязательно для заполнения',
			validation: null
		},
		{
			name: 'minLength',
			type: RequirementType.MIN_LENGTH,
			value: 8,
			message: 'Длина не менее восьми символов',
			validation: null
		},
		{
			name: 'oneDigit',
			type: RequirementType.REGEX,
			value: oneDigit,
			message: 'Минимум одна цифра',
			validation: null
		},
		{
			name: 'oneSymbol',
			type: RequirementType.REGEX,
			value: oneSymbol,
			message: 'Минимум один символ',
			validation: null
		},
		{
			name: 'oneCapitalLetter',
			type: RequirementType.REGEX,
			value: oneCapitalLetter,
			message: 'Минимум одна заглавная буква',
			validation: null
		}
	])

	const emailTimeout = useTimeoutAfterLastChange()
	const emailOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const email: string = event.target.value
		setEmail(email)
		emailTimeout.timeoutAfterLastChange(1500, () => emailValidate(email))
	}

	const emailValidate = async (email: string) => {
		const newEmailRequirements = emailRequirements
			.map(requirement => {
				if (requirement.name !== 'isAvailable') {
					return validate(requirement, email)
				} else {
					return requirement
				}
			})
		let newEmailValidated: boolean = newEmailRequirements
			.filter(requirement => requirement.name !== 'isAvailable')
			.reduce((acc, value) => acc && Boolean(value.validation), true)
		let available: boolean | null = null
		if (newEmailValidated) {
			available = await checkEmailAvailable(email)
			newEmailRequirements[2].validation = available
			newEmailValidated = newEmailRequirements
				.reduce((acc, value) => acc && Boolean(value.validation), true)
		} else {
			newEmailRequirements[2].validation = true
		}
		setEmailRequirements(newEmailRequirements)
		setEmailValidated(newEmailValidated)
	}


	const passwordTimeout = useTimeoutAfterLastChange()
	const passwordOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const password: string = event.target.value
		setPassword(password)
		passwordTimeout.timeoutAfterLastChange(1500, () => passwordValidate(password))
	}

	const passwordValidate = (password: string) => {
		const newPasswordRequirements = passwordRequirements
			.map(requirement => validate(requirement, password))
		const newPasswordValidated: boolean = newPasswordRequirements
			.reduce((acc, value) => acc && Boolean(value.validation), true)
		setPasswordRequirements(newPasswordRequirements)
		setPasswordValidated(newPasswordValidated)
	}

	const showPassword = () => {
		setPasswordVisible(prev => !prev)
	}

	const onSubmit = async () => {
		if (!emailValidated || !passwordValidated) {
			if (!email) {
				setEmailRequirements(prev => {
					prev[0].validation = false
					return [...prev]
				})
				setEmailValidated(false)
			}
			if (!password) {
				setPasswordRequirements(prev => {
					prev[0].validation = false
					return [...prev]
				})
				setPasswordValidated(false)
			}
			return
		}
		const registration: boolean = await userRegistration({email, password})
		if (registration) {
			toastr.success(
				'Регистрация прошла успешно',
				'На вашу электронную почту отправлена ссылка для подтверждения регистрации'
			)
			router.push('/')
		} else {
			toastr.error('Ошибка', 'Аккаунт с таким адресом электронной почты уже есть')
		}
	}

	return (
		<Body>
			<section className="flex h-full items-center">
				<form className="cl-login-registration">
					<h1 className="cl-form-title">Регистрация</h1>
					<label className="cl-label mb-2" htmlFor="email">Электронная почта</label>
					<input
						id="email"
						name="email"
						className={classNames(
							'cl-input',
							'mb-2',
							{'cl-input-success': emailValidated},
							{'cl-input-error': !emailValidated && emailValidated !== undefined})}
						type="email"
						value={email}
						onChange={emailOnChange}
						autoComplete="email"
						autoFocus />
					<div className="px-2">
						{emailRequirements.map(requirement =>
							<RequirementItem key={requirement.name} requirement={requirement} />)}
					</div>
					<label className="cl-label my-2" htmlFor="email">Пароль</label>
					<div className={classNames(
						'cl-password-input-wrapper',
						'mb-2',
						{'cl-password-input-wrapper-focus': passwordFocused},
						{'cl-password-input-wrapper-focus-success': passwordFocused && passwordValidated},
						{'cl-password-input-wrapper-focus-error': passwordFocused && !passwordValidated && passwordValidated !== undefined},
						{'cl-input-success': passwordValidated},
						{'cl-input-error': !passwordValidated && passwordValidated !== undefined})}>
						<input
							className="cl-password-input"
							type={!passwordVisible ? 'password' : 'text'}
							name="password"
							id="password"
							value={password}
							onChange={passwordOnChange}
							onFocus={() => setPasswordFocused(true)}
							onBlur={() => setPasswordFocused(false)}
							autoComplete="new-password"
						/>
						<button onClick={showPassword} type="button" className="cl-visibility-button">
							<MaterialIcon iconName={
								!passwordVisible ?
									'MdOutlineVisibility' :
									'MdOutlineVisibilityOff'} />
						</button>
					</div>
					<div className="px-2">
						{passwordRequirements.map(requirement =>
							<RequirementItem key={requirement.name} requirement={requirement} />)}
					</div>
					<button
						className="cl-button z-10 mt-2"
						type="button"
						onClick={onSubmit}>Зарегистрироваться
					</button>
				</form>
			</section>
		</Body>
	)
}
