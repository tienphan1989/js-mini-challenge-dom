/***** Deliverable 1 *****/
const header = document.querySelector("h1#header");
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'red';


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
for (var i = 0;i<PLAYERS.length;i++){
    let div = document.createElement('div');
    div.className = 'player';
    let att = document.createAttribute("data-number");       // Create a "class" attribute
    att.value = `${PLAYERS[i].number}`;                           // Set the value of the class attribute
    div.setAttributeNode(att);  

    let h3 = document.createElement('h3');
    h3.textContent = `${PLAYERS[i].name} `;
    
    
    let x = document.createElement("EM");
    let t = document.createTextNode(`${PLAYERS[i].nickname}`);
    x.appendChild(t);
    h3.appendChild(x);

    div.appendChild(h3);



    let container = document.querySelector("div.player-container");
    container.appendChild(div);

    let img = document.createElement('img');
    img.src =`${PLAYERS[i].photo}`; 
    img.alt = `${PLAYERS[i].name}`;
    div.appendChild(img); 

}




/***** Deliverable 4 *****/
let remove_player = document.querySelector("[data-number='7']");
let container = document.querySelector("div.player-container");
console.log(remove_player.parentNode);
container.removeChild(remove_player);

