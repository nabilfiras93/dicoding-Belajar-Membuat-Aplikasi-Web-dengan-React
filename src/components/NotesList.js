import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive, onActive }) {
  if (notes.length === 0) {
    return (
      <p className="notes-list-empty-message">No content found</p>
    );
  }

  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
        ))
      }
    </div>
  );
}

export default NotesList;
