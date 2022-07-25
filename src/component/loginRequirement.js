import React, { Component } from 'react'
import {Navigate} from 'react-router-dom';

export default class LoginRequirement extends Component {
  render() {
    return (
      <Navigate to='/login' replace></Navigate>
    )
  }
}
