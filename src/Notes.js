import React from 'react';
import Note from './Note';
import Editable from './Editable';

import './Notes.css';

const Notes = ({
  notes,
  onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {}
}) => {
  return (
    <ul>
      {notes.map(({id, editing, task}) =>
        <li key={id}>
           <Note onClick={onNoteClick.bind(null, id)}>
             <Editable
                editing={editing}
                value={task}
                onEdit={onEdit.bind(null, id)} />
             <button onClick={onDelete.bind(null, id)}>x</button>
           </Note>
         </li>
      )}
    </ul>
  );
};

export default Notes;
