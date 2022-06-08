import React, { Component } from 'react';
import HeartInactive from '../CSS/img/heart_no_click.png'
import StarInactive from '../CSS/img/star.png'
import Copy from '../CSS/img/copy.png'
import CPH from './copy_star_heart';

class CopyContent extends Component {
    state = {  } 
    render() {
        if(this.props.type !== 'graphics'){ 
            return (
                <div className='copy_content_wrapper' id={this.props.type + '_text_content'}>
                    <span className='copy_content' id={this.props.type}>{this.props.value}</span>
                    <CPH star={StarInactive} copy={Copy} heart={HeartInactive}></CPH>
                </div>
            );
        }

        return (
            <div className='copy_content_wrapper' id='non-text_wrapper'>
                <img className='copy_generator_graphics' src={this.props.value} id={this.props.type} alt='copy_content'></img>
                <CPH star={StarInactive} copy={Copy} heart={HeartInactive}></CPH>
            </div>
        )
    }
}
 
export default CopyContent;