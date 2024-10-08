import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
            {...note}
          />
        ))
      ) : (
        <div className="note-empty">
          Catatan kosong, harap tambahkan catatan
        </div>
      )}
    </div>
  );
}

export default NoteList;
