import {TypedUseSelectorHook, useSelector} from 'react-redux'

import {TypeRootState} from '_store/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
