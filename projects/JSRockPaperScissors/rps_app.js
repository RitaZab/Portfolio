const showPlayerChoice = document.getElementById("playerChoice")
const showComputerChoice = document.getElementById("computerChoice")
const showResult = document.getElementById("result")
const choices = document.getElementsByClassName("button")
const pPoints = document.getElementById("player-points")
const cPoints = document.getElementById("computer-points")
let playerChoice;
let computerChoice;
let result;
let ppoints = 0;
let cpoints = 0;
let activeicons = document.getElementsByClassName("active")
console.log(activeicons)


    


function giveResult() {
    if (playerChoice === computerChoice) {
        result = "It's a draw"
    }
   
    if (playerChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                result = "You lose!"
                break
            case "scissors":
                result = "You win!"
                break
        }
    }
    if (playerChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                result = "You win!"
                break
            case "scissors":
                result = "You lose!"
                break
        }
    }
    if (playerChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                result ="You lose!"
                break
            case "paper":
                result = "You win!"
                break
        }
    }
                
     
        
    console.log(result)
    showResult.innerHTML = result
}
        
function showingPlayerChoice() {
    Array.from(activeicons).forEach((el)=>el.classList.remove("active"))
    if (playerChoice === "rock") {
        
        document.querySelector("#prock").classList.add("active")
    }
    if (playerChoice === "paper") {
            document.querySelector("#ppaper").classList.add("active")
        }
    if (playerChoice === "scissors") {
        document.querySelector("#pscissors").classList.add("active")
    }
}
function showingComputerChoice() {
    if (computerChoice === "rock") {
        
        document.querySelector("#crock").classList.add("active")
    }
    if (computerChoice === "paper") {
            document.querySelector("#cpaper").classList.add("active")
        }
    if (computerChoice === "scissors") {
        document.querySelector("#cscissors").classList.add("active")
    }
    
}
function generateComputerChoice() {
    const generatedNumber = Math.floor(Math.random() * 3)
    
        switch (generatedNumber) {
            case 0:
                computerChoice = "rock"
                
                
                break
            case 1:
                computerChoice = "paper"
                
                break
            case 2:
                computerChoice = "scissors"
                
                             
                break
        }
        console.log(computerChoice)
        showComputerChoice.innerHTML = computerChoice;
    }
function countingPoints(){
    if (result === "You win!") {
        ppoints += 1
        pPoints.innerHTML = ppoints
    }
    else {
        if (result === "You lose!") {
            cpoints += 1
            cPoints.innerHTML = cpoints
        }
    }
}



    //this three is because we have three choices(paper, rock and scissors), we can also write here choices.length

Array.from(choices).forEach(choice => choice.addEventListener("click", (e) => {
    playerChoice = e.target.id
    
    showPlayerChoice.innerHTML = playerChoice
    
    showingPlayerChoice()
    generateComputerChoice()
    showingComputerChoice()
    giveResult()
    countingPoints()
    }))
    


