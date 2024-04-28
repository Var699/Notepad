import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote } from '../actions';

const EditNote = ({ note }) => {
  const [content, setContent] = useState(note.content);
  const dispatch = useDispatch();

  const handleEditNote = () => {
    dispatch(editNote({ ...note, content }));
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
      />
      <button onClick={handleEditNote}>Save Changes</button>
    </div>
  );
};

export default EditNote;
