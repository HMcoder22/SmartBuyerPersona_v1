import React, { Component } from 'react';
import Nav from './component/nav';
import StatsBar from './component/stats_bar';
import BarChart2 from './component/chart_container';
import { Navigate } from 'react-router-dom';
class Dashboard extends Component {
    state = {  } 
    render() {
        if(sessionStorage.getItem('loginSuccess')){ 
            return (
                <div className='App'>
                    <div id='dashboard_navigation'>            
                        <Nav></Nav>
                    </div>
                    <div className='dashboard_wrapper'>
                        <StatsBar></StatsBar>
                        <BarChart2></BarChart2>
                    </div>
                    <div className='footer' id='dashboard_footer'>
                        <div className='label_wrapper'><span className='label' id='label_copyright'>Copyright 2022</span></div>
                    </div>
                </div>

            );
        }
        else{
            return(
                <Navigate to='/login/requirement'></Navigate>
            )
        }
    }
}
 
export default Dashboard;