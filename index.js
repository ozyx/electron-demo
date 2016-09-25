/* jslint es6 */
const {app} = require('electron');
const {BrowserWindow} = require('electron');

app.on('ready', function (){
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
});