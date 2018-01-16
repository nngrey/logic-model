import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as NoteActions from "./actions";
import Notes from './Notes';
import './styles/App.css';

class App extends Component {

  render() {
    const { actions, notes } = this.props;
    return (
      <div>
        <button className="add-note" onClick={actions.addNote} >+</button>
        <Notes
          notes={notes}
          onNoteClick={actions.editingNote}
          onEdit={actions.editNote}
          onDelete={actions.deleteNote}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NoteActions, dispatch)
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
