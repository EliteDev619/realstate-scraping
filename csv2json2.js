const fs = require('fs');

const table = fs.readFileSync('input.json');
const tbaseData = JSON.parse(table);
var baseData = tbaseData.table
var allData = {};

// for (var i = 0; i < 1; i++) {
for (var i = 0; i < baseData.length; i++) {
    var temp = {};
    var tempBase = {};
    tempBase = baseData[i];
    temp.dooplicated = false;
    temp.items = [];
    Object.keys(tempBase).forEach(key => {
        if (!key.includes("doodle_token_id")) {
            temp.items.push(tempBase[key]);
        }
    });
    temp.items.sort(function(a, b) {
        return a - b;
    });
    allData[i] = temp;
}


let data = JSON.stringify(allData);
// console.log(data);
fs.appendFile('traits2.json', data, function(err) {
    if (err) throw err;
    console.log('Saved!');
});