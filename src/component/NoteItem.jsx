import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./button/DeleteButton";

function NoteItem ({ id, title, body, createdAt, archived, onDelete }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} createdAt={createdAt} archived={archived}/>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default NoteItem;    