import { lazy, Suspense } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { SuspenseLoading } from './shared/components/commons'
import { routePaths } from './shared/constants/routes.constant'

const CharactersPage = lazy(() => import('./presentation/pages/characters.page'))
const NotFoundPage = lazy(() => import('./presentation/pages/not-found.page'))

/**
 * Routes configuration.
 * This defines the routes and their associated components.
 */
export const routes: RouteObject[] = [
  {
    children: [
      {
        element: <Navigate to={routePaths.characters} />,
        index: true
      },
      {
        element: <CharactersPage />,
        path: routePaths.characters
      },
      {
        element: <NotFoundPage />,
        path: routePaths.notFound
      }
    ],
    element: (
      <Suspense fallback={<SuspenseLoading />}>
        <Outlet />
      </Suspense>
    ),
    path: routePaths.root
  }
]
