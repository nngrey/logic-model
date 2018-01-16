import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, EDITING_NOTE } from '../constants/ActionTypes';
import uuid from 'uuid';

const initialState = [
  {
    id: uuid.v4(),
    task: 'Redux'
  },
  {
    id: uuid.v4(),
    task: 'More redux'
  }
]

export default function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: uuid.v4(),
          task: "Add note"
        }
      ]

    case EDITING_NOTE:
    return state.map(note =>
      note.id === action.id ? { ...note, editing: true } : note
    )

    case EDIT_NOTE:
      return state.map(note =>
        note.id === action.id ? { ...note, task: action.text, editing: false } : note
      )

    case DELETE_NOTE:
      return state.filter(note =>
        note.id !== action.id
      )

    default:
      return state
    }
}
