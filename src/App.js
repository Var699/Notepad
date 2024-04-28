import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, pinNote, deleteNote } from './actions';
import NoteForm from './components/NoteForm';
import NavBar from './components/NavBar';
import Notes from './components/Notes'; 
import DeletedNotes from './components/DeletedNotes'; 
import EditNote from './components/EditNote'; 

function App() {
  const [selectedCategory, setSelectedCategory] = useState('NOTE');
  const [selectedNote, setSelectedNote] = useState(null);
  const dispatch = useDispatch();

  const handleAddNote = (note) => {
    dispatch(addNote(note));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <NavBar onSelectCategory={handleCategorySelect} />
      {selectedCategory === 'NOTE' && (
        <div>
          <h1>Note Taking App</h1>
          <NoteForm onSubmit={handleAddNote} />
          <Notes />
        </div>
      )}
      {selectedCategory === 'DELETE' && (
        <div>
          <h1>Deleted Notes</h1>
          <DeletedNotes />
        </div>
      )}
      {selectedCategory === 'EDIT' && (
        <div>
          <h1>Edit Note</h1>
          {selectedNote && <EditNote note={selectedNote} />}
        </div>
      )}
    </div>
  );
}

export default App;
