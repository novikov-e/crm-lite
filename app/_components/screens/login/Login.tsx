import {FC, useState} from 'react'
import {useAuthRedirect} from './useAuthRedirect'
import {useAuth} from '_hooks/useAuth'
import {SubmitHandler, useForm} from 'react-hook-form'
import {ILoginInput} from './login.interface'
import {Meta} from '_utils/meta/Meta'
import styles from './Login.module.scss'
import {useActions} from '_hooks/useActions'

export const Login: FC = props => {
	
	useAuthRedirect()
	const {isLoading} = useAuth()
	const [type, setType] = useState<'login' | 'registration'>('login')
	const {register, handleSubmit, formState, reset} = useForm<ILoginInput>({
		mode: 'onChange'
	})

	const {login, registration} = useActions()

	const onSubmit: SubmitHandler<ILoginInput> = data => {
		if (type === 'login') login(data)
		else if (type === 'registration') registration(data)
	}
	const emailRegex = /[A-Za-z0-9_\-.]+@[A-Za-z0-9]+[_\-.][A-Za-z0-9]+/

	console.log(formState.isValid)
	console.log(formState.isValidating)
	console.log(formState.dirtyFields)
	console.log(formState.touchedFields)

	return (
		<Meta title='Login'>
			<section className={styles.section}>
				<div className='flex'>
					<button className='ne-button' onClick={() => setType('login')}>
						Вход
					</button>
					<button className='ne-button' onClick={() => setType('registration')}>
						Регистрация
					</button>
				</div>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<label className={styles.label} htmlFor='email'>
						E-mail
					</label>
					<input
						type='email'
						className={styles.input}
						id='email'
						{...register('email', {
							required: 'Email is required!',
							pattern: {
								value: emailRegex,
								message: 'Please enter a valid email'
							}
							// minLength: {
							// 	value: 6,
							// 	message: 'Min length should more 6 symbols!'
							// }
						})}
					/>
					{formState.errors.email && <div>{formState.errors.email.message}</div>}
					<label className={styles.label} htmlFor='password'>
						Пароль
					</label>
					<input
						type='password'
						className={styles.input}
						id='password'
						autoComplete='current-password'
						{...register('password', {
							required: 'Password is required!',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols!'
							}
						})}
					/>
					{type === 'registration' && (
						<label className={styles.label} htmlFor='password'>
							Роль
						</label>
					)}
					{type === 'registration' && (
						<select id='role' className={styles.input} {...register('role')}>
							<option value='ADMIN'>Администратор</option>
							<option value='EMPLOYEE'>Сотрудник</option>
							<option value='CLIENT'>Клиент</option>
						</select>
					)}
					{/* {type === 'registration' && <label htmlFor='confirm-password'>Подтверждение пароля</label>}
					{type === 'registration' && <input className={styles.input} id='confirm-password' name='confirm-password' />} */}
					<input type='submit' className='ne-button' value={type === 'login' ? 'Войти' : 'Зарегистрироваться'} />
				</form>
			</section>
		</Meta>
	)
}
