import './shared/styles/globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from './core/state/store.config'
import { routes } from './routes.config'

/**
 * Main application component.
 */
const App = () => {
  const browserRouter = createBrowserRouter(routes)

  return (
    <ReduxProvider store={store}>
      <RouterProvider router={browserRouter} />
    </ReduxProvider>
  )
}

export default App
