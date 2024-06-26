import {TypedUseSelectorHook, useSelector} from 'react-redux'

import {TypeRootState} from '_redux/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
