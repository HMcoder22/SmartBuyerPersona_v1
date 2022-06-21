import React, { Component } from 'react';
import InputType from './input_type';
import SelectionBox from './selection_box';
import OrComponent from './or_label';
import Transition from './transition';
import Arrow from '../CSS/img/arrow.png';
import Chart from '../CSS/img/chart.png';
import Tools from '../CSS/img/tools.png';
import axios from 'axios';
import {Navigate} from 'react-router-dom'

class DemoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            gender: '',
            age: 0,
            occupation: '',
            industry: '',
            country: '',
            state: '',
            redirect: false,
            input_type: [{
                type: 'text',
                placeholder: "Enter the prospect's age",
                id: 'age',
                name: 'age'
            },
            {
                type: 'text',
                placeholder: "Enter zipcode",
                id: 'zipcode',
                name: 'zipcode'
            }],

            selection_box: [
            {
                id: 'gender',
                placeholder: 'Select Gender',
                name: 'gender',
                options: [{
                    value: 'Male',
                    id: 'male',
                    placeholder: 'Male'
                },
                {
                    value: 'Female',
                    id: 'female',
                    placeholder: 'Female'
                }]
            },
            {
                id: 'country',
                placeholder: 'Select Country',
                name: 'country',
                options: [{
                    value: 'USA',
                    id: 'usa',
                    placeholder: 'United States',
                }]
            },
            {
                id: 'state',
                placeholder: 'Select State',
                name: 'state',
                options: []
            },
            {
                id: 'occupation',
                placeholder: 'Select occupation',
                name: 'occupation',
                options: []
            },{
                id: 'industry',
                placeholder: 'Select Industry',
                name: 'industry',
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
        if(this.state.redirect){
            return <Navigate to='/persona'></Navigate>
        }

        let json_file = require('../datasets/states_occupations_no_income.json');
        let industry = require('../datasets/industry.json');

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
                    key: element.state_name,
                    name: 'state'
                })
            }
        }

        if(this.state.selection_box[3].options.length === 0){
            for(const element of json_file){
                if(element.state === this.state.state || (element.state === 'Alabama' && this.state.state === '')){
                    for(const occupation of element.occupation){
                        this.state.selection_box[3].options.push({
                            value: occupation,
                            id: occupation,
                            placeholder: occupation,
                            key: occupation
                        })
                    }
                }
            }
        }

        if(this.state.selection_box[4].options.length === 0){
            for(const element of industry){
                this.state.selection_box[4].options.push({
                    value: element.industry,
                    id: element.industry,
                    placeholder: element.industry,
                    key: element.industry,
                })
            }
        }

        // Sorting ascending manner according to the first character of the job
        this.state.selection_box[3].options.sort((a,b) => a.value.charCodeAt(0) - b.value.charCodeAt(0))



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
                                    <label className='label' id='gender_label'>Gender</label><span className='asterisk'>*</span>
                                    <SelectionBox {...this.state.selection_box[0]} onChange={(e) => this.handleChange(e)}></SelectionBox>
                                </div>
                            </li>
                            <li className='middle-item'>
                                <div>
                                    <label className='label' id='age_label'>Age</label><span className='asterisk'>*</span>
                                    <InputType {...this.state.input_type[0]} onChange={(e) => this.handleChange(e)}/>                                    
                                </div>
                                <div>
                                    <label className='label' id='industry'>Industry</label>
                                    <SelectionBox {...this.state.selection_box[4]} onChange={(e) => this.handleChange(e)}></SelectionBox>
                                </div>
                                <div>
                                    <label className='label' id='occupation'>Occupation</label><span className='asterisk'>*</span>
                                    <SelectionBox {...this.state.selection_box[3]} onChange={(e) => this.handleChange(e)}></SelectionBox>
                                </div>
                            </li>
                            <li className='last-items'>
                                <div>
                                    <label className='label' id='country_label'>Country</label><span className='asterisk'>*</span>
                                    <SelectionBox {...this.state.selection_box[1]} onChange={(e) => this.handleChange(e)}></SelectionBox>
                                </div>
                                <div>
                                    <label className='label' id='state_label'>State/Province</label><span className='asterisk'>*</span>
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
        axios.post("https://splendorous-dieffenbachia-f3bbe0.netlify.app/.netlify/functions/api", this.state)
        // axios.post("http://localhost:4000/api", this.state)
        .then(res => {
            // Successfully validating the data
            if(res.data.error === undefined){     
                const {gender, age, country, state, occupation, income, img, name, goals, challenges, biography, marital} = res.data;
                sessionStorage.setItem('persona', JSON.stringify({
                    gender: gender, 
                    age: age, 
                    country: country, 
                    state: state, 
                    occupation: occupation,
                    income: income,
                    martial: marital,
                    img: img,
                    name: name,
                    goals: goals,
                    challenges: challenges,
                    biography: biography
                }));
                this.setState({redirect: true});
            }
            // Data is not good -> display error according
            else{
                this.displayErr(res.data);
            }
        }).catch(err =>{
            console.log(err);
        })
    }

    displayErr(e){
        if(e.error === 'empty_gender'){
            alert('Please select one of the gender!');
            return;
        }
        if(e.error === 'empty_age'){
            alert('Please fill in age');
            return;
        }
        if(e.error === 'empty_occupation'){
            alert('Please select one of the occupation');
            return;
        }
        if(e.error === 'empty_location'){
            alert("Please select country and state/province");
            return;
        }
        if(e.error === 'invalid_age'){
            alert("Please enter a numeric age ranging from 16-100");
        }
        if(e.error === 'job_unavailable'){
            alert("The data for " + e.occupation + " is unavailable for " + e.state + "\nPlease choose another occupation!");
        }
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});

        if(e.target.id === 'state'){
            this.setState(prevState => ({
                selection_box: prevState.selection_box.map(
                    o => (o.id === 'occupation') ? {...o, options: []} : o
                )
            }))
        }

        if(e.target.id === 'industry'){
            this.sortOccupationByIndustry(e);
        }
    }

    sortOccupationByIndustry(e){
        if(e.target.value === "" || e.target.value === "None"){
            this.setState(prevState => ({
                selection_box: prevState.selection_box.map(
                    o => (o.id === 'occupation') ? {...o, options: []} : o
                )
            }))
            return;
        }

        const state_occupation = require('../datasets/states_occupations_no_income.json');
        const industry_list = require('../datasets/industry.json');
        let industryIndex = 0;
        const sorted = [];

        while(industryIndex < industry_list.length && industry_list[industryIndex++].industry !== e.target.value);


        for(const element of state_occupation){
            if(element.state === this.state.state || (element.state === 'Alabama' && this.state.state === '')){
                for(const occupation of element.occupation){
                    for(const key of industry_list[((industryIndex > 0) ? industryIndex - 1: 0)].key){
                        if(occupation.toUpperCase().includes(key)){
                            sorted.push({
                                value: occupation,
                                id: occupation,
                                placeholder: occupation,
                                key: occupation
                            })
                            break;
                        }
                    }
                }
            }
        }
        
        

        this.setState(prevState => ({
            selection_box: prevState.selection_box.map(
                o => (o.id === 'occupation') ? {...o, options: sorted} : o
            )
        }))

    }
}
 
export default DemoForm;

