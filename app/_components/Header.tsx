import {DarkModeIconButton} from './ui/buttons/DarkModeIconButton'
import Link from 'next/link'
import {FC} from 'react'
import { LogOutIconButton } from './ui/buttons/LogOutIconButton'

export interface LinkData {
	title: string
	href: string
}

interface HeaderPropsType {
	links?: LinkData[]
}

export const Header: FC<HeaderPropsType> = ({links}) => {
	return (
		<header className='cl-header-wrapper'>
			<div className='flex items-center justify-between bg-gray-950 rounded-2xl' style={{maxWidth: '1186px', width: '1186px'}}>
				<div className='cl-left'>
					<Link className='cl-link' href='/'>
						Logo
					</Link>
					{links && (
						<nav>
							<ul className='cl-navigation'>
								{links.map(link => (
									<li key={link.href}>
										<Link className='cl-link' href={link.href}>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					)}
				</div>
				<div className='cl-right'>
					<DarkModeIconButton />
					<LogOutIconButton/>
				</div>
			</div>
		</header>
	)
}
