import { createReducer } from '@reduxjs/toolkit'

import { onGetCharacters, onGetCharactersError, onGetCharactersSuccess } from './character.actions'
import { CharacterState } from './character.types'

const initialState: CharacterState = {
  characters: [],
  error: null,
  loading: false
}

/**
 * The reducer responsible for handling character actions.
 */
export const characterReducer = createReducer(initialState, builder => {
  builder
    .addCase(onGetCharacters, state => {
      state.characters = []
      state.error = null
      state.loading = true
    })
    .addCase(onGetCharactersError, (state, { payload }) => {
      state.characters = []
      state.error = payload.error
      state.loading = false
    })
    .addCase(onGetCharactersSuccess, (state, { payload }) => {
      state.characters = payload.characters
      state.error = null
      state.loading = false
    })
    .addDefaultCase(state => state)
})
