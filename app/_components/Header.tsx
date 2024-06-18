import {DarkModeButton} from '_components/ui/buttons/DarkModeButton'
import Link from 'next/link'
import {FC} from 'react'

export interface LinkData {
	title: string
	href: string
}

type HeaderPropsType = {
	leftLinks?: LinkData[]
	rightLinks?: LinkData[]
}

export const Header: FC<HeaderPropsType> = ({leftLinks, rightLinks}) => {
	return (
		<header className='header_wrapper'>
			<div className='flex items-center justify-between' style={{maxWidth: "1186px", width: "1186px"}}>
				<div className='left'>
					<Link className='link' href='/'>
						Logo
					</Link>
					{leftLinks && (
						<nav>
							<ul className='navigation'>
								{leftLinks.map(link => (
									<li key={link.href}>
										<Link className='link' href={link.href}>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					)}
				</div>
				<div className='right'>
					{rightLinks && (
						<nav>
							<ul className='navigation'>
								{rightLinks.map(link => (
									<li key={link.href}>
										<Link className='link' href={link.href}>
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
