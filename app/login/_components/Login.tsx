'use client'

import {Body} from '../../_components/Body'
import React, {ChangeEvent, FC, useState} from 'react'
import {sign} from '../../_components/server/sign'
import classNames from 'classnames'
import {MaterialIcon} from '../../_components/ui/icons/MaterialIcon'
import {RequirementType} from '../../_utils/validation/RequirementType.enum'
import {Requirement} from '../../_utils/validation/Requirement.interface'
import {RequirementItem} from '../../_utils/validation/RequirementItem'

export const Login: FC = props => {
	const [email, setEmail] = useState('')
	const [emailRequirement, setEmailRequirement] = useState<Requirement>({
		name: 'required',
		type: RequirementType.REQUIRED,
		value: 0,
		message: 'Обязательно для заполнения',
		validation: null
	})
	const emailOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const email = event.target.value
		if (emailRequirement.validation !== null && !emailRequirement.validation && email) {
			setEmailRequirement(prev => {
				prev.validation = true
				return {...prev}
			})
		}
		setEmail(email)
	}
	const [password, setPassword] = useState('')
	const [passwordRequirement, setPasswordRequirement] = useState<Requirement>({
		name: 'required',
		type: RequirementType.REQUIRED,
		value: 0,
		message: 'Обязательно для заполнения',
		validation: null
	})
	const passwordOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const password = event.target.value
		if (passwordRequirement.validation !== null && !passwordRequirement.validation && password) {
			setPasswordRequirement(prev => {
				prev.validation = true
				return {...prev}
			})
		}
		setPassword(password)
	}
	const [passwordFocused, setPasswordFocused] = useState(false)
	const [passwordVisible, setPasswordVisible] = useState(false)
	const showPassword = () => {
		setPasswordVisible(prev => !prev)
	}

	const onSubmit = async() => {
		if (!email || !password) {
			if (!email) {
				setEmailRequirement(prev => {
					prev.validation = false
					return {...prev}
				})
			}
			if (!password) {
				setPasswordRequirement(prev => {
					prev.validation = false
					return {...prev}
				})
			}
			return
		}
		await sign(email, password)
	}

	return (
		<Body>
			<section className="flex h-full items-center">
				<form className="cl-login-registration">
					<h1 className="cl-form-title">Вход</h1>
					<label className="cl-label mb-2">E-mail</label>
					<input
						className="cl-input mb-2"
						type="email"
						id="email"
						value={email}
						onChange={emailOnChange}
					/>
					<div className="px-2">
						<RequirementItem requirement={emailRequirement} />
					</div>
					<label className="cl-label my-2">Пароль</label>
					<div className={classNames(
						'cl-password-input-wrapper',
						'mb-2',
						{'cl-password-input-wrapper-focus': passwordFocused}
					)}>
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
						<RequirementItem requirement={passwordRequirement} />
					</div>
					<button className="cl-button mt-2" type="button" onClick={onSubmit}>Войти</button>
				</form>
			</section>
		</Body>
	)
}
