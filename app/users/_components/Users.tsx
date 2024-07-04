'use client'

import {FC} from 'react'
import AtomAnimation from '../../_components/ui/animations/AtomAnimation'
import {MaterialIcon} from '../../_components/ui/icons/MaterialIcon'
import Link from 'next/link'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {deleteRequest, getRequest, postRequest} from '../../_utils/fetch'
import {userRoleFormatter} from '../../_utils/string/formatters'
import {IUser} from '../../_model/user/User.entity'
import {revalidatePath} from 'next/cache'

type UsersProps = {};

export const Users: FC<UsersProps> = (props) => {

	const queryClient = useQueryClient()
	const {data, isPending} = useQuery({
		queryKey: ['users'],
		queryFn: () => getRequest<IUser[]>('/api/users')
	})
	const {mutate} = useMutation({
		mutationKey: ['delete_user'],
		mutationFn: (id: string) => deleteRequest('/api/user', {id}),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['users']})
			revalidatePath('/users')
		}
	})

	if (isPending) return <div className="w-full h-full flex justify-center items-center"><AtomAnimation /></div>
	return (
		<div className="page">
			<div className="page-header">
				<h1 className="page-header-title">Пользователи</h1>
				<div className="flex">
					<Link href="/users/create" className="cl-icon-button cl-icon-24" title="Добавить">
						<MaterialIcon iconName="MdAdd" />
					</Link>
				</div>
			</div>
			<table>
				<thead>
				<tr className="h-9 border-b-2 border-gray-400">
					<th>Фамилия Имя</th>
					<th>Тип</th>
					<th></th>
					<th></th>
				</tr>
				</thead>
				<tbody>
				{data?.map(user => (
					<tr key={user.id} className="border-b border-gray-400 h-9">
						<td className="pl-3">{`${user.name} ${user.surname}`}</td>
						<td className="text-center">{userRoleFormatter(user.role)}</td>
						<td className="w-8">
							<Link href={`/users/${user.id}`} className="cl-icon-button cl-icon-22" title="Изменить">
								<MaterialIcon iconName="MdOutlineEdit" />
							</Link>
						</td>
						<td className="w-8">
							<button className="flex cl-icon-button cl-icon-22" onClick={() => mutate(user.id)} title="Удалить">
								<MaterialIcon iconName="MdOutlineDelete" />
							</button>
						</td>
					</tr>))}
				</tbody>
			</table>
		</div>
	)
}