console.log("Hello World") // Testing

function getComputerChoice() {
    let value = Math.floor(Math.random()*10);
    if (value < 4)
        return "Rock"
    else if (value > 3 && value < 7)
        return "Paper"
    else if (value > 6)
        return "Scissors"   
}
