import React from 'react';
import './App.css';
import FirstHalf from './Components/firsthalf-component/FirstHalf.component';
import SecondHalf from './Components/secondhalf-component/SecondHalf.component'

const App = () => {
  return(
    <div className="app">
      <FirstHalf />
      <SecondHalf />
    </div>
  )
}

export default App;