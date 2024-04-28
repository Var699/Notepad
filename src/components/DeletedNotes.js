import React from 'react';
import { useSelector } from 'react-redux';
import NoteList from './NoteList';

const DeletedNotes = () => {
  const deletedNotes = useSelector((state) => state.deletedNotes);

  return (
    <div>
      <h2>Deleted Notes</h2>
      <NoteList notes={deletedNotes} />
    </div>
  );
};

export default DeletedNotes;
