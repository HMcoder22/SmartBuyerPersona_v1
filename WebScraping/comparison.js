const state_occupation = require('./California_occupation.json');
const median_occupation = require('../src/datasets/median_age_occupations.json');

const unmatches = [];

for(let i = 0; i < state_occupation.occupation.length; i++){
    let match = false;
    for(let j = 0; j < median_occupation.length; j++){
        if(median_occupation[j].occupation.toUpperCase().includes(state_occupation.occupation[i].job.toUpperCase())){
            match = true;
            break;
        }
    }
    if(!match){
        unmatches.push(state_occupation.occupation[i].job);
    }
}
unmatches.forEach((items) =>{
    console.log(items);
})
