import { useParams } from 'react-router-dom'

/**
 * Hook to retrieve a specific path parameter from the URL.
 */
export const usePathParam = (key: string): string => {
  const params = useParams()

  return params[key] ?? ''
}
