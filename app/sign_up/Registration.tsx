'use client'

import {Body} from '_components/Body'
import {Header, LinkData} from '_components/Header'
import {FC} from 'react'
import {useForm} from 'react-hook-form'
import { newUser } from './registration.actions'

export const Registration: FC = props => {
	const rightLinks: LinkData = [{title: 'Вход', href: '/login'}]

	const {
		register,
		handleSubmit,
		watch,
		formState: {errors}
	} = useForm()
	const onSubmit = data => newUser(data.email, data.password, data.role)
	console.log(watch('email')
	)
	return (
		<>
			<Header rightLinks={rightLinks} />
			<Body>
				<section className='flex h-full items-center'>
					<form className='login_registration' onSubmit={handleSubmit(onSubmit)}>
						<h1 className='form_title'>Регистрация</h1>
						<label className='label_wrapper'>E-mail</label>
						<input className='input_wrapper' type='email' {...register('email')} />
						<label className='label_wrapper'>Пароль</label>
						<input className='input_wrapper' type='text' {...register('password')} />
						<label className='label_wrapper'>Роль</label>
						<select className='input_wrapper' {...register('role')}>
							<option value='ADMIN'>Admin</option>
							<option value='EMPLOYEE'>Employee</option>
							<option value='CLIENT'>Client</option>
						</select>
						<input className='input_button' type='submit' value='Зарегистрировать' />
					</form>
				</section>
			</Body>
		</>
	)
}
