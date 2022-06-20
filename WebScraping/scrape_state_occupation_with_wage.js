const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

async function getStateOccupation(url, state){
    request(url, (error, response, html) => {
        if(!error && response.statusCode === 200){
            const $ = cheerio.load(html);
            const occupation = [];
            $('tbody > tr').each((i, el) =>{
                if($(el).find('td:nth-child(3)').text() === 'detail'){
                    occupation.push({
                        job: $(el).find('td:nth-child(2)').text(),
                        employment: $(el).find('td:nth-child(4)').text(),
                        income: $(el).find('td:nth-child(10)').text()
                    });
                }
            })
            
            const result = JSON.stringify({state: state, occupation: occupation});
            fs.writeFile("./" + state + "_occupation.json", result, (err) =>{
                if(err){
                    console.log("write failed");
                }
            })
        }
    })
}

getStateOccupation('https://www.bls.gov/oes/current/oes_al.htm', "Alabama");
getStateOccupation('https://www.bls.gov/oes/current/oes_ak.htm', "Alaska");
getStateOccupation('https://www.bls.gov/oes/current/oes_az.htm', "Arizona");
getStateOccupation('https://www.bls.gov/oes/current/oes_ar.htm', "Arkansas");
getStateOccupation('https://www.bls.gov/oes/current/oes_ca.htm', "California");
getStateOccupation('https://www.bls.gov/oes/current/oes_co.htm', "Colorado");
getStateOccupation('https://www.bls.gov/oes/current/oes_ct.htm', "Connecticut");
getStateOccupation('https://www.bls.gov/oes/current/oes_de.htm', "Delaware");
getStateOccupation('https://www.bls.gov/oes/current/oes_dc.htm', "District_of_Columbia");
getStateOccupation('https://www.bls.gov/oes/current/oes_fl.htm', "Florida");
getStateOccupation('https://www.bls.gov/oes/current/oes_ga.htm', "Georgia");
getStateOccupation('https://www.bls.gov/oes/current/oes_gu.htm', "Guam");
getStateOccupation('https://www.bls.gov/oes/current/oes_hi.htm', "Hawaii");
getStateOccupation('https://www.bls.gov/oes/current/oes_id.htm', "Idaho");
getStateOccupation('https://www.bls.gov/oes/current/oes_il.htm', "Illinois");
getStateOccupation('https://www.bls.gov/oes/current/oes_in.htm', "Indiana");
getStateOccupation('https://www.bls.gov/oes/current/oes_ia.htm', "Iowa");
getStateOccupation('https://www.bls.gov/oes/current/oes_ks.htm', "Kansas");
getStateOccupation('https://www.bls.gov/oes/current/oes_ky.htm', "Kentucky");
getStateOccupation('https://www.bls.gov/oes/current/oes_la.htm', "Louisiana");
getStateOccupation('https://www.bls.gov/oes/current/oes_me.htm', "Maine");
getStateOccupation('https://www.bls.gov/oes/current/oes_md.htm', "Maryland");
getStateOccupation('https://www.bls.gov/oes/current/oes_ma.htm', "Massachusetts");
getStateOccupation('https://www.bls.gov/oes/current/oes_mi.htm', "Michigan");
getStateOccupation('https://www.bls.gov/oes/current/oes_mn.htm', "Minnesota");
getStateOccupation('https://www.bls.gov/oes/current/oes_ms.htm', "Mississippi");
getStateOccupation('https://www.bls.gov/oes/current/oes_mo.htm', "Missouri");
getStateOccupation('https://www.bls.gov/oes/current/oes_mt.htm', "Montana");
getStateOccupation('https://www.bls.gov/oes/current/oes_ne.htm', "Nebraska");
getStateOccupation('https://www.bls.gov/oes/current/oes_nv.htm', "Nevada");
getStateOccupation('https://www.bls.gov/oes/current/oes_nh.htm', "New_Hampshire");
getStateOccupation('https://www.bls.gov/oes/current/oes_nj.htm', "New_Jersey");
getStateOccupation('https://www.bls.gov/oes/current/oes_nm.htm', "New_Mexico");
getStateOccupation('https://www.bls.gov/oes/current/oes_ny.htm', "New_York");
getStateOccupation('https://www.bls.gov/oes/current/oes_nc.htm', "North_Carolina");
getStateOccupation('https://www.bls.gov/oes/current/oes_nd.htm', "North_Dakota");
getStateOccupation('https://www.bls.gov/oes/current/oes_oh.htm', "Ohio");
getStateOccupation('https://www.bls.gov/oes/current/oes_ok.htm', "Oklahoma");
getStateOccupation('https://www.bls.gov/oes/current/oes_or.htm', "Oregon");
getStateOccupation('https://www.bls.gov/oes/current/oes_pa.htm', "Pennsylvania");
getStateOccupation('https://www.bls.gov/oes/current/oes_pr.htm', "Puerto_Rico");
getStateOccupation('https://www.bls.gov/oes/current/oes_ri.htm', "Rhode_Island");
getStateOccupation('https://www.bls.gov/oes/current/oes_sc.htm', "South_Carolina");
getStateOccupation('https://www.bls.gov/oes/current/oes_sd.htm', "South_Dakota");
getStateOccupation('https://www.bls.gov/oes/current/oes_tn.htm', "Tennessee");
getStateOccupation('https://www.bls.gov/oes/current/oes_tx.htm', 'Texas');
getStateOccupation('https://www.bls.gov/oes/current/oes_ut.htm', 'Utah');
getStateOccupation('https://www.bls.gov/oes/current/oes_vt.htm', 'Vermont');
getStateOccupation('https://www.bls.gov/oes/current/oes_vi.htm', 'Virgin_Islands');
getStateOccupation('https://www.bls.gov/oes/current/oes_va.htm', 'Virginia');
getStateOccupation('https://www.bls.gov/oes/current/oes_wa.htm', 'Washington');
getStateOccupation('https://www.bls.gov/oes/current/oes_dc.htm', 'Washington_DC');
getStateOccupation('https://www.bls.gov/oes/current/oes_wv.htm', 'West_Virginia');
getStateOccupation('https://www.bls.gov/oes/current/oes_wi.htm', 'Wisconsin');
getStateOccupation('https://www.bls.gov/oes/current/oes_wy.htm', 'Wyoming');




