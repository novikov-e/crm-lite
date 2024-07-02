import {UserRole} from '../../_model/user/UserRole.enum'

export const userRoleFormatter = (role?: string) => {
	switch (role) {
		case UserRole.ADMIN:
			return 'Администратор'
		case UserRole.EMPLOYEE:
			return 'Сотрудник'
		case UserRole.CLIENT:
			return 'Клиент'
		default:
			return ''
	}
}