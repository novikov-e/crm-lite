'use client'

import {Body} from '_components/Body'
import {Header, LinkData} from '_components/Header'
import {FC} from 'react'

const rightLinks: LinkData = [{title: 'Регистрация', href: '/sign_up'}]

export const Login: FC = props => {
	return (
		<>
			<Header rightLinks={rightLinks} />
			<Body>
				<section className='flex h-full items-center'>
					<form className='login_registration'>
						<h1 className='form_title'>Вход</h1>
						<label className='label_wrapper'>E-mail</label>
						<input className='input_wrapper' type='email' />
						<label className='label_wrapper'>Пароль</label>
						<input className='input_wrapper' type='text' />
						<input className='input_button' type='submit' value='Войти' />
					</form>
				</section>
			</Body>
		</>
	)
}
