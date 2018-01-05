import React from 'react';
import Note from './Note';
import Editable from './Editable';
import './Notes.css';

const Notes = (props) => {
  const notes = props.notes;

  return (
    <ul className="notes">
      {notes.map((note) =>
        <li key={note.id}>
           <Note className="note" onClick={props.onNoteClick.bind(null, note.id)}>
             <Editable
                editing={note.editing}
                value={note.task}
                onEdit={props.onEdit.bind(null, note.id)} />
             <button className="delete" onClick={props.onDelete.bind(null, note.id)}>x</button>
           </Note>
         </li>
      )}
    </ul>
  );
};

export default Notes;
