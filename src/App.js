import './App.css';
// import useState from 'react';
import React, { useState } from 'react';

// function validateInput(){
//   if()
// }

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const submitForm = () => {
    if (firstName && lastName) {
      // alert(`Full Name: ${firstName} ${lastName}`);
      // You can perform additional actions here, like updating the state or making an API call.
    } else {
      setWarningMessage('Please fill out this field.');
    }
  };

  const clearWarning = () => {
    setWarningMessage('');
  };

  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            clearWarning();
          }}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            clearWarning();
          }}
          required
        />
        <br />
        <button type="button" onClick={submitForm}>
          Submit
        </button>
        
      </form>
     
        {firstName && lastName && <h5>Full Name: {firstName} {lastName}</h5>}
      {warningMessage && <p style={{ color: 'red' }}>{warningMessage}</p>}
    </div>
  );
}

export default App;
