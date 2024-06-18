import * as MaterialIcons from 'react-icons/md'
import {FC} from 'react'
import {TypeMaterialIconName} from '_shared/icon.types'

export const MaterialIcon: FC<{iconName: TypeMaterialIconName}> = ({iconName}) => {
	const IconComponent = MaterialIcons[iconName]
	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}
