import * as types from '../constants/ActionTypes'

export const addNote = text => ({ type: types.ADD_NOTE, text })
export const deleteNote = id => ({ type: types.DELETE_NOTE, id })
