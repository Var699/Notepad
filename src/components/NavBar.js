import React from 'react';
import "./NavBar.css"
const NavBar = ({ onSelectCategory }) => {
  const handleCategorySelect = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="navbar">
      <ul>
        <li onClick={() => handleCategorySelect('NOTE')}>Note</li>
        <li onClick={() => handleCategorySelect('DELETE')}>Delete</li>
        <li onClick={() => handleCategorySelect('EDIT')}>Edit</li>
        <li onClick={() => handleCategorySelect('TRASH')}>Trash</li>
      </ul>
    </div>
  );
};

export default NavBar;
