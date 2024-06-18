import {FC} from 'react'
import {Header, LinkData} from '_components/Header'
import {Body} from '_components/Body'
import prisma from '_utils/db'

// TODO Использование MaterialIcon, нет подсказок

export const Index: FC = async(props) => {
	const rightLinks: LinkData = [
		{title: 'Вход', href: '/login'},
		{title: 'Регистрация', href: '/sign_up'}
	]

	// const users = await prisma.user.findMany()


	return (
		<>
			<Header rightLinks={rightLinks} />
			<Body>
				<div className='flex justify-center items-center border border-gray-400 w-1/2 h-1/3 text-3xl mt-4 rounded-md'>
					Новости
				</div>
				<section className='flex flex-col p-4'>
					<h1 className='text-2xl'>Преимущества</h1>
					<ul className='list-disc'>
						<li>Преимущество 1</li>
						<li>Преимущество 2</li>
						<li>Преимущество 3</li>
						<li>Преимущество 4</li>
						<li>Преимущество 5</li>
					</ul>
				</section>
			</Body>
		</>
	)
}
