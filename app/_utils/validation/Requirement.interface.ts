import {RequirementType} from './RequirementType.enum'

type RequirementFunction = () => void

export interface Requirement {
	name: string
	type: RequirementType
	value: number | string | object | RequirementFunction
	message: string
	validation: boolean | null
}