import { createAction, Dispatch } from '@reduxjs/toolkit'

import { createError } from '@shared/exceptions/create-error.exception'
import { CharacterAdapter } from '../infrastructure/character.adapter'
import { ApiCharacterRepository } from '../infrastructure/character.service'
import { CharacterError, CharacterSuccess } from './character.types'

/**
 * Actions for the character.
 */
export const onGetCharacters = createAction('[character] onGetCharacters')
export const onGetCharactersError = createAction<CharacterError>('[character] onGetCharactersError')
export const onGetCharactersSuccess = createAction<CharacterSuccess>('[character] onGetCharactersSuccess')

/**
 * Thunk for characters.
 */
export const onGetCharactersThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(onGetCharacters())

    const characterResponse = await ApiCharacterRepository.getCharacters()
    const adapterCharacters = CharacterAdapter.toCharacters(characterResponse)

    dispatch(onGetCharactersSuccess({ characters: adapterCharacters }))
  } catch (error) {
    const standardizeError = createError({ originalError: error, reason: 'SOMETHING_WENT_WRONG_ERROR' }).toObject()

    dispatch(onGetCharactersError({ error: standardizeError }))
  }
}
