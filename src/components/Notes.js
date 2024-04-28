import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteList from './NoteList';
import { deleteNote } from '../actions';

const Notes = ({ onDelete }) => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      <h2>Notes</h2>
      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export default Notes;