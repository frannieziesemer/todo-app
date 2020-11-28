import React from 'react';
import Header from '../header/header.component';
import './app-wrapper.css';

function AppWrapper ( { children }) {
  return (
    <div className="app-wrapper container">
      <Header></Header>
      <div className="columns"> {children} </div>
    </div>
  )
}

export default AppWrapper;