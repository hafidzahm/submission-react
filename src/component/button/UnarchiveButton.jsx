import React from "react";

function UnarchiveButton({id, onUnarchive}) {
    return(
       <button className="note-item__unarchive" onClick={() => onUnarchive(id)}>Buang dari Arsip</button> 
    )
}

export default UnarchiveButton;