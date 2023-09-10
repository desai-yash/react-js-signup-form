import './App.css';
import React from 'react';
import { SignupForm } from './components/signup/signup-form';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div>
        <h1 className='App-header'>My React</h1>
        </div>
        <div className='App-signup-form'>
          <h1 className='App-h1'>Register Yourself</h1>
          <SignupForm/>
        </div>
      </div>
    )
  }
}

export default App;
