import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../initial";
import NoteForm from "./note-form/NoteForm";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData()
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveButtonHandler = this.onArchiveButtonHandler.bind(this);
        this.onUnarchiveButtonHandler = this.onUnarchiveButtonHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes})
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onArchiveButtonHandler(id) {
        // this.setState((prevState) => {
        //   const archivedNotes =  prevState.notes.map ((note) => note.id === id ? {...note, archived : true} : note,);
        //   return {
        //     notes: archivedNotes,
        //   };
        // });
        this.setState((prevState) => {
            const unarchiveNotes = prevState.notes.map ((note) => note.id === id ? {...note, archived : false} : note);
            return {
                notes: unarchiveNotes,
            }
        })
    }

    onUnarchiveButtonHandler(id){
        this.setState((prevState) => {
            const unarchiveNotes = prevState.notes.map ((note) => note.id === id ? {...note, archived : true} : note);
            return {
                notes: unarchiveNotes,
            }
        })
    }  



    render() {
        return (
            <div className="note-app">
                <h1>Aplikasi Catatan</h1>
                <h2>Tambah Catatan</h2>
                <NoteForm addNote ={this.onAddNoteHandler} />

                <h2>Daftar Catatan</h2>

                <div className="note-archive">
                <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes.filter((note) => note.archived == false)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveButtonHandler} />
                </div>

                <div className="note-unarchived">
                <h2>Catatan yang diarsipkan</h2>
                <NoteList notes={this.state.notes.filter((note) => note.archived == true)} onDelete={this.onDeleteHandler} onUnarchive={this.onUnarchiveButtonHandler} />
                </div>
                
            </div>
        )

    }
}

export default NoteApp;