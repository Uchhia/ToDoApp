import React from 'react';
import './AppContent.css';
import Header from '../Header/Header.js';
import AddItems from '../AddItems/AddItems.js';

function AppContent() {
  return (
    <div className='app-content'>
      <Header/>
      <AddItems/>
    </div>
  );
}

export default AppContent;
