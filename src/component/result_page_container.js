import React, { Component } from 'react';
import { persona_results } from '../data/persona_results';
import PageNavigator from './number_page_navigator';

class ResultPageContainer extends Component {
    constructor(props){
        super(props);
        
        var ret = persona_results.map((items, key) => {
            return(
                <li className='persona_results_wrapper' key={key}>
                    <span className='persona'>{items.name + ", " + items.age + "years old, " + items.city + ", " + items.state}</span>
                </li>
            )
        })
        
        this.state = {
            page_number: 1,
            max_display: 20,
            results: ret
        }
    }

    state = {  
    } 
    render() {
        let startIndex = (this.state.page_number - 1) * this.state.max_display;
        let list_persona = [];

        for(var i = startIndex; i < startIndex + this.state.max_display; i++){
            list_persona.push(this.state.results[i]);
        }


        return (
            <div className='main_content'>
                <div className='result_page_wrapper'>
                    <div className='label_wrapper'>
                        <span className='label' id='result_label'>Result</span>
                    </div>
                    <div className='results_window'>
                        <ul>
                            {list_persona}
                        </ul>
                        <PageNavigator page_numbers={Math.ceil(persona_results.length / this.state.max_display)} onClick={(event) => this.handleNavigatingPage(event)} current_page={this.state.page_number - 1}></PageNavigator>
                    </div>
                </div>
            </div>
        );
    }

    handleNavigatingPage(event){
        if(event.target.id !== "dots#1" && event.target.id !== "dots#2" && event.target.id !== "dots")
            this.setState({page_number: event.target.id});
    }
}
 
export default ResultPageContainer;