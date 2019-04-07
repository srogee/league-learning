const fs = require('fs');
const path = require('path');
window.$ = window.jQuery = require('jquery');
const dataFolder = path.join(__dirname, 'data');


class mainComposite {

    constructor(){
        var champs = JSON.parse(fs.readFileSync(path.join(dataFolder, 'champions.json')));
        var champDictionary = champs.data;
    
        Object.getOwnPropertyNames(champDictionary).forEach((champId) => {
            var champ = champDictionary[champId];
            var stats = ["ad"];
            $("#champs").append(`<option value="${champ.name}">`);
            $("#statList").append(`<option value="${stats.name}">`);
        });

    }

}

module.exports = { mainComposite }