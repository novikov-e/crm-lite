'use client'

import {FC} from 'react'
import AtomAnimation from '../../_components/ui/animations/AtomAnimation'
import {getRequest, postRequest, putRequest} from '../../_utils/fetch'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {SubmitHandler, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {MaterialIcon} from '../../_components/ui/icons/MaterialIcon'
import {EditProfileValidationSchema, IUser} from '../../_model/user/User.entity'
import Link from 'next/link'
import classNames from 'classnames'
import {revalidatePath} from 'next/cache'

type ProfileProps = {};

export const Profile: FC<ProfileProps> = (props) => {

	const queryClient = useQueryClient()
	const {data, isPending} = useQuery({
		queryKey: ['profile'],
		queryFn: () => getRequest<IUser>('/api/profile')
	})
	const {mutate} = useMutation({
		mutationFn: async (data: IUser) => putRequest('/api/profile', data),
		onSuccess: async () => {
			await queryClient.invalidateQueries({queryKey: ['users']})
			await queryClient.invalidateQueries({queryKey: ['profile']})
			revalidatePath('/users')
			revalidatePath('/profile')
		}
	})

	const {register, handleSubmit, formState: {errors}} = useForm<IUser>({
		mode: 'onChange',
		resolver: zodResolver(EditProfileValidationSchema)
	})

	if (isPending) {
		return <div className="w-full h-full flex justify-center items-center"><AtomAnimation /></div>
	}

	const clickHandleSubmit = () => {

	}

	return (
		<div className="page">
			<form className="flex flex-col" onSubmit={handleSubmit(mutate as SubmitHandler<IUser>)}>
				<div className="page-header">
					<h1 className="page-header-title">Профиль</h1>
					<div className="flex">
						<button className="cl-icon-button cl-icon-24" type="submit" title="Сохранить">
							<MaterialIcon iconName="MdOutlineSave" />
						</button>
						{/*<button className="cl-icon-button" title="Инфо" onClick={() => console.log(errors)}>*/}
						{/*	<MaterialIcon iconName="MdInfo" />*/}
						{/*</button>*/}
						{/*<button className="cl-icon-button" type="submit" title="Отмена">*/}
						{/*	<MaterialIcon iconName="MdOutlineBackspace" />*/}
						{/*</button>*/}
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
								 defaultValue={data?.name}
								 {...register('name')} />
					{errors.name && <div className="text-sm text-red">{errors.name.message}</div>}
					<label className="cl-label">Фамилия</label>
					<input className={
						classNames(
							'cl-input',
							{'cl-input-error': errors.surname})}
								 type="text"
								 id="surname"
								 defaultValue={data?.surname}
								 {...register('surname')} />
					{errors.surname && <div className="text-sm text-red">{errors.surname.message}</div>}
					<label className="cl-label">Электронная почта</label>
					<input className="cl-input"
								 type="email"
								 id="email"
								 defaultValue={data?.email}
								 {...register('email')}
								 disabled />
					<Link href="#">Смена пароля</Link>
				</div>
			</form>
		</div>
	)
}