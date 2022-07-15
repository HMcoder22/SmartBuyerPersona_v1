import './App.css';
import React, { Component } from 'react';
import NavBar from './component/nav'
import DemoForm from './component/demo_form';
import { Navigate } from 'react-router-dom';


class App extends Component {
  state = {  } 
  render() { 
    document.title = "Homepage"
    
    if(sessionStorage.getItem('loginSuccess')){
      return (
        <div className='App'>
          <NavBar/>
          <DemoForm/>
          <div className='footer'>
            <div className='label_wrapper'><span className='label' id='label_copyright'>Copyright 2022</span></div>
          </div>
        </div>
      );
    }
    else{
      return(      
        <Navigate to='/login'></Navigate>
      );
    }
  }
}
 
export default App;
