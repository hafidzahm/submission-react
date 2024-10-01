import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./button/DeleteButton";
import UnarchiveButton from "./button/UnarchiveButton";
import ArchiveButton from "./button/ArchiveButton";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <div className="note-item">
      <NoteItemBody
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
      />
      <DeleteButton id={id} onDelete={onDelete} />
      {archived ? (
        <UnarchiveButton id={id} onUnarchive={onUnarchive} />
      ) : (
        <ArchiveButton id={id} onArchive={onArchive} />
      )}
    </div>
  );
}

export default NoteItem;
