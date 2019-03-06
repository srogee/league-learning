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

class ItemChooser {
    constructor() {
        var items = JSON.parse(fs.readFileSync(path.join(dataFolder, 'items.json'))); // Contains info about the version of the data, item prototype, and the item data itself
        this.itemDictionary = items.data;
    
        Object.getOwnPropertyNames(this.itemDictionary).forEach((itemId) => {
            var item = this.itemDictionary[itemId];
            if (item.maps[Maps.SummonersRift] && this.isFullItem(item)) {
                // If this item is supported on Summoners Rift and it doesn't build into anything
                $('#items').append(`<option value="${item.name}">`);
            }
        });
    }

    isFullItem(item) {
        return (item.from && item.from.length > 0 && (!item.into || item.intolength === 0 || this.buildsIntoOrnnItem(item)));
    }
    
    // Returns true if the item builds into a special Ornn item (e.g Rabadon's Deathcrown).
    buildsIntoOrnnItem(item) {
        return item.into && item.into.some((otherItemId) => {
            return this.itemDictionary[otherItemId].requiredAlly === 'Ornn'
        });
    }
}

module.exports = { ItemChooser };