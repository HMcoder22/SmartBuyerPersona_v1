import React, { Component } from 'react';
import InputType from './input_type';
import SelectionBox from './selection_box';
import OrComponent from './or_label';
import Transition from './transition';
import Arrow from '../CSS/img/arrow.png';
import Chart from '../CSS/img/chart.png';
import Tools from '../CSS/img/tools.png';
import axios from 'axios';

class DemoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            gender: '',
            age: 0,
            occupation: '',
            country: '',
            states: '',
            input_type: [{
                type: 'text',
                placeholder: "Enter the prospect's age",
                id: 'age'
            },
            {
                type: 'text',
                placeholder: "Enter zipcode",
                id: 'zipcode'

            }],

            selection_box: [
            {
                id: 'gender',
                placeholder: 'Select Gender',
                options: [{
                    value: 'male',
                    id: 'male',
                    placeholder: 'Male'
                },
                {
                    value: 'female',
                    id: 'female',
                    placeholder: 'Female'
                }]
            },
            {
                id: 'country',
                placeholder: 'Select Country',
                options: [{
                    value: 'usa',
                    id: 'usa',
                    placeholder: 'United States'
                }]
            },
            {
                id: 'states',
                placeholder: 'Select States',
                options: []
            },
            {
                id: 'occupation',
                placeholder: 'Select occupation',
                options: []
            }],

            transition_tools: [{
                url: '/dashboard',
                tool: {
                    id: 'dashboard_transition',
                    type: 'dashboard',
                    img: Chart
                },
                arrow: {
                    direction: 'left',
                    img: Arrow
                }
            },
            {
                url: '/tool_homepage',
                tool: {
                    id: 'tools_homepage_transition',
                    type: 'tools_homepage',
                    img: Tools
                },
                arrow: {
                    direction: 'right',
                    img: Arrow
                }
            }]
        }
    }

    render() {
        /**Getting all states from usa to add to options */
        let json_file = require('../datasets/states_occupation.json');
        if(this.state.selection_box[2].options.length === 0){
            for(const element of json_file){
                const state_name_arr = element.state.split("_");
                let state_name = ""

                // Adding spaces to state name
                for(let i = 0; i < state_name_arr.length; i++){
                    if(i === 0) state_name += state_name_arr[i];
                    else{
                        state_name += " ";
                        state_name += state_name_arr[i];
                    }
                }

                this.state.selection_box[2].options.push({
                    value: element.state,
                    id: element.state,
                    placeholder: state_name,
                    key: element.state_name
                })
            }
            
            for(const element of json_file[0].occupation){
                this.state.selection_box[3].options.push({
                    value: element.job,
                    id: element.job,
                    placeholder: element.job,
                    key: element.job
                })
            }
        }



        // Sorting ascending manner according to first character of the state
        this.state.selection_box[2].options.sort((a, b) => {return a.value.charCodeAt(0) - b.value.charCodeAt(0)});
        
        return (
            <div className="main_content">
                <div className="form_wrapper">
                    <form className='form' onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="label_wrapper"><span className="label" id="prospect's label">You are searching for prospects by...</span></div>
                        <ul>
                            <li className='first-item'>
                                <div>
                                    <label className='label' id='gender_label'>Gender</label>
                                    <SelectionBox {...this.state.selection_box[0]} onChange={(e) => this.handleChange(e)}></SelectionBox>
                                </div>
                            </li>
                            <li className='middle-item'>
                                <div>
                                    <label className='label' id='age_label'>Age</label>
                                    <InputType {...this.state.input_type[0]} onChange={(e) => this.handleChange(e)}/>                                    
                                </div>
                                <div>
                                    <label className='label' id='occupation'>Occupation</label>
                                    <SelectionBox {...this.state.selection_box[3]} onChange={(e) => this.handleChange(e)}></SelectionBox>
                                </div>
                            </li>
                            <li className='last-items'>
                                <div>
                                    <label className='label' id='country_label'>Country</label>
                                    <SelectionBox {...this.state.selection_box[1]} onChange={(e) => this.handleChange(e)}></SelectionBox>
                                </div>
                                <div>
                                    <label className='label' id='state_label'>State/Province</label>
                                    <SelectionBox {...this.state.selection_box[2]} onChange={(e) => this.handleChange(e)}></SelectionBox>
                                </div>
                                <div>
                                    <label className='label' id='zipcode_label'>Zip Code</label>
                                    <InputType {...this.state.input_type[1]} onChange={(e) => this.handleChange(e)}></InputType>
                                </div>
                            </li>
                        </ul>
                        <button type='submit' name='submit'>Submit</button>
                    </form>
                    <OrComponent label="Search by product's details" url="/product_form"></OrComponent>
                    <div className='transition_tools_wrapper'>
                        <ul>
                            <Transition {...this.state.transition_tools[0]}></Transition>
                            <Transition {...this.state.transition_tools[1]}></Transition>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios
            .post("http://localhost:3000/home", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }
}
 
export default DemoForm;

