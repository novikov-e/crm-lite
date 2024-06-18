import {TypeMaterialIconName} from '_shared/icon.types'

export interface IMenuItem {
	icon: TypeMaterialIconName
	title: string
	link: string
}

export interface IMenu {
	items: IMenuItem[]
}
