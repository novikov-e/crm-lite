import {IMenu} from './menu.types'

export const menu: IMenu = {
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home'
		},
		{
			icon: 'MdExplore',
			link: '/login',
			title: 'login'
		},
		{
			icon: 'MdRefresh',
			link: '/registration',
			title: 'registration'
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now'
		}
	]
}
