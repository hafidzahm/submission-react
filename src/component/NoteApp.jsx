import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../initial";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData()
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes})
    }

    render() {
        return (
            <div className="note-app">
                <h1>Daftar Catatan</h1>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </div>
        )

    }
}

export default NoteApp;