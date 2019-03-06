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
            $("#champs").append(`<option value="${champ.name}">`);
            console.log("Champion " + champ.name);
        });
        
    }
}



module.exports = { mainComposite }