import { useEffect } from 'react'

import { useDispatch, useSelector } from '@core/state/use-redux'
import { onGetCharactersThunk } from '../character.actions'

/**
 * Hook for managing the character.
 */
export const useCharacter = () => {
  const dispatch = useDispatch()

  const { characters, error, loading } = useSelector(state => state.character)

  useEffect(() => {
    dispatch(onGetCharactersThunk())
  }, [dispatch])

  return { characters, error, loading }
}
