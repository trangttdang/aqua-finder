import React, { Component }  from 'react';
import Sidebar from './components/sidebar/Sidebar';
import "./app.css"
import Mainpage from './page/Mainpage'

function App() {
  return (
    <div>
      <div className = "container">
        <Sidebar />
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
