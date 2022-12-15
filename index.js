const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const converter = require('json-2-csv')
const fs = require('fs')

var searchURL = 'https://www.pa.martin.fl.us/app/search/real-property?format=json&search=PHELPS%20JAMES%20READ&orderBy=pin&direction=asc&limit=20&offset=0&searchField=owner&exact=false';

async function postData(url) {
    const response = await fetch(url, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        },
    });
    // console.log(response);
    return response.json(); 
}

postData(searchURL)
    .then((data) => {
        // converter.json2csv(data.records, (err, csv) => {
        //     if (err) {
        //       throw err
        //     }
          
        //     fs.writeFileSync('data.csv', csv)
        //   })
        console.log(data); 
    });
