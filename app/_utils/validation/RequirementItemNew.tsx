import {Requirement} from './Requirement.interface'
import {FC, useRef} from 'react'
import {MaterialIcon} from '../../_components/ui/icons/MaterialIcon'
import {CSSTransition} from 'react-transition-group'

interface RequirementItemNewPropsType {
	error: string
}

export const RequirementItemNew: FC<RequirementItemNewPropsType> = ({error}) => {
	const nodeRef = useRef(null)
	return (
		<>
			<CSSTransition
				nodeRef={nodeRef}
				in={true}
				timeout={500}
				classNames="cl-requirement-item-animation"
				unmountOnExit>
				<div ref={nodeRef} className="cl-requirement-item">
					<p className="select-none">{error}</p>
					<MaterialIcon iconName="MdErrorOutline" />
				</div>
			</CSSTransition>
		</>
	)
}