/* jslint es6 */
'use strict'
const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#2e2c29',
        resizable: false
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

exports.openWindow = (page) => {
    let win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#2e2c29',
        resizable: false
    })
    win.loadURL(`file://${__dirname}/${page}`)
}