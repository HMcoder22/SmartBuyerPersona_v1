import React, { Component } from 'react';
import Globe from '../CSS/img/globe.png';
import Arrow from '../CSS/img/arrow.png';
import Chart from '../CSS/img/chart.png';
import Setting from '../CSS/img/settings.png';
import Form from '../CSS/img/form.png'
import ToolIcon from './tool_icon';
import Transition from './transition';

class ToolsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            icon: [{
                img: Globe,
                url: '/copy_generator',
                label: {
                    name: 'Copy Generator',
                    id: 'copy_generator_icon'
                }
            },{
                img: Chart,
                url: '/dashboard',
                label: {
                    name: 'Dashboard',
                    id: 'dashboard_icon'
                }
            },{
                img: Setting,
                url: '/setting',
                label: {
                    name: 'Setting',
                    id: 'setting_icon'
                }
            }],
            transition_tools: {
                url: '/home',
                tool: {
                    id: 'form_transition',
                    type: 'form',
                    img: Form
                },
                arrow: {
                    direction: 'left',
                    img: Arrow
                }
            }
        }
    }
    state = {  } 
    render() { 
        return (
            <div className='tool_wrapper'>
                <div className='tool_container'>
                    <div className='label_wrapper'>
                        <label className='label' id='tool_homepage_label'>Tools Homepage</label>
                    </div>
                    <ul>
                        <li><ToolIcon {...this.state.icon[0]}></ToolIcon></li>
                        <li><ToolIcon {...this.state.icon[1]}></ToolIcon></li>
                        <li><ToolIcon {...this.state.icon[2]}></ToolIcon></li>
                    </ul>
                    <div className='temp_container'></div>
                    <div className='transition_tools_wrapper'>
                        <ul>
                            <Transition {...this.state.transition_tools}></Transition>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ToolsContainer;