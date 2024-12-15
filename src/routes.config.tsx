import { lazy, Suspense } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { SuspenseLoading } from './shared/components/commons'
import { routes as routestPath } from './shared/constants/routes.constant'

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
        element: <Navigate to={routestPath.characters} />,
        index: true
      },
      {
        element: <CharactersPage />,
        path: routestPath.characters
      },
      {
        element: <NotFoundPage />,
        path: routestPath.notFound
      }
    ],
    element: (
      <Suspense fallback={<SuspenseLoading />}>
        <Outlet />
      </Suspense>
    ),
    path: routestPath.root
  }
]
