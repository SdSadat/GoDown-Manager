import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Sidebar from './components/Sidebar';
import ItemDetails from './components/ItemDetails';
import Header from './components/Header';
import { getProtectedData, getToken } from './api';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  
  useEffect(() => {
    const token = getToken(); 
    if (token) {
      setAuthenticated(true);  // If a token exists, set user as authenticate
    }
  }, []);
  useEffect(() => {
    if (authenticated) {
      getProtectedData().then(data => {
        console.log('Protected data:', data);
      }).catch(err => {
        console.error('Access denied:', err);
      });
    }
  }, [authenticated]);

  if (!authenticated) {
    return <Auth setAuthenticated={setAuthenticated} />;
  }
  const handleLogout = () => {
    localStorage.removeItem('token');  
    setAuthenticated(false); 
  };
  return (
    <div className="app">
      <div className="sidebar-container">
    <Header onLogout={handleLogout} username='User' />
        <Sidebar setSelectedItem={setSelectedItem} />
      </div>
      <div className="main-container">
        <ItemDetails item={selectedItem} />
      </div>
    </div>
  );
};

export default App;
