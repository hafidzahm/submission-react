import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../initial";
import NoteForm from "./note-form/NoteForm";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveButtonHandler = this.onArchiveButtonHandler.bind(this);
    this.onUnarchiveButtonHandler = this.onUnarchiveButtonHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: "Dibuat pada: " + new Date().toLocaleString(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveButtonHandler(id) {
    this.setState((prevState) => {
      const noteId = prevState.notes.find((note) => note.id === id);
      if (noteId) {
        return {
          notes: prevState.notes.map((note) =>
            note === noteId ? { ...note, archived: true } : note
          ),
        };
      } else {
        return prevState;
      }
    });
  }

  onUnarchiveButtonHandler(id) {
    this.setState((prevState) => {
      const unarchiveNotes = prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      );
      return {
        notes: unarchiveNotes,
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <h1>Aplikasi Catatan</h1>
        <h2>Tambah Catatan</h2>
        <NoteForm addNote={this.onAddNoteHandler} />
        <div className="note-archive">
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={this.state.notes.filter((note) => note.archived == false)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveButtonHandler}
          />
        </div>

        <div className="note-unarchived">
          <h2>Catatan yang diarsipkan</h2>
          <NoteList
            notes={this.state.notes.filter((note) => note.archived == true)}
            onDelete={this.onDeleteHandler}
            onUnarchive={this.onUnarchiveButtonHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;
