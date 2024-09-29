import React from "react";

function DeleteButton ({id, onDelete}) {
    return <button className="note-item__delete" onClick={() => onDelete(id)}>Hapus Catatan</button>
}

export default DeleteButton;