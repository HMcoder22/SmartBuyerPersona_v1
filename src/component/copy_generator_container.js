import React, { Component } from 'react';
import CheckBox from './checkbox';
import InputType from './input_type';
import SelectionBox from './selection_box';
import { tone } from '../data/tone';

class CopyGeneratorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: {
                input: {},
                output: {}
            },
            checkbox_type: [{
                type: 'checkbox',
                id: 'product_checkbox',
                defaultChecked: false,
                checked: false,
                disable: false,
                label: {
                    name: 'Product',
                    id: 'product_label'
                }
            },
            {
                type: 'checkbox',
                id: 'service_checkbox',
                defaultChecked: false,
                checked: false,
                disable: false,
                label: {
                    name: 'Service',
                    id: 'service_label'
                }
            }],
            output_checkbox:[{
                type: 'checkbox',
                id: 'graphic_checkbox',
                defaultChecked: false,
                checked: false,
                disable: false,
                label: {
                    name: 'Graphics',
                    id: 'graphic_label'
                }
            },{
                type: 'checkbox',
                id: 'copy_checkbox',
                defaultChecked: false,
                checked: false,
                disable: false,
                label: {
                    name: 'Written Copy',
                    id: 'copy_label'
                }
            },{
                type: 'checkbox',
                id: 'hashtag_checkbox',
                defaultChecked: false,
                checked: false,
                disable: false,
                label: {
                    name: 'Hashtag',
                    id: 'hashtag_label'
                }
            }],
            input_type:{
                type: 'textarea',
                placeholder: 'Please select one of two options!',
                id: 'description'
            },
            selection_box: {
                id: 'category',
                placeholder: 'Select Tone',
                options: []
            }
        }
    }

    state = {  } 
    render() {
        // Adding all the tones to the selection box's options
        for(const element of tone){
            this.state.selection_box.options.push({
                value: element,
                id: element,
                placeholder: element,
            })
        }
        return (
            <div className='main_content'>
                <div className='copy_generator_wrapper'>
                    <div className='input'>
                        <div className='label_wrapper' id='copy_generator_label_wrapper'><label className='label' id='copy_generator_label'>Copy Generator</label></div>
                        <form className='form' onSubmit={(event) => this.handleSubmit(event, '/validation')}>
                            <div className='checkbox_wrapper'>
                                <CheckBox {...this.state.checkbox_type[0]} onChange={(event) => this.handleChange(event)}></CheckBox>
                                <CheckBox {...this.state.checkbox_type[1]} onChange={(event) => this.handleChange(event)}></CheckBox>
                            </div>
                            <div className='target_description'>
                                <div className='label_wrapper'><label className='label' id='description_label'>Description</label></div>
                                <InputType {...this.state.input_type}></InputType>
                            </div>
                            <ul id='tone_and_output_type'>
                                <li>
                                    <div className='label_wrapper'><label className='label' id='tone_label'>Tone</label></div>
                                    <SelectionBox {...this.state.selection_box}></SelectionBox>
                                </li>
                                <ul className='output_type'>
                                    <li>
                                        <div className='label_wrapper'><label className='label' id='output_label'>Output Type</label></div>
                                    </li>
                                    <li>
                                        <CheckBox {...this.state.output_checkbox[0]} onChange={(event) => this.handleSelect(event)}></CheckBox>
                                        <CheckBox {...this.state.output_checkbox[1]} onChange={(event) => this.handleSelect(event)}></CheckBox>
                                        <CheckBox {...this.state.output_checkbox[2]} onChange={(event) => this.handleSelect(event)}></CheckBox>
                                    </li>
                                </ul>
                            </ul>
                            <div className='button_wrapper' id='generate_wrapper'><button className='button' type='submit' id='generate'>Generate</button></div>
                        </form>
                    </div>
                    <div className='output'>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleChange(event){
        // Switch flag checked in checkbox of the event
        this.setState(prevState => ({
            checkbox_type: prevState.checkbox_type.map(
                o => o.id === event.target.id ? {...o, checked: !o.checked} : o
            )  
        }))

        // Disable all other checkboxes besides the current clicked checkbox
        this.setState(prevState => ({
            checkbox_type: prevState.checkbox_type.map(
                o => (o.id !== event.target.id && event.target.checked) ? {...o, disabled: true} : o
            )  
        }))

        // Enable all checkboxes if no checkbox is checked
        this.setState(prevState => ({
            checkbox_type: prevState.checkbox_type.map(
                o => (o.id !== event.target.id && !event.target.checked) ? {...o, disabled: false} : o
            )  
        }))

        this.setState({input: event.target});
        this.setState(prevState => ({
            input_type: {
                ...prevState.input_type,
                placeholder: (!event.target.checked) ? "Please select one of the two options!" : (event.target.id === 'product_checkbox') ? "Enter the product's description" : "Enter the service's description"
            }
        }))
    }

    handleSelect(event){
        // Switch flag checked in checkbox of the event
        this.setState(prevState => ({
            output_checkbox: prevState.output_checkbox.map(
                o => o.id === event.target.id ? {...o, checked: !o.checked} : o
            )  
        }))
        
        // Disable all other checkboxes besides the current clicked checkbox
        this.setState(prevState => ({
            output_checkbox: prevState.output_checkbox.map(
                o => (o.id !== event.target.id && event.target.checked) ? {...o, disabled: true} : o
            )  
        }))

        // Enable all checkboxes if no checkbox is checked
        this.setState(prevState => ({
            output_checkbox: prevState.output_checkbox.map(
                o => (o.id !== event.target.id && !event.target.checked) ? {...o, disabled: false} : o
            )  
        }))
    }

    handleSubmit(event, url){
        alert("handdling submit");
        event.preventDefault();
    }
}
 
export default CopyGeneratorContainer;