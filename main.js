/* jslint es6 */
'use strict';
const electron = require('electron');
const {app, BrowserWindow, Tray, Menu} = electron;
let tray = null;
app.on('ready', function () {
    tray = new Tray('res/bear.ico');
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Item1', type: 'radio'},
        {label: 'Item2', type: 'radio'},
        {label: 'Item3', type: 'radio', checked: true},
        {label: 'Item4', type: 'radio'}
    ]);
    tray.setToolTip('Bears & Dice')
    tray.setContextMenu(contextMenu)

    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#2e2c29',
        resizable: false,
        devTools: true
    });
    // mainWindow.setMenu(null)
    mainWindow.loadURL(`file://${__dirname}/main.html`);

    electron.powerMonitor.on('on-ac', () => {
        console.log('power plugged in')
    })
});

exports.openWindow = function (page) {
    let win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#2e2c29',
        resizable: false
    });
    win.loadURL(`file://${__dirname}/${page}`)
}