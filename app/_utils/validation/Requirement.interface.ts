import {RequirementType} from './RequirementType.enum'

export interface Requirement {
	name: string
	type: RequirementType
	value: number | string | object | void
	message: string
	validation: boolean | null
}