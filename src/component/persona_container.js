import React, { Component } from 'react';
import Profile from './profile';
import PersonaTrait from './persona_traits'
import PersonaBioDetails from './persona_bio_details';
import Social from './social';
import Analytics from '../CSS/img/pie-chart.png';
import ChartInfo from './chart_info';
import ProfileImg from '../CSS/img/profile_img.jpg';
import Facebook from '../CSS/img/facebook_icon.png';
import Instagram from '../CSS/img/insta_icon.png';
import Twitter from '../CSS/img/twitter.png';
import { goals_and_challenges } from '../data/goals_and_challenges';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

class PersonaContainer extends Component {
    constructor(props){
        super(props);
        const persona_info = JSON.parse(sessionStorage.getItem('persona'));
        Chart.register(ChartDataLabels);

        this.state = {
            analytics_hidden: true,
            name: 'Jimmy',
            img: ProfileImg,
            traits: ['Hard-working', 'Motivated', 'Extrovert', 'Social', 'Dominant', "Loved"],
            bios: [{
                type: 'Age:',
                value: persona_info.age
            },
            {
                type: 'Gender:',
                value: persona_info.gender
            },
            {
                type: 'Occupation:',
                value: persona_info.occupation
            },
            {
                type: 'Family:',
                value: 'Married, 2 kids'
            },
            {
                type: 'Location:',
                value: persona_info.state + ", " + persona_info.country
            },
            {
                type: 'Income:',
                value: persona_info.income
            }],
            social: [{
                img: Facebook,
                type: 'Facebook',
                url: "/facebook"
            },
            {
                img: Instagram,
                type: 'Instagram',
                url: '/instagram'
            },
            {
                img: Twitter,
                type: 'Twitter',
                url: '/twitter'
            }],
            biography: "I am a diligent worker and also a fashion enjoyer. I love shopping with my friends during my free time. My favorite shoe brand is Nike. I am a diligent worker and also a fashion enjoyer. I love shopping with my friends during my free time. My favorite shoe brand is Nike. I am a diligent worker and also a fashion enjoyer. I love shopping with my friends during my free time. My favorite shoe brand is Nike. I am a diligent worker and also a fashion enjoyer.",
            preferred_channel: {
                type: "bar",
                data: {
                    labels: ["YouTube", "Facebook", "Google Chrome", "Yahoo", "Newspaper"],
                    datasets: [{ 
                        label: "Preferred Channeled",
                        data: [860, 782, 421, 892, 1371],
                        borderColor: "red",
                        backgroundColor: ["blue", "red", "green", "orange", "purple"]
                    }],
                },
                options: {
                    legend: {
                        display: true,
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins:{
                        datalabels: {
                            color: "white"
                        }
                    },
                },
                label: 'Preferred Channel'
            },
            goals: [
                "Goal 1", 
                "Goal 2", 
                "Goal 3"],
            challenges: [
                "Challenges 1", 
                "Challenges 2", 
                "Challenges 3", 
                "Challenges 4"
            ],
            motivation: {
                type: "bar",
                data: {
                    labels: ["Money", "Quality", "Model/Fashion", "Quantity", "Brand"],
                    datasets: [{ 
                        label: ["Motivation"],
                        data: [782, 671, 879, 982, 582],
                        borderColor: "red",
                        backgroundColor: ["blue", "red", "green", "orange", "purple"]
                    }],
                },
                options: {
                    legend: {
                        display: true,
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins:{
                        datalabels: {
                            color: "white"
                        }
                    },
                },

                label: 'Motivation'
            },
            shop_method: {
                type: "pie",
                data: {
                    labels: ["In person", "Online", "Curbside", "Delivery"],
                    datasets:[{
                        labels: ["In person", "Online", "Curbside", "Delivery"],
                        data: [1203, 1632, 321, 231],
                        borderColor: "rgb(59, 59, 59)",
                        borderWidth: "1",
                        backgroundColor: ["blue", "red", "orange", "green"]
                    }]
                },
                options:{
                    legend: {
                        display: true
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins:{
                        tooltips: {
                            enabled: false
                        },
                        datalabels:{
                            color: "white",
                            font: {
                                size: 14
                            },
                            formatter: (value, ctx) => {
                                let sum = 0;
                                let dataArr = ctx.chart.data.datasets[0].data;
                                dataArr.map(data => {
                                    sum += data;
                                    return sum;
                                });
                                let percentage = (value*100 / sum).toFixed(2)+"%";
                                return percentage;
                            }
                        }, 
                        legend:{
                            labels:{
                                boxWidth: 17
                            }
                        }
                    }
                },
                plugins: [ChartDataLabels],
                label: "Where to shop"
            },
            shop_location: {
                type: "pie",
                data: {
                    labels: ["Walmart", "Target", "Amazon websites", "Others"],
                    datasets:[{
                        labels: ["Walmart", "Target", "Amazon websites", "Others"],
                        data: [562, 872, 1293, 452],
                        borderColor: "rgb(59, 59, 59)",
                        borderWidth: "1",
                        backgroundColor: ["blue", "red", "orange", "green"]
                    }]
                },
                options:{
                    legend: {
                        display: true
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins:{
                        tooltips: {
                            enabled: false
                        },
                        datalabels:{
                            color: "white",
                            font: {
                                size: 14
                            },
                            formatter: (value, ctx) => {
                                let sum = 0;
                                let dataArr = ctx.chart.data.datasets[0].data;
                                dataArr.map(data => {
                                    sum += data;
                                    return sum;
                                });
                                let percentage = (value*100 / sum).toFixed(2)+"%";
                                return percentage;
                            }
                        }, 
                        legend:{
                            labels:{
                                boxWidth: 17
                            }
                        }
                    }
                },
                plugins: [ChartDataLabels],
                label: "Where to shop"
            },
            how_to_reach: {
                type: "pie",
                data: {
                    labels: ["Facebook Ads", "Youtube Ads", "Google Chrome Ads", "Others"],
                    datasets:[{
                        labels: ["Facebook Ads", "Youtube Ads", "Google Chrome Ads", "Others"],
                        data: [672, 1293, 982, 432],
                        borderColor: "rgb(59, 59, 59)",
                        borderWidth: "1",
                        backgroundColor: ["blue", "red", "orange", "green"]
                    }]
                },
                options:{
                    legend: {
                        display: true
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins:{
                        tooltips: {
                            enabled: false
                        },
                        datalabels:{
                            color: "white",
                            font: {
                                size: 14
                            },
                            formatter: (value, ctx) => {
                                let sum = 0;
                                let dataArr = ctx.chart.data.datasets[0].data;
                                dataArr.map(data => {
                                    sum += data;
                                    return sum;
                                });
                                let percentage = (value*100 / sum).toFixed(2)+"%";
                                return percentage;
                            }
                        }, 
                        legend:{
                            labels:{
                                boxWidth: 17
                            }
                        }
                    }
                },
                plugins: [ChartDataLabels],
                label: "Where to shop"
            }
        }

        for(const element of goals_and_challenges){
            if(element.occupation === persona_info.occupation){
                this.state.goals = element.goals;
                this.state.challenges = element.challenges;
                this.state.biography = element.biography;
            }
        }
    }
    state = {  } 
    render() { 
        // Get all the this.state's traits
        const traits = this.state.traits;
        let traits_arr = traits.map(items => {
            return(
                <li key={items}><PersonaTrait trait={items}></PersonaTrait></li>
            )
        })

        // Get all the this.state goals
        const goals = this.state.goals;
        let goals_arr = goals.map(items => {
            return(
                <li key={items} className='goals'><label className='label' id={items}>{items}</label></li>
            )
        })

        // Get all the this.state goals
        const challenges = this.state.challenges;
        let challenges_arr = challenges.map(items => {
            return(
                <li key={items} className='challenges'><label className='label' id={items}>{items}</label></li>
            )
        })

        return (
            <div className='main_content' id='persona_wrapper'>
                <div className='persona_wrapper'>
                    <ul>
                        <li className='wrapper' id='persona_wrapper_left'>
                            <Profile {...this.state}></Profile>
                            <ul className='traits_wrapper'>
                                {traits_arr}
                            </ul>
                            <PersonaBioDetails bios={this.state.bios}></PersonaBioDetails>
                            <ul className='utility_wrapper'>
                                <div className='analytic_wrapper'>
                                    <div className='label_wrapper'><label className='label' id='analytics_wrapper'>Analytics</label></div>
                                    <div className='img_wrapper' href='#' onClick={(e) => this.openAnalytics(e)}><img className='img' id='analytics_img' src={Analytics} alt='pie_icon'></img></div>
                                </div>
                                <Social social={this.state.social}></Social>
                            </ul>
                        </li>
                        <li className='wrapper' id='persona_wrapper_middle'>
                            <div className='bio_wrapper'>
                                <div className='label_wrapper'><span className='label' id='bio_label'>Biography</span></div>
                                <div className='biography_wrapper'><p className='paragraph' id='biography_paragraph'>{this.state.biography}</p></div>
                            </div>
                            <ChartInfo {...this.state.preferred_channel}></ChartInfo>
                        </li>
                        <li className='wrapper' id='persona_wrapper_right'>
                            <div className='goal_wrapper'>
                                <span className='label' id='goal_label'>Goals</span>
                                <ul>
                                    {goals_arr}
                                </ul>
                            </div>
                            <div className='challenge_wrapper'>
                                <span className='label' id='challenge_label'>Challenges</span>
                                <ul>
                                    {challenges_arr}
                                </ul>
                            </div>
                            <ChartInfo {...this.state.motivation}></ChartInfo>
                        </li>
                    </ul>
                    <div className='Analytics_container_wrapper'>
                        <div className='exit_button' href='#' onClick={() => this.closeAnalytics()}>
                            <span className='exit'>X</span>
                        </div>
                        <div className='sep'></div>
                        <div className='Analytics_container'>
                            <ChartInfo {...this.state.shop_method}></ChartInfo>
                            <ChartInfo {...this.state.shop_location}></ChartInfo>
                            <ChartInfo {...this.state.how_to_reach}></ChartInfo>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    closeAnalytics(){
        // Only able to close when the analytics window is open
        if(!this.state.analytics_hidden){
            const analytics_wrapper = document.getElementsByClassName('Analytics_container_wrapper')[0];
            const exit_button = document.getElementsByClassName('exit_button')[0];
            analytics_wrapper.classList.toggle('active');
            exit_button.classList.toggle('active');
            this.setState({analytics_hidden: true});
        }
    }

    openAnalytics(e){
        if(document.getElementsByClassName('analytic_wrapper')[0].contains(e.target)){
            const analytics_wrapper = document.getElementsByClassName('Analytics_container_wrapper')[0];
            const exit_button = document.getElementsByClassName('exit_button')[0];
            analytics_wrapper.classList.toggle('active');
            exit_button.classList.toggle('active');
            this.setState({analytics_hidden: !this.state.analytics_hidden})
        }       
    }
}
 
export default PersonaContainer;