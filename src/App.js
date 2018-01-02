import React from 'react';
import './App.css';
import Notes from './Notes';

const App = () => {
  return (
    <div className="App">
      <button onClick={() => console.log('add note')}>+</button>
      <Notes/>
    </div>
  );
};

export default App;
