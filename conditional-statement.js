
let numRnd = Math.floor(Math.random() * 10);

let userNum = prompt("tell me a number");
if (numRnd == userNum) { 
    alert("you won"); 
} else { 
    alert("sorry you loose, the good number was "+numRnd); 
}

