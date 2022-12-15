const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var tokenUrl = 'https://apis-sandbox.fedex.com/oauth/token';

async function getToken(url) {
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id=l7f1c1d233004c47179570df7cac8a0905&client_secret=ed3302b15f7b4cfd832f048bad2dd380',
    });
    return response.json(); 
}

getToken(tokenUrl)
.then((data) => {
    console.log(data); 
});