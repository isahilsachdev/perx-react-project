import React, { useState } from 'react';

const UserInput = ({ onUserSubmit, isLoading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserSubmit(username);
  };

  return (
    <div className="user-input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="user-input"
        />
        <button disabled={!username} type="submit" className="user-button">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            'Search'
          )}
        </button>
      </form>
    </div>
  );
};

export default UserInput;
