const fs = require('fs');
const path = require('path');
window.$ = window.jQuery = require('jquery');
const dataFolder = path.join(__dirname, 'data');


class mainComposite {

    constructor(){
        var champs = JSON.parse(fs.readFileSync(path.join(dataFolder, 'champions.json')));
        this.champDictionary = champs.data;
    
        Object.getOwnPropertyNames(this.champDictionary).forEach((champId) => {
            var champ = this.champDictionary[champId];
            $("#champs").append(`<option value="${champ.name}">`);
        });
        var stats = ["Attack damage"];
        stats.forEach((stat) => {
            $("#statList").append(`<option value="${stat}">`);
        });

        $('#calculate').click(this.calculate);
    }

    calculate() {
        this.champDictionary = champs.data;
        var item = document.getElementById("itemSelect").value;
        var champ = document.getElementById("champSelect").value;
        var stat = document.getElementById("stat").value;
        console.log(item);
        console.log(champ);
        console.log(stat);

        var champObj = this.champDictionary["Amumu"];
        console.log(champObj);
    }

}

module.exports = { mainComposite }