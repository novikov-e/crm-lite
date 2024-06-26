import React, {FC} from 'react'
import {Body} from '../Body'
import {auth} from '../../../auth'
import {UserRole} from '../../_services/auth/UserRole.enum'
import {AdminIndex} from './admin/AdminIndex'
import {EmployeeIndex} from './employee/EmployeeIndex'
import {ClientIndex} from './client/ClientIndex'

export const Index: FC = async props => {

	const session = await auth()

	if (!session?.user) {
		return (
			<Body>
				<div className="flex justify-center items-center border border-gray-400 w-1/2 h-1/3 text-3xl mt-4 rounded-md">
					Новости
				</div>
				<section className="flex flex-col p-4">
					<h1 className="text-2xl">Преимущества</h1>
					<ul className="list-disc">
						<li>Преимущество 1</li>
						<li>Преимущество 2</li>
						<li>Преимущество 3</li>
						<li>Преимущество 4</li>
						<li>Преимущество 5</li>
					</ul>
				</section>
			</Body>
		)
	}

	switch (session?.user.role) {
		case UserRole.ADMIN:
			return <AdminIndex/>
		case UserRole.EMPLOYEE:
			return <EmployeeIndex/>
		case UserRole.CLIENT:
			return <ClientIndex/>
		default:
			return null
	}
}
