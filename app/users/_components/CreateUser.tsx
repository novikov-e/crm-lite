'use client'

import {FC} from 'react'
import {MaterialIcon} from '../../_components/ui/icons/MaterialIcon'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {postRequest} from '../../_utils/fetch'
import {SubmitHandler, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {UserRole} from '../../_model/user/UserRole.enum'
import Link from 'next/link'
import {CreateUserInterface, IUser, UserCreatedByAdminValidationSchema} from '../../_model/user/User.entity'
import {useRouter} from 'next/navigation'
import classNames from 'classnames'
import {revalidatePath} from 'next/cache'

type CreateUserProps = {};

export const CreateUser: FC<CreateUserProps> = () => {

	const router = useRouter()
	const queryClient = useQueryClient()
	const {mutate} = useMutation({
		mutationFn: async (data: CreateUserInterface) => postRequest('/api/user', data),
		onSuccess: async() => {
			console.log('CreateUser - onSuccess()')
			await queryClient.invalidateQueries({queryKey: ['users']})
			revalidatePath('/users')
			router.push('/users')
		}
	})

	const {register, handleSubmit, formState: {errors}} = useForm<CreateUserInterface>({
		mode: 'onChange',
		resolver: zodResolver(UserCreatedByAdminValidationSchema)
	})

	return (
		<div className="page">
			<form className="flex flex-col" onSubmit={handleSubmit(mutate as SubmitHandler<CreateUserInterface>)}>
				<div className="page-header">
					<h1 className="page-header-title">Добавить</h1>
					<div className="flex">
						{/*<button className="cl-icon-button" type="button" title="Инфо" onClick={() => console.log(errors)}>*/}
						{/*	<MaterialIcon iconName="MdInfo" />*/}
						{/*</button>*/}
						<button className="cl-icon-button cl-icon-24" type="submit" title="Сохранить">
							<MaterialIcon iconName="MdOutlineSave" />
						</button>
						<Link href="/users" className="cl-icon-button cl-icon-24" title="Отмена">
							<MaterialIcon iconName="MdClose" />
						</Link>
					</div>
				</div>
				<div className="page-content">
					<label className="cl-label">Имя</label>
					<input className={
						classNames(
							'cl-input',
							{'cl-input-error': errors.name})}
								 type="text"
								 id="name"
								 {...register('name')}
								 autoComplete="off" />
					{errors.name && <div className="text-sm text-red">{errors.name.message}</div>}
					<label className="cl-label">Фамилия</label>
					<input className={
						classNames(
							'cl-input',
							{'cl-input-error': errors.surname})}
								 type="text" id="surname"
								 {...register('surname')}
								 autoComplete="off" />
					{errors.surname && <div className="text-sm text-red">{errors.surname.message}</div>}
					<label className="cl-label">Электронная почта</label>
					<input className={
						classNames(
							'cl-input',
							{'cl-input-error': errors.email})}
								 type="email"
								 id="email"
								 {...register('email')}
								 autoComplete="off" />
					{errors.email && <div className="text-sm text-red">{errors.email.message}</div>}
					<label className="cl-label">Пароль</label>
					<input className={
						classNames(
							'cl-input',
							{'cl-input-error': errors.password})}
								 type="password"
								 id="password"
								 {...register('password')}
								 autoComplete="new-password" />
					{errors.password && <div className="text-sm text-red">{errors.password.message}</div>}
					<label className="cl-label">Тип</label>
					<select className="cl-input" {...register('role')}>
						<option value={UserRole.EMPLOYEE}>Сотрудник</option>
						<option value={UserRole.ADMIN}>Администратор</option>
						<option value={UserRole.CLIENT}>Клиент</option>
					</select>
					{errors.role && <div className="text-sm text-red">{errors.role.message}</div>}
				</div>
			</form>
		</div>
	)
}

