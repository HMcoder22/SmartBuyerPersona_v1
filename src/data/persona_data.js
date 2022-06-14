import Profile from '../CSS/img/profile_img.jpg';
import Facebook from '../CSS/img/facebook_icon.png';
import Instagram from '../CSS/img/insta_icon.png';
import Twitter from '../CSS/img/twitter.png';

export const persona = {
    name: 'Jimmy',
    img: Profile,
    traits: ['Hard-working', 'Motivated', 'Extrovert', 'Social', 'Dominant', "Loved"],
    bios: [{
        type: 'Age:',
        value: '56'
    },
    {
        type: 'Gender:',
        value: 'Male'
    },
    {
        type: 'Occupation:',
        value: 'Mining, quarrying, and oil and gas extraction'
    },
    {
        type: 'Family:',
        value: 'Married, 2 kids'
    },
    {
        type: 'Location:',
        value: 'City, State'
    },
    {
        type: 'Income:',
        value: 'Salary'
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
    goals: ["Goal 1", "Goal 2", "Goal 3"],
    challenges: ["Challenges 1", "Challenges 2", "Challenges 3", "Challenges 4"],
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