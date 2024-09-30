import React from "react";

function ArchiveButton ({ id, onArchive}) {
    return <button className="note-item__archive" onClick={() => onArchive(id)}>Arsipkan Catatan</button>
}

export default ArchiveButton;