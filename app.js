/* jslint es6 */
let remote = require('electron').remote;
let {Menu, MenuItem} = remote;
let main = remote.require('./main.js')

function createButton(text, func){
    let button = document.createElement('button')
    button.setAttribute("class", "button")
    button.textContent = text
    button.addEventListener('click', func, false)
    document.body.appendChild(button)
}

let menu = new Menu();
menu.append(new MenuItem({label: 'MenuItem1', click() { alert('item 1 clicked') }}));
menu.append(new MenuItem({type: 'separator'}));
menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}));

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  menu.popup(remote.getCurrentWindow())
}, false);

createButton('Wanna see a bear?', () => {main.openWindow('bear.html')})
createButton('Roll some dice?', () => {
    let dice3d = require('dice3d')
    let result = Math.floor(Math.random() * 7)
    dice3d(6, result, () => {})
})
