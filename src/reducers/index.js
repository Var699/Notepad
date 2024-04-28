const initialState = {
    notes: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          notes: [...state.notes, { ...action.payload, id: Date.now() }]
        };
      case 'PIN_NOTE':
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.id === action.payload ? { ...note, pinned: true } : note
          )
        };
      case 'DELETE_NOTE':
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  