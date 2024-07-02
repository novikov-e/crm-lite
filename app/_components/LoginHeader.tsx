'use client'

import {DarkModeIconButton} from './ui/buttons/DarkModeIconButton'
import Link from 'next/link'
import {FC} from 'react'

export interface LinkData {
	title: string
	href: string
}

interface HeaderPropsType {
	leftLinks?: LinkData[]
	rightLinks?: LinkData[]
}

export const LoginHeader: FC<HeaderPropsType> = ({leftLinks, rightLinks}) => {
	return (
		<header className='cl-header-wrapper'>
			<div className='flex items-center justify-between' style={{maxWidth: '1186px', width: '1186px'}}>
				<div className='cl-left'>
					<Link className='cl-link text-2xl' href='/'>
						Lite CRM
					</Link>
					{leftLinks && (
						<nav>
							<ul className='cl-navigation'>
								{leftLinks.map(link => (
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
					{rightLinks && (
						<nav>
							<ul className='cl-navigation'>
								{rightLinks.map(link => (
									<li key={link.href}>
										<Link className='cl-link' href={link.href}>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					)}
					<DarkModeIconButton />
				</div>
			</div>
		</header>
	)
}
