const secret = "aback"; // word of the day , const cant be changed later
const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(); // alphabet letters - create all laters in uppercase
const alpha = new Set(letters.split('')); // letters.split('') --> this splits the letter into array
let tries= [
    [],
    [],
    [],
    [],
    [],
    [], // 6 tries
];
let attempt = 0;
window.addEventListener('keyup', logKey); // This is log key function - evt is event - evt is keyup and function is logkey


function logKey(evt) { 
    if (evt.key.toUpperCase() == "ENTER") { // check see if enter key was typed
        console.log('submit');
        if (attempt <6 && tries[attempt].length==5){
            attempt++;
        }
    }

    if (evt.key.toUpperCase() == "BACKSPACE") { // check see if backpsace was typed
        console.log('deleting');
        tries[attempt].pop();
    }

    if (alpha.has( evt.key.toUpperCase() )) { 
        if (tries[attempt].length <5) {
            tries[attempt].push(evt.key.toUpperCase());
        } 

        // check if letter was typed - bc alpha is a set we can use the built in method .has() see if set contains key just pressed
    } else { // if none letter key was pressed
        console.log('not a letter');
    }
    render();
}

// a new set is like an array, but only contains unique values
const keyboard = [
    "QWERTYUIOP".split(''), // ["Q" . "W" , "E" . . . "P"]
    "ASDFGHJKL".split(''),
    "ZXCVBNM".split('')
];
keyboard[2].shift(`ENTER`);
keyboard[2].push(`BACK`);
function render() {
    const main = document.querySelector('#root');
    let board = `<div class = "board">`;
    
    for (let i = 0; i<tries.length; i++){
        for(let j=0; j<5; j++){
            board += `<div>${ tries[i][j] ? tries[i][j] : "" }</div>`;
        }
    }
    // this searches the html doc for <main id="root"></main> --> then saves in javascript
    let template = `<div class="keyboard">`;

    for (let i = 0; i<keyboard.length; i++ ) { // run three times - inside of the for-loop
       template += `<div class = "row">`
       for (let j=0; j<keyboard[i].length; j++) {
            template += `<div class="key"> ${ keyboard[i][j] }</div>`
        }
        template += `</div>`
    }
    template += `</div>`
    main.innerHTML = board + template;
    console.log(main);
}

render();

