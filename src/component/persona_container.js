import React, { Component } from 'react';
import { persona } from '../data/persona_data';
import Profile from './profile';
import PersonaTrait from './persona_traits'
import PersonaBioDetails from './persona_bio_details';
import Social from './social';
import Analytics from '../CSS/img/pie-chart.png';
import ChartInfo from './chart_info';

class PersonaContainer extends Component {
    state = {  } 
    render() { 
        // Get all the persona's traits
        const traits = persona.traits;
        let traits_arr = traits.map(items => {
            return(
                <li key={items}><PersonaTrait trait={items}></PersonaTrait></li>
            )
        })

        // Get all the persona goals
        const goals = persona.goals;
        let goals_arr = goals.map(items => {
            return(
                <li key={items} className='goals'><label className='label' id={items}>{items}</label></li>
            )
        })

        // Get all the persona goals
        const challenges = persona.challenges;
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
                            <Profile {...persona}></Profile>
                            <ul className='traits_wrapper'>
                                {traits_arr}
                            </ul>
                            <PersonaBioDetails bios={persona.bios}></PersonaBioDetails>
                            <ul className='utility_wrapper'>
                                <div className='analytic_wrapper'>
                                    <div className='label_wrapper'><label className='label' id='analytics_wrapper'>Analytics</label></div>
                                    <div className='img_wrapper' href='#'><img className='img' id='analytics_img' src={Analytics} alt='pie_icon'></img></div>
                                </div>
                                <Social social={persona.social}></Social>
                            </ul>
                        </li>
                        <li className='wrapper' id='persona_wrapper_middle'>
                            <div className='bio_wrapper'>
                                <div className='label_wrapper'><span className='label' id='bio_label'>Biography</span></div>
                                <div className='biography_wrapper'><p className='paragraph' id='biography_paragraph'>{persona.biography}</p></div>
                            </div>
                            <ChartInfo {...persona.preferred_channel}></ChartInfo>
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
                            <ChartInfo {...persona.motivation}></ChartInfo>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default PersonaContainer;