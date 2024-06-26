import {Requirement} from './Requirement.interface'
import {FC, useRef} from 'react'
import {MaterialIcon} from '../../_components/ui/icons/MaterialIcon'
import {CSSTransition} from 'react-transition-group'

interface RequirementItemPropsType {
	requirement: Requirement
}

export const RequirementItem: FC<RequirementItemPropsType> = ({requirement}) => {
	const nodeRef = useRef(null)
	return (
		<>
			<CSSTransition
				nodeRef={nodeRef}
				in={requirement.validation === null ? false : !requirement.validation}
				timeout={500}
				classNames="cl-requirement-item-animation"
				unmountOnExit>
				<div ref={nodeRef} className="cl-requirement-item">
					<p className="select-none">{requirement.message}</p>
					<MaterialIcon iconName="MdErrorOutline" />
				</div>
			</CSSTransition>
		</>
	)
}