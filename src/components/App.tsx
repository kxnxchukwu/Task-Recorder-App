import React from 'react';
import './App.css';
import Calendar from './Calendar';
import Recorder from './Recorder';

const App: React.FC = () => {
  return (
  <div className="App">
    <div className='center'>Get Your Life in Order with the Task Recorder App</div>
    <Recorder/>
    <Calendar/>
  </div>
  );
};

export default App;
