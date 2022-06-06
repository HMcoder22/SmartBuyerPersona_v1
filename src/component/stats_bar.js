import React, { Component } from 'react';
import StatsIcon from './stats_icon';
import FilterBar from './filter_bar';
class StatsBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            stats: [{
                label:{
                    id: 'visitor_count',
                    name: 'Visitors'
                }
                ,
                data: {
                    id: 'visitor_data',
                    value: '234,672',
                },
                rate: {
                    id: 'visitor_rate',
                    value: '3.23%',
                    positive: true
                }
            },
            {
                label:{
                    id: 'users_count',
                    name: 'Users'
                }
                ,
                data: {
                    id: 'user_data',
                    value: '534,568',
                },
                rate: {
                    id: 'user_rate',
                    value: '2.86%',
                    positive: true
                }
            },
            {
                label:{
                    id: 'pageviews_count',
                    name: 'Pageviews'
                }
                ,
                data: {
                    id: 'pageviews_data',
                    value: '547,289',
                },
                rate: {
                    id: 'pageviews_rate',
                    value: '9.72%',
                    positive: true
                }
            },
            {
                label:{
                    id: 'sales_count',
                    name: 'Sales'
                }
                ,
                data: {
                    id: 'sales_data',
                    value: '327K',
                },
                rate: {
                    id: 'sales_rate',
                    value: '4.12%',
                    positive: true
                }
            },
            {
                label:{
                    id: 'items_cart_count',
                    name: 'Items(s) in cart'
                }
                ,
                data: {
                    id: 'items_cart_data',
                    value: '3.2',
                },
                rate: {
                    id: 'items_cart_rate',
                    value: '0.56%',
                    positive: true
                }
            },
            {
                label:{
                    id: 'Session_count',
                    name: 'Session'
                }
                ,
                data: {
                    id: 'session_data',
                    value: '293,821',
                },
                rate: {
                    id: 'session_rate',
                    value: '3.73%',
                    positive: true
                }
            },
            {
                label:{
                    id: 'session_ratio_count',
                    name: 'Pages / Session'
                }
                ,
                data: {
                    id: 'session_ratio_data',
                    value: '0.78',
                },
                rate: {
                    id: 'session_ratio_rate',
                    value: '3.42%',
                    positive: true
                }
            }]
        }
    }
    
    state = {  } 
    render() {
        const data = this.state.stats;
        let data_wrapper = data.map(items =>{
            if(items.rate.positive === true){
                return(
                    <li className='stats_list_wrapper' key={items.label.id}>
                        <StatsIcon {...items} style={{color: "green"}}></StatsIcon>
                    </li>
                )
            }
            else{
                return(
                    <li className='stats_list_wrapper' key={items.label.id}>
                        <StatsIcon {...items} style={{color: "red"}}></StatsIcon>
                    </li>
                )
            }
        }) 
        return (
            <div className='stats_bar_wrapper'>
                <ul>
                    <ol>
                        {data_wrapper}
                    </ol>
                    <li className='filter_list_wrapper'>
                        <FilterBar></FilterBar>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default StatsBar;