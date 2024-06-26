import {useRef} from 'react'

export const useTimeoutAfterLastChange = () => {
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
	const timeoutAfterLastChange = (timeout: number, callback: () => void) => {
		if (!timeoutRef.current) {
			timeoutRef.current = setTimeout(callback, timeout)
		} else {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = setTimeout(callback, timeout)
		}
	}
	return {timeoutAfterLastChange}
}