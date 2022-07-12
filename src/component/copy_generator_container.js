import React, { Component } from 'react';
import CheckBox from './checkbox';
import InputType from './input_type';
import SelectionBox from './selection_box';
import { tone } from '../data/tone';
import CopyContent from './copy_content';
import axios from 'axios';
import { cwcontents } from '../data/copy_generator_written';
import { chcontents } from '../data/copy_generator_hashtag';
import { cgcontents } from '../data/copy_generator_graphics';


class CopyGeneratorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            generated: false,
            output: [],
            product_or_services: "",
            gch: "",                            // graphics, copy, or hashtags
            description: "",
            tone: "",
            checkbox_type: [{
                type: 'checkbox',
                id: 'product_checkbox',
                defaultChecked: false,
                checked: false,
                disable: false,
                name: "product",
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
                name: "service",
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
                name: "graphic",
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
                name: "copy",
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
                name: 'hashtags',
                label: {
                    name: 'Hashtag',
                    id: 'hashtag_label'
                }
            }],
            input_type:{
                type: 'textarea',
                placeholder: 'Please select one of two options!',
                id: 'description',
                name: 'description'
            },
            selection_box: {
                id: 'category',
                placeholder: 'Select Tone',
                options: [],
                name: "tone"
            }
        }
    }

    state = {  } 
    render() {
        console.log(this.state.output);

        if(this.state.selection_box.options.length === 0){
            // Adding all the tones to the selection box's options
            for(const element of tone){
                this.state.selection_box.options.push({
                    value: element,
                    id: element,
                    placeholder: element,
                    key: element
                })
            }
        }
        
        return (
            <div className='main_content'>
                <div className='copy_generator_wrapper'>
                    <div className='input'>
                        <div className='label_wrapper' id='copy_generator_label_wrapper'><label className='label' id='copy_generator_label'>Copy Generator</label></div>
                        <form className='form' onSubmit={(event) => this.handleSubmit(event)}>
                            <div className='checkbox_wrapper'>
                                <CheckBox {...this.state.checkbox_type[0]} onChange={(event) => this.handleChange(event)}></CheckBox>
                                <CheckBox {...this.state.checkbox_type[1]} onChange={(event) => this.handleChange(event)}></CheckBox>
                            </div>
                            <div className='target_description'>
                                <div className='label_wrapper'><label className='label' id='description_label'>Description</label></div>
                                <InputType {...this.state.input_type} onChange={(event) => this.handleChange(event)}></InputType>
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
                        <div className='result_window'>
                            {this.state.output}
                            <div className='button_wrapper' id='generate_more_wrapper'><button className='button' type='button' id='generate_more'>More</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // // Generating content
    // generateContent(max_contents){
    //     // Copy
    //     if(this.state.gch.id === 'copy_checkbox' && this.state.gch.checked){
    //         return cwcontents.map((items, key) => {
    //             if(key < max_contents){
    //                 return(
    //                     <CopyContent {...items} key={key}></CopyContent>
    //                 )
    //             }
    //             return(
    //                 <React.Fragment key={key}></React.Fragment>
    //             )
    //         })
    //     }
        
    //     // Hashtag
    //     if(this.state.gch.id === 'hashtag_checkbox' && this.state.gch.checked){
    //         return chcontents.map((items, key) => {
    //             if(key < max_contents){
    //                 return(
    //                     <CopyContent {...items} key={key}></CopyContent>
    //                 )
    //             }
    //             return(
    //                 <React.Fragment key={key}></React.Fragment>
    //             )
    //         })
    //     }

    //     // Graphic
    //     if(this.state.gch.id === 'graphic_checkbox' && this.state.gch.checked){
    //         return cgcontents.map((items, key) => {
    //             if(key < max_contents){
    //                 return(
    //                     <CopyContent {...items} key={key}></CopyContent>
    //                 )
    //             }
    //             return(
    //                 <React.Fragment key={key}></React.Fragment>
    //             )
    //         })
    //     }
    // }

    // Handling generating function
    // handleGenerate(){
    //     this.setState({max_contents: 5});
    //     let copy_content = this.generateContent(5);
    //     this.setState(prevState => ({
    //         ...prevState,
    //         output: copy_content
    //     }))
    // }

    // Handling product and services check box
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

        if(event.target.id === "description"){
            this.setState({description: event.target.value});
        }
        
        if(event.target.name === 'product' || event.target.name === 'service')
            this.setState({product_or_services: event.target.id});
        
        this.setState(prevState => ({
            input_type: {
                ...prevState.input_type,
                placeholder: (!event.target.checked) ? "Please select one of the two options!" : (event.target.id === 'product_checkbox') ? "Enter the product's description" : "Enter the service's description"
            },
            selection_box: {
                ...prevState.selection_box,
                options: []
            }
        }))
    }

    // Handling selection for output type of graphics, tags, and copy
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

        this.setState({gch: event.target.id})
    }

    // Handling submission
    handleSubmit(e){
        e.preventDefault();
        if(this.state.gch === ""){
            alert("Please select at least one option: product or service!")
            return;
        }
        if(this.state.description === "" && this.state.product_or_services === "product_checkbox"){
            alert("Please enter a product's description");
            return;
        }
        if(this.state.description === ""){
            alert("Please enter a service's description");
            return;
        }

        const type = (this.state.gch === 'graphic_checkbox') ? "graphic" : (this.state.gch === 'copy_checkbox') ? 'written' : 'hashtag'
        const url = `http://localhost:4000/copy_generator/${type}`
        axios.post(url, this.state)
        .then(res => {
            const output = res.data.body.data.map((items, key) =>{
                return <CopyContent {...items} key={key}></CopyContent>
            })
            this.setState({output: output});
            if(!this.state.generated){
                document.getElementsByClassName("result_window")[0].classList.toggle("active");
                this.setState({generated: true});
            } 
        })
        .catch(err => {
            console.log(err);
        })
    }

    // Increment the maximum contents the application can display
    // handleMore(){
    //     if(this.state.max_contents < cwcontents.length)
    //         this.setState({max_contents: this.state.max_contents + 5});
    //     let copy_content = this.generateContent(this.state.max_contents + 5);
    //     this.setState(prevState => ({
    //         ...prevState,
    //         output: copy_content
    //     }))
    // }
}
 
export default CopyGeneratorContainer;