import './App.css';
import React from 'react';
import Logo from './Logo';
import Headings from './Headings';
import Student from './Student';

function App() {
  return (
    <React.Fragment>
      <div className='App-div'>
        <Logo />
        <Headings />
        <Student 
          studentId='101376641' 
          name='Sarah Moustafa'
          college='George Brown College, Toronto'
        />

      </div>        
    </React.Fragment>
  );
}

export default App;
