import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onPin, onDelete }) => {
  // Check if notes is undefined or null
  if (!notes) {
    return <div>No notes available</div>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onPin={onPin}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoteList;