// Dependencies
window.$ = window.jQuery = require('jquery');
const fs = require('fs');
const path = require('path');

// Constants
const dataFolder = path.join(__dirname, 'data');

class ItemChooser {
    constructor() {
        var test = 'Hello';
        $('#items').append(`<option value="${test}">`);
    }
}

module.exports = { ItemChooser };