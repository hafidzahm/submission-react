import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem ({ title, body, createdAt, archived}) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} createdAt={createdAt} archived={archived}/>
        </div>
    );
}

export default NoteItem;