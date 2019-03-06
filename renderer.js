// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Dependencies
window.$ = window.jQuery = require('jquery');
const fs = require('fs');
const path = require('path');

// Constants
const dataFolder = path.join(__dirname, 'data');
const Maps = {
    // Maps enum. See https://developer.riotgames.com/game-constants.html to implement more
    SummonersRift: 11
}

// Globals
var itemDictionary = null;

// Let's get the party started
start();

// Functions
function start() {
    var items = JSON.parse(fs.readFileSync(path.join(dataFolder, 'items.json'))); // Contains info about the version of the data, item prototype, and the item data itself
    itemDictionary = items.data;
    var counter = 0;

    Object.getOwnPropertyNames(itemDictionary).forEach((itemId) => {
        var item = itemDictionary[itemId];
        if (item.maps[Maps.SummonersRift] && isFullItem(item)) {
            // If this item is supported on Summoners Rift and it doesn't build into anything
            console.log(item.name);
            counter++;
        }
    });

    console.log(`Found ${counter} Summoner's Rift full items.`);
}

function isFullItem(item) {
    return (item.from && item.from.length > 0 && (!item.into || item.intolength === 0 || buildsIntoOrnnItem(item)));
}

// Returns true if the item builds into a special Ornn item (e.g Rabadon's Deathcrown).
function buildsIntoOrnnItem(item) {
    return item.into && item.into.some((otherItemId) => {
        return itemDictionary[otherItemId].requiredAlly === 'Ornn'
    });
}
