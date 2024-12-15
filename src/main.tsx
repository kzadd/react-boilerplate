import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { initializeMockServiceWorker } from './__mocks__/initialize'
import App from './App'

const element = document.getElementById('root')!
const root = createRoot(element)

const tree = (
  <StrictMode>
    <App />
  </StrictMode>
)

/**
 * Initializes the mock service worker and render the react application.
 */
initializeMockServiceWorker().then(() => root.render(tree))
