import React, { Component} from 'react';
import CheckBox from './checkbox';
import InputType from './input_type';
import SelectionBox from './selection_box';
import OrComponent from './or_label';
import Transition from './transition';
import Arrow from '../CSS/img/arrow.png'
import Chart from '../CSS/img/chart.png'
import Tools from '../CSS/img/tools.png'

class ProductForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: {},
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
            selection_box: {
                id: 'category',
                placeholder: 'Select',
                options: []
            },
            input_type: [{
                type: 'text',
                placeholder: "Enter price range",
                id: 'lowest_price'
            },
            {
                type: 'text',
                placeholder: "Enter price range",
                id: 'highest_price'
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
        };
    }
    
    render() { 
        let product_catalog = [{type: 'Tools'}, {type: 'Household'}]
        let service_catalog = [{type: 'Massage'}, {type: 'Flight'}]

        // Dynamic options for selection box
        if(this.state.selected.checked){
            if(this.state.selected.id === 'product_checkbox'){
                for(const element of product_catalog){
                    this.state.selection_box.options.push({
                        value: element.type,
                        id: element.type,
                        placeholder: element.type
                    })
                }
            }
            else if(this.state.selected.id === 'service_checkbox'){
                for(const element of service_catalog){
                    this.state.selection_box.options.push({
                        value: element.type,
                        id: element.type,
                        placeholder: element.type
                    })
                }
            }
        }

        return (
            <div className='main_content'>
                <div className='form_wrapper'>
                    <form className='form' onSubmit={(event) => this.handleSubmit(event, '/validation')}>
                        <div className="label_wrapper"><span className="label" id="prospect's label">You are searching for prospects by...</span></div>
                        <ul>
                            <li className='first-item'>
                                <div>
                                    <label className='label' id='select_label'>Select</label>
                                    <div className='checkbox_wrapper'>
                                        <CheckBox {...this.state.checkbox_type[0]} onChange={(event) => this.handleChange(event)}></CheckBox>
                                        <CheckBox {...this.state.checkbox_type[1]} onChange={(event) => this.handleChange(event)}></CheckBox>
                                    </div>
                                </div>
                            </li>
                            <li className='middle-item'>
                                <div>
                                    <label className='label' id='category_label'>Category</label>
                                    <SelectionBox {...this.state.selection_box}></SelectionBox>
                                </div>
                            </li>
                            <li className='last-item'>
                                <div>
                                    <label className='label' id='lowest_label'>From</label>
                                    <InputType {...this.state.input_type[0]}></InputType>
                                </div>
                                <div>
                                    <label className='label' id='highest_label'>To</label>
                                    <InputType {...this.state.input_type[1]}></InputType>
                                </div>
                            </li>
                        </ul>
                        <button type='submit' name='submit'>Submit</button>
                    </form>
                    <OrComponent label="Search by prospects' demographics" url='/home'></OrComponent>
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
    
    // Handling changes in check box
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
        
        this.setState({selected: event.target});

        // Dynamic Selection
        this.setState(prevState => ({
            selection_box: {
                ...prevState.selection_box,
                placeholder: (!event.target.checked) ? "Select" : (event.target.id === 'product_checkbox') ? "Select Product" : "Select Service",
                options: (event.target.checked) ? prevState.selection_box.options : []
            }
        }))
    }
    handleSubmit(event, url){
        alert("Handling Submission");
        event.preventDefault();
    }
}
 
export default ProductForm;