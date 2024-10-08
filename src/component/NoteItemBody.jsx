import React from "react";

function NoteItemBody({ title, body, createdAt, archived }) {
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__createdAt">{createdAt}</p>
      <p className="note-item__body">{body}</p>
      <p className="note-item__archived">{archived}</p>
    </div>
  );
}

export default NoteItemBody;
