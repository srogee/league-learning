// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Dependencies
window.$ = window.jQuery = require('jquery');
const fs = require('fs');
const path = require('path');
const { ItemChooser } = require('./items.js');
const { mainComposite } = require('./displayMain.js')

// Constants

// Functions
function start() {
    new ItemChooser();
    new mainComposite();    
}

start();