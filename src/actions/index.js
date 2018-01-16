import * as types from '../constants/ActionTypes'

export const addNote = text => ({ type: types.ADD_NOTE, text })
export const deleteNote = id => ({ type: types.DELETE_NOTE, id })
export const editNote = (id, text) => ({ type: types.EDIT_NOTE, id, text })
export const editingNote = id => ({ type: types.EDITING_NOTE, id })
