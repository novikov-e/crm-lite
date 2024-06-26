import {DarkModeButton} from '_components/ui/buttons/DarkModeButton'
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
					<Link className='cl-link' href='/'>
						Logo
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
					<DarkModeButton />
				</div>
			</div>
		</header>
	)
}
