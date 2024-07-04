'use client'

import {FC} from 'react'
import {MaterialIcon} from '../../_components/ui/icons/MaterialIcon'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {postRequest, putRequest} from '../../_utils/fetch'
import {SubmitHandler, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import AtomAnimation from '../../_components/ui/animations/AtomAnimation'
import {UserRole} from '../../_model/user/UserRole.enum'
import {IUser, UserUpdateByAdminValidationSchema} from '../../_model/user/User.entity'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'
import {revalidatePath} from 'next/cache'

type EditUserProps = {
	id: string
};

export const EditUser: FC<EditUserProps> = ({id}) => {

	const router = useRouter()
	const queryClient = useQueryClient()
	const {data, isPending} = useQuery({
		queryKey: ['edit_user'],
		queryFn: () => postRequest<IUser>('/api/user/by_id', {id})
	})
	const {mutate} = useMutation({
		mutationKey: ['update_user'],
		mutationFn: async (data: IUser) => putRequest('/api/user', data),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['users']})
			queryClient.invalidateQueries({queryKey: ['edit_user']})
			router.push('/users')
			router.refresh()
			revalidatePath('/users')
			revalidatePath('/edit_user')
		}
	})

	const {register, handleSubmit, formState: {errors}} = useForm<IUser>({
		mode: 'onChange',
		resolver: zodResolver(UserUpdateByAdminValidationSchema)
	})

	if (isPending) {
		return <div className="w-full h-full flex justify-center items-center"><AtomAnimation /></div>
	}

	return (
		<div className="page">
			<form className="flex flex-col" onSubmit={handleSubmit(mutate as SubmitHandler<IUser>)}>
				<div className="page-header">
					<h1 className="page-header-title">Изменить</h1>
					<div className="flex">
						<button className="cl-icon-button cl-icon-24" type="submit" title="Сохранить">
							<MaterialIcon iconName="MdOutlineSave" />
						</button>
						<Link href="/users" className="cl-icon-button cl-icon-24" title="Отмена">
							<MaterialIcon iconName="MdClose" />
						</Link>
						{/*<button className="cl-icon-button" title="Инфо" type="button" onClick={() => console.log(data)}>*/}
						{/*	<MaterialIcon iconName="MdInfo" />*/}
						{/*</button>*/}
					</div>
				</div>
				<div className="page-content">
					<input type="text" id="name" defaultValue={data?.id} {...register('id')} hidden/>
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
					<label className="cl-label">Тип</label>
					<select className="cl-input" defaultValue={data?.role} {...register('role')}>
						<option value={UserRole.EMPLOYEE}>Сотрудник</option>
						<option value={UserRole.ADMIN}>Администратор</option>
						<option value={UserRole.CLIENT}>Клиент</option>
					</select>
				</div>
			</form>
		</div>
	)
}