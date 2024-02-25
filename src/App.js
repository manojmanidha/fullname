import './App.css';
// import useState from 'react';
import React, { useState } from 'react';

// function validateInput(){
//   if()
// }

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [warningMessages, setWarningMessages] = useState({
    firstName: '',
    lastName: '',
  });
  const [fullName, setFullName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const newWarningMessages = {};

    if (!firstName.trim()) {
      newWarningMessages.firstName = 'Please fill out this field.';
    }

    if (!lastName.trim()) {
      newWarningMessages.lastName = 'Please fill out this field.';
    }

    if (Object.keys(newWarningMessages).length === 0) {
      setFullName(`${firstName} ${lastName}`);
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
      setWarningMessages(newWarningMessages);
    }
  };

  return (
    <div>
      <form>
        <h1>Full Name Display</h1>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            setWarningMessages((prevWarnings) => ({
              ...prevWarnings,
              firstName: '',
            }));
          }}
          required
        />
        <br />
        {warningMessages.firstName && (
          <p style={{ color: 'red' }}>{warningMessages.firstName}</p>
        )}

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            setWarningMessages((prevWarnings) => ({
              ...prevWarnings,
              lastName: '',
            }));
          }}
          required
        />
        <br />
        {warningMessages.lastName && (
          <p style={{ color: 'red' }}>{warningMessages.lastName}</p>
        )}

        <button type="button" onClick={submitForm}>
          Submit
        </button>
      </form>

      {formSubmitted && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default App;
