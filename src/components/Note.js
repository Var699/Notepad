import React from 'react';

const Note = ({ note, onPin, onDelete }) => {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onPin(note.id)}>Pin</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default Note;

