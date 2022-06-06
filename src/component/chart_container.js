import React, { Component } from 'react';
import ChartInfo from './chart_info';
import { Chart, registerables } from 'chart.js';
import {chart} from '../data/chart_data'
Chart.register(...registerables);

class ChartContainer extends Component {
  state = {  } 
  render() { 
    return (
      <div className='chart_container'>
          <div className='wrapper'>
            <ChartInfo {...chart[0]}></ChartInfo>
            <div className='visitor_and_top_wrapper'>          
              <ChartInfo {...chart[1]}></ChartInfo>
              <ChartInfo {...chart[2]}></ChartInfo>
            </div>
          </div>
          <div className='wrapper'>          
            <ChartInfo {...chart[3]}></ChartInfo>
            <div className='wrapper'>
              <ChartInfo {...chart[4]}></ChartInfo>            
            </div>
          </div>
      </div>
    );
  }
}
 
export default ChartContainer;