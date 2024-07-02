import {Requirement} from './Requirement.interface'
import {RequirementType} from './RequirementType.enum'
import {z} from 'zod'

export const validate = (requirement: Requirement, value: string) => {
	switch (requirement.type) {
		case RequirementType.REQUIRED:
			requirement.validation = value.length !== 0
			break
		case RequirementType.MIN_LENGTH:
			requirement.validation = value.length >= Number(requirement.value)
			break
		case RequirementType.MAX_LENGTH:
			requirement.validation = value.length >= Number(requirement.value)
			break
		case RequirementType.REGEX:
			if (typeof requirement.value === 'object') {
				const regex = new RegExp(requirement.value as RegExp)
				requirement.validation = regex.test(value)
			}
			break
		case RequirementType.FUNCTION:
			// requirement.validation = requirement.value()
			break
		default:
			break
	}
	return requirement
}

export const cuidValidationSchema = z.string().cuid()