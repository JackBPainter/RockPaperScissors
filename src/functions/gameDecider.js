import Win from "../components/Win"
import Draw from "../components/Draw"
import Lose from "../components/Lose"

export default function gameDecider(playerSelection, botSelection) {
    if(playerSelection === botSelection) {
        return <Draw />
    }
    if(playerSelection === "rock" && botSelection === "scissors") {
        return <Win />
    }
    if(playerSelection === "rock" && botSelection === "paper") {
        return <Lose />
    }
    if(playerSelection === "paper" && botSelection === "rock") {
        return <Win />
    }
    if(playerSelection === "paper" && botSelection === "scissors") {
        return <Lose />
    }
    if(playerSelection === "scissors" && botSelection === "paper") {
        return <Win />
    }
    if(playerSelection === "scissors" && botSelection === "rock") {
        return <Lose />
    }
}