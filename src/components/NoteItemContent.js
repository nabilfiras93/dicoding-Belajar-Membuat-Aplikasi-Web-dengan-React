import React from "react";

function NoteItemContent({ title, date, body }) {
  return (
    <div className="note-item-content">
      <h3 className="note-item-title">{title}</h3>
      <p className="note-item-date">{date}</p>
      <p className="note-item-body">{body}</p>
    </div>
  );
}

export default NoteItemContent;
