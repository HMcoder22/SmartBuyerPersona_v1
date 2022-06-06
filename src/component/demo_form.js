import React, { Component } from 'react';
import InputType from './input_type';
import SelectionBox from './selection_box';
import OrComponent from './or_label';
import Transition from './transition';
import Arrow from '../CSS/img/arrow.png'
import Chart from '../CSS/img/chart.png'
import Tools from '../CSS/img/tools.png'


class DemoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        let json_file = require('../datasets/cso68-rc4a6.json');
        let uniq = new Set();
        for(const element of json_file){
            if(!uniq.has(element.state_name)){
                this.state.selection_box[2].options.push({
                    value: element.state_name,
                    id: element.state_id,
                    placeholder: element.state_name
                })
                uniq.add(element.state_name);
            }
        }

        // Sorting ascending manner according to first character of the state
        this.state.selection_box[2].options.sort((a, b) => {return a.value.charCodeAt(0) - b.value.charCodeAt(0)});
        return (
            <div className="main_content">
                <div className="form_wrapper">
                    <form className='form' onSubmit={(event) => this.handleSubmit(event, '/validation')}>
                        <div className="label_wrapper"><span className="label" id="prospect's label">You are searching for prospects by...</span></div>
                        <ul>
                            <li className='first-item'>
                                <div>
                                    <label className='label' id='gender_label'>Gender</label>
                                    <SelectionBox {...this.state.selection_box[0]}></SelectionBox>
                                </div>
                            </li>
                            <li className='middle-item'>
                                <div>
                                    <label className='label' id='age_label'>Age</label>
                                    <InputType {...this.state.input_type[0]}/>
                                </div>
                            </li>
                            <li className='last-items'>
                                <div>
                                    <label className='label' id='country_label'>Country</label>
                                    <SelectionBox {...this.state.selection_box[1]}></SelectionBox>
                                </div>
                                <div>
                                    <label className='label' id='state_label'>Label</label>
                                    <SelectionBox {...this.state.selection_box[2]}></SelectionBox>
                                </div>
                                <div>
                                    <label className='label' id='zipcode_label'>Zip Code</label>
                                    <InputType {...this.state.input_type[1]}></InputType>
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

    handleSubmit(event, url){
        alert("Handling Submission");
        event.preventDefault();
    }
}
 
export default DemoForm;

