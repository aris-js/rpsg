let playerArr = ["Rock", "Paper", 'Scissors']
let cpuArr = ["Rock", "Paper", 'Scissors']

const rockBtn = document.querySelector(`#rock`)
const paperBtn = document.querySelector(`#paper`)
const scissorsBtn = document.querySelector(`#scissors`)
const playerChoice = document.querySelector(`#playerChoice`)
const cpuChoice = document.querySelector(`#cpuChoice`)
const outcome = document.querySelector(`#outcome`)

rockBtn.onclick = ()=>{
    playerChoice.innerHTML = playerArr[0]
    let randomNum = Math.floor(Math.random() * 3)
    cpuChoice.innerHTML = cpuArr[randomNum]
    if(playerChoice.innerHTML == cpuChoice.innerHTML){
        outcome.innerHTML = "You Tied!, wanna try again?"
    
    }else if(cpuChoice.innerHTML == "Paper"){
        outcome.innerHTML = "Ouch, Computer won!"

    }else if(cpuChoice.innerHTML == "Scissors"){
        outcome.innerHTML = "YOU WON, have another go!"
    }
}
paperBtn.onclick = ()=>{
    playerChoice.innerHTML = playerArr[1]
    let randomNum = Math.floor(Math.random() * 3)
    cpuChoice.innerHTML = cpuArr[randomNum]
    if(playerChoice.innerHTML == cpuChoice.innerHTML){
        outcome.innerHTML = "You Tied!, wanna try again?"
    
    }else if(cpuChoice.innerHTML == "Scissors"){
        outcome.innerHTML = "Ouch, Computer won!"

    }else if(cpuChoice.innerHTML == "Rock"){
        outcome.innerHTML = "YOU WON, have another go!"
    }
    
} 
scissorsBtn.onclick = ()=>{
    playerChoice.innerHTML = playerArr[2]
    let randomNum = Math.floor(Math.random() * 3)
    cpuChoice.innerHTML = cpuArr[randomNum]
    if(playerChoice.innerHTML == cpuChoice.innerHTML){
        outcome.innerHTML = "You Tied!, wanna try again?"
    
    }else if(cpuChoice.innerHTML == "Rock"){
        outcome.innerHTML = "Ouch, your Opponent won!, have another turn"

    }else if(cpuChoice.innerHTML == "Paper"){
        outcome.innerHTML = "YOU WON, have another go!"
    }
}
