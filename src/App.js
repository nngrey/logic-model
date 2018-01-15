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
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={actions.deleteNote}
          />
      </div>
    );
  }

  activateNoteEdit = (id) => {
    this.setState({
      notes: this.props.notes.map(note => {
        if(note.id === id) {
          note.editing = true;
        }

        return note;
      })
    });
  }

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false;
          note.task = task;
        }

        return note;
      })
    });
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
