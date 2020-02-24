function game() {
    let numRnd = Math.floor(Math.random() * 10);

    let userNum = document.getElementById("userNumber").value;
    if (numRnd == userNum) {
        alert("you won");
    } else {
        alert("sorry you loose, the good number was " + numRnd);
        document.getElementById("btn").value="Try again";
    }


}
