import React from 'react';
import './Notes.css';
import uuid from 'uuid';

const data = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

const Notes = () => {
  return (
    <ul>{data.map(note =>
      <li key={note.id}>{note.task}</li>
    )}</ul>
  );
};

export default Notes;
