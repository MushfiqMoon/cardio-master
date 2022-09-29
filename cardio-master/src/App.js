import React, { useState } from 'react'
import './App.css';
import Activities from './components/Activities/Activities';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [durations, setDurations] = useState("")

  const handleCardioAdd = (event, time) => {

    event.target.classList.add('bg-secondary')
    event.target.classList.remove('bg-warning')
    event.target.innerHTML = "Added"

    const newTime = [...durations, time]
    setDurations(newTime)
    console.log(durations);
  }

  return (
    <>
      <div className='main-body-area'>
        <div className="content-area">
          <Activities handleCardioAdd={handleCardioAdd} />
        </div>
        <div className="sidebar-area bg-light">
          <Sidebar durations={durations} />
        </div>

      </div>
    </>

  );
}

export default App;
