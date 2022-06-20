const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

request('https://www.bls.gov/cps/cpsaat11b.htm', (error, response, html) => {
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);
        const occupations = [];
        $('.regular > tbody > tr').each((i, e) => {
            if($(e).find('th').text() !== ''){
                occupations.push({
                    occupation: $(e).find('th').text(),
                    age_16_19: $(e).find('td:nth-child(3)').text(),
                    age_20_24: $(e).find('td:nth-child(4)').text(),
                    age_25_34: $(e).find('td:nth-child(5)').text(),
                    age_35_44: $(e).find('td:nth-child(6)').text(),
                    age_45_54: $(e).find('td:nth-child(7)').text(),
                    age_55_64: $(e).find('td:nth-child(8)').text(),
                    age_65: $(e).find('td:nth-child(9)').text(),
                    median_age: $(e).find('td:nth-child(10)').text()
                })
            }
        });
        const result = JSON.stringify(occupations);
        fs.writeFile('../src/datasets/median_age_occupations.json', result, (err) =>{
            if(err){
                console.log(err);
            }
        })
    }
})