import React from 'react';
import Note from './Note';
import './Notes.css';

const Notes = ({notes, onDelete=() => {}}) => {
  return (
    <ul>
      {notes.map(({id, task}) =>
        <li key={id}>
          <Note>
            <span>{task}</span>
            <button onClick={onDelete.bind(null, id)}>x</button>
          </Note>
        </li>
      )}
    </ul>
  );
};

export default Notes;
