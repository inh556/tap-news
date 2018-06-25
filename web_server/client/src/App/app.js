import  React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component{
  render() {
    return(
      <div>
      <img className='logo' src={logo} alt='logo' />
      <div className='container'>
      </div>
      </div>
    )
  }
}

export default App;