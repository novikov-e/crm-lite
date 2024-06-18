import { Body } from '_components/Body'
import {Header} from '_components/Header'

export default function HomeLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<Header />
			<Body>{children}</Body>
		</>
	)
}
