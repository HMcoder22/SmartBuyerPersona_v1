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

class PersonaContainer extends Component {
    constructor(props){
        super(props);
        const persona_info = JSON.parse(sessionStorage.getItem('persona'));

        this.state = {
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
                        backgroundColor: "darkblue"
                    }],
                },
                options: {
                    legend: {
                        display: true,
                    },
                    maintainAspectRatio: false,
                    responsive: true
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
                    labels: ["Money", "Quality", "Model/Fashion", "Quality", "Quantity", "Brand"],
                    datasets: [{ 
                        label: "Motivation",
                        data: [782, 671, 879, 523, 982, 582],
                        borderColor: "red",
                        backgroundColor: "darkblue"
                    }],
                },
                options: {
                    legend: {
                        display: true,
                    },
                    maintainAspectRatio: false,
                    responsive: true
                },
                label: 'Motivation'
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
                                    <div className='img_wrapper' href='#'><img className='img' id='analytics_img' src={Analytics} alt='pie_icon'></img></div>
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
                </div>
            </div>
        );
    }
}
 
export default PersonaContainer;