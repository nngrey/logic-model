import { ADD_NOTE, DELETE_NOTE } from '../constants/ActionTypes';
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
    case DELETE_NOTE:
      return state.filter(note =>
        note.id !== action.id
      )
    default:
      return state
    }
}
