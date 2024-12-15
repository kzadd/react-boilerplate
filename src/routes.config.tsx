import { lazy, Suspense } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { SuspenseLoading } from './shared/components/commons'
import { publicRoutes } from './shared/constants/public-routes.constant'

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
        element: <Navigate to={publicRoutes.characters} />,
        index: true
      },
      {
        element: <CharactersPage />,
        path: publicRoutes.characters
      },
      {
        element: <NotFoundPage />,
        path: publicRoutes.notFound
      }
    ],
    element: (
      <Suspense fallback={<SuspenseLoading />}>
        <Outlet />
      </Suspense>
    ),
    path: publicRoutes.root
  }
]
