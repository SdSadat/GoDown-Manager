import React from 'react';

const Header = ({ onLogout, username }) => {
  return (
    <header className="app-header">
      <h1 className="app-title">GoDown Manager</h1>
      <div className="header-right">
        {username && <span className="profile-info">Welcome, {username}!</span>}
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
