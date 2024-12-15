import { configureStore } from '@reduxjs/toolkit'

import { ENVIRONMENT } from '@shared/configs/environment.config'
import { storeLogger } from '../middlewares/store-logger.middleware'
import { reducer } from './reducer.config'

/**
 * Store configuration.
 */
export const store = configureStore({
  devTools: ENVIRONMENT !== 'prod',
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(storeLogger),
  reducer
})
