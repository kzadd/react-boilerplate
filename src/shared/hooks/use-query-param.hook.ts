import { useQuery } from './use-query.hook'

/**
 * Hook to retrieve a specific query parameter from the URL.
 */
export const useQueryParam = (key: string): string => {
  const query = useQuery()

  return query.get(key) ?? ''
}
