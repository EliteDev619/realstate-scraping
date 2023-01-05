const fs = require('fs');

const table = fs.readFileSync('input.json');
const tbaseData = JSON.parse(table);
var baseData = tbaseData.table

var items = [
    {
        "wearable_id": 1,
        "ipfs_hash": "QmaVerGGYUzy4RqbGcWES6cXfGV5eVeHkeiJ4zXHQ3Kub4",
        "name": "skeleton mask",
        "trim": "white",
        "set": "original",
        "hidden": false,
        "position": "top",
    },
    {
        "wearable_id": 2,
        "ipfs_hash": "QmRD8FdPeJDWp9By6zdW3HNgF5As9spauek8m8cycBe7VX",
        "name": "sweater",
        "trim": "blue",
        "set": "original",
        "hidden": false,
        "position": "top",
    },
    {
        "wearable_id": 3,
        "ipfs_hash": "QmSZ3NhnUwthZcJNHN7VgFUzGVVTJSL2VnrZEmJzQb12GD",
        "name": "satchel",
        "trim": "beige",
        "set": "original",
        "hidden": false,
        "position": "top"
    },
    {
        "wearable_id": 4,
        "ipfs_hash": "QmNmWhrRiUeyegKTpRjmxAxPAsZ5x2drz8H9zUxKp6QrCP",
        "name": "gloves",
        "trim": "holo",
        "set": "genesis",
        "hidden": false,
        "position": "hands"
    },
    {
        "wearable_id": 5,
        "ipfs_hash": "QmQSckTXaGa4NkEo8cS6BuD2uX4dz3f2NQf1B7ptW6Fdh2",
        "name": "toque",
        "trim": "blue",
        "set": "genesis",
        "hidden": false,
        "position": "top",
    },
    {
        "wearable_id": 6,
        "ipfs_hash": "QmTTdo2vPcpFtcU2kervq6ZEpyqbiZNz7gXWByezP8Gb9X",
        "name": "sandals",
        "trim": "blue",
        "set": "original",
        "hidden": true,
        "position": "bottom",
    },
    {
        "wearable_id": 7,
        "ipfs_hash": "QmRWic4REgxR7D7BRSgEvqhUZegBuspBFLrBkhEKohvPRD",
        "name": "crown",
        "trim": "gold",
        "set": "original",
        "hidden": false,
        "position": "top"
    }
]

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
            temp.items.push(items[tempBase[key] - 1]);
        }
    });
    allData[i] = temp;
}


let data = JSON.stringify(allData);
// console.log(data);
fs.appendFile('traits.json', data, function (err) {
    if (err) throw err;
    console.log('Saved!');
});