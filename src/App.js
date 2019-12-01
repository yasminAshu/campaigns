import React from 'react';
import './css/style.css'
import Header from './component/Header'
import Campaigns from './component/Campaigns'
const App = () => {
 
  return (
    <div className = "container">
    <Header />
    <div className = "main-container">
      <h1 className = "manage-campaigns">Manage Campians</h1>
      <Campaigns />
    </div>
  </div>
  )
    
  
};

export default App;
