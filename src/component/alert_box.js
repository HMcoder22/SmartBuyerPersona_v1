import React, { Component } from 'react'

export default class AlertBox extends Component {
  render() {
    return (
        <div className='alert_text'>
            <span className='alert' id={this.props.id}>{this.props.alert}</span>
        </div>
    )
  }
}
