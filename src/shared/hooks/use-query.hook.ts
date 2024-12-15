import { useLocation } from 'react-router-dom'

/**
 * Hook to retrieve the query parameters from the current URL.
 */
export const useQuery = (): URLSearchParams => {
  const location = useLocation()

  return new URLSearchParams(location.search)
}
