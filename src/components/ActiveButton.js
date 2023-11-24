import React from "react";

function ActiveButton({ id, onActive }) {
  return (
    <button className="note-item-archive-button" onClick={() => onActive(id)}>Move</button>
  );
}

export default ActiveButton;
