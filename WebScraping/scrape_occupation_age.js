const cheerio = require('cheerio');
const request = require('request');

request('https://www.bls.gov/cps/cpsaat11b.htm', (error, response, html) => {
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);
        const occupations = [];
        $('.regular > tbody').each((i, e) => {
            const data = $(".regular > tbody > tr > td:nth-child(2)").html();
            console.log(data);
        })
    }
})