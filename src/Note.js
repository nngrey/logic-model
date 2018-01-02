import React from 'react';

const Note = ({task, onDelete}) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>x</button>
    </div>
  );
};

// Destructuring: These are the same...

// export default ({task}) => <div>{task}</div>;
// export default (props) => <div>{props.task}</div>;

export default Note;
