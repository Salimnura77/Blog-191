import React, { useState } from 'react';

const Phonebook = () => {
  const [filter, setFilter] = useState('');
  
  const handleInputChange = (event) => {
    setFilter(event.target.value.toUpperCase());
  };

  return (
    <div>
      <h2>My Phonebook</h2>

      <input
        type="text"
        id="myInput"
        onChange={handleInputChange}
        placeholder="Search for names.."
        title="Type in a name"
      />

      <ul id="myUL">
        <li><a href="#">Adele</a></li>
        <li><a href="#">Agnes</a></li>
        <li><a href="#">Billy</a></li>
        <li><a href="#">Bob</a></li>
        <li><a href="#">Calvin</a></li>
        <li><a href="#">Christina</a></li>
        <li><a href="#">Cindy</a></li>
      </ul>

      <ul id="myUL">
        {['Adele', 'Agnes', 'Billy', 'Bob', 'Calvin', 'Christina', 'Cindy'].map((name, index) => (
          <li key={index} style={{ display: name.toUpperCase().indexOf(filter) > -1 ? '' : 'none' }}>
            <a href="#">{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;
