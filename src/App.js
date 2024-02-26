import React, { useState } from 'react';
import './App.css'; // You can include your CSS styling

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [firstNameWarning, setFirstNameWarning] = useState('');
  const [lastNameWarning, setLastNameWarning] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFirstNameWarning('');
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setLastNameWarning('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both first name and last name are filled
    if (firstName.trim() === '') {
      setFirstNameWarning('Please enter your first name.');
    }

    if (lastName.trim() === '') {
      setLastNameWarning('Please enter your last name.');
    }

    if (firstName.trim() !== '' && lastName.trim() !== '') {
      const fullNameResult = `${firstName} ${lastName}`;
      setFullName(fullNameResult);
      setFirstNameWarning('');
      setLastNameWarning('');
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
          {firstNameWarning && <span style={{ color: 'red' }}>{firstNameWarning}</span>}
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
          {lastNameWarning && <span style={{ color: 'red' }}>{lastNameWarning}</span>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
    </div>
  );
}

export default App;
