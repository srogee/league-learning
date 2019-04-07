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
            $("#champs").append(`<option value="${champId}">${champ.name}`);
        });
        var stats = ["Attack Damage"];
        stats.forEach((stat) => {
            $("#statList").append(`<option value="${stat}">${stat}`);
        });

        $('#calculate').click(this.calculate.bind(this));
    }

    calculate() {
        var item = document.getElementById("items").value;
        var champ = document.getElementById("champs").value;
        var stat = document.getElementById("statList").value;
        console.log(item);
        console.log(champ);
        console.log(stat);

        var champObj = this.champDictionary[champ];
        console.log(champObj);
    }

}

module.exports = { mainComposite }