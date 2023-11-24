import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import NoteSearch from "./NoteSearch";

function Body({ addNote, notes, querySearch, onDelete, onArchive, onActive, searchNote }) {
  const activeNotes = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));
  const archiveNotes = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));

  return (
    <div className="my-notes-body">
      <NoteInput addNote={addNote} />
      <NoteSearch searchNote={searchNote} />
      <h2>Active Notes</h2>
      <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Archive Notes</h2>
      <NotesList notes={archiveNotes} onDelete={onDelete} onActive={onActive} />
    </div>
  );
}

export default Body;
