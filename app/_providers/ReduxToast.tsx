// 'use client'

import { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

export const ReduxToast: FC = props => {
	return (
		<ReduxToastr
			newestOnTop={false}
			preventDuplicates
			progressBar
			closeOnToastrClick
			timeOut={4000}
			transitionIn='fadeIn'
			transitionOut='fadeOut'
		/>
	)
}
