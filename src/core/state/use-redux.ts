import { useDispatch as useDispatchRedux, useSelector as useSelectorRedux } from 'react-redux'

import { store } from './store.config'

/**
 * Custom hooks that provide typed access to `dispatch` and `selector` from Redux.
 * Use these instead of the plain `useDispatch` or `useSelector` to ensure type safety.
 */
export const useDispatch = useDispatchRedux.withTypes<typeof store.dispatch>()
export const useSelector = useSelectorRedux.withTypes<ReturnType<typeof store.getState>>()
