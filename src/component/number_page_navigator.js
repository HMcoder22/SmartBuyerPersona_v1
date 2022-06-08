import React, { Component } from 'react';
class PageNavigator extends Component {
    constructor(props){
        super(props);
        this.state = {
            max_display: 5  // Number of consecutive number
        }
    }
    state = {  } 
    render() {
        let list_page = this.renderListPage();
        return (
            <div className='page_number_wrapper'>
                <ul>
                    {list_page}
                </ul>
            </div>
        );
    }


    renderListPage(){
        let lastpage = this.props.page_numbers;
        let list_page = [];

        // First scenario 1...5,6,7,8,9,...22
        if(this.state.max_display <= this.props.current_page + 1 && this.props.current_page <= this.props.page_numbers - this.state.max_display){
            list_page.push(
                <li className='page_number' id={1} key={1} onClick={this.props.onClick}>
                    <span id={1} onClick={this.props.onClick}>1</span>
                </li>
            )
            list_page.push(
                <li className='page_number' id="dots#1" key="dots#1" onClick={this.props.onClick}>
                    <div id='dots' onClick={this.props.onClick}>...</div>
                </li>
            )
            for(let i = this.props.current_page ; i < this.props.current_page + this.state.max_display; i++){
                if(i === this.props.current_page + 1){
                    list_page.push(
                        <li className='page_number' id={i} key={i} onClick={this.props.onClick} style={{backgroundColor: "blue"}}>
                            <span to={'/results/page_number#' + i} id={i} onClick={this.props.onClick}>{i}</span>
                        </li>
                    )
                    continue;
                }
                list_page.push(
                    <li className='page_number' id={i} key={i} onClick={this.props.onClick}>
                        <span to={'/results/page_number#' + i} id={i} onClick={this.props.onClick}>{i}</span>
                    </li>
                )
            }
            list_page.push(
                <li className='page_number' id="dots#2" key="dots#2" onClick={this.props.onClick}>
                    <div id='dots' onClick={this.props.onClick}>...</div>
                </li>
            )
            list_page.push(
                <li className='page_number' id={lastpage} key={lastpage} onClick={this.props.onClick}>
                    <span to={'/results/page_number#1'} id={lastpage} onClick={this.props.onClick}>{lastpage}</span>
                </li>
            )
            return list_page;
        }


        // for scenario 1,2,3,4,5...,22
        if(this.state.max_display > this.props.current_page + 1){
            for(let i = 1; i <= this.state.max_display; i++){
                if(i === this.props.current_page + 1){
                    list_page.push(
                        <li className='page_number' id={i} key={i} onClick={this.props.onClick} style={{backgroundColor: "blue"}}>
                            <span to={'/results/page_number#' + i} id={i} onClick={this.props.onClick}>{i}</span>
                        </li>
                    )
                    continue;
                }
                list_page.push(
                    <li className='page_number' id={i} key={i} onClick={this.props.onClick}>
                        <span to={'/results/page_number#' + i} id={i} onClick={this.props.onClick}>{i}</span>
                    </li>
                )
            }
            list_page.push(
                <li className='page_number' id="dots#1" key="dots#1" onClick={this.props.onClick}>
                    <div id='dots' onClick={this.props.onClick}>...</div>
                </li>
            )
            list_page.push(
                <li className='page_number' id={lastpage} key={lastpage} onClick={this.props.onClick}>
                    <span to={'/results/page_number#' + this.props.page_numbers} id={lastpage} onClick={this.props.onClick}>{lastpage}</span>
                </li>
            )
            return list_page;
        }


        // for scenario 1,...,18,19,20,21,22 
        if(this.props.current_page + 1 > this.props.page_numbers - this.state.max_display){
            list_page.push(
                <li className='page_number' id={1} key={1} onClick={this.props.onClick}>
                    <span to={'/results/page_number#1'} id={1} onClick={this.props.onClick}>1</span>
                </li>
            )
            list_page.push(
                <li className='page_number' id="dots#1" key="dots#1" onClick={this.props.onClick}>
                    <div id='dots' onClick={this.props.onClick}>...</div>
                </li>
            )
            for(let i = this.props.page_numbers - this.state.max_display + 1; i <= this.props.page_numbers; i++){
                if(i === this.props.current_page + 1){
                    list_page.push(
                        <li className='page_number' id={i} key={i} onClick={this.props.onClick} style={{backgroundColor: "blue"}}>
                            <span to={'/results/page_number#' + i} id={i} onClick={this.props.onClick}>{i}</span>
                        </li>
                    )
                    continue;
                }
                list_page.push(
                    <li className='page_number' id={i} key={i} onClick={this.props.onClick}>
                        <span to={'/results/page_number#' + i} id={i} onClick={this.props.onClick}>{i}</span>
                    </li>
                )
            }
            return list_page;
        }
    }
}
 
export default PageNavigator;