import { StyledMain } from "../components/styled/lib"

export default function gameDecider(playerSelection, botSelection) {
    if(playerSelection === botSelection) {
        return // draw component
    }
    if(playerSelection === "rock" && botSelection === "scissors") {
        return // win component
    }
    if(playerSelection === "rock" && botSelection === "paper") {
        return // lose component
    }
    if(playerSelection === "paper" && botSelection === "rock") {
        return // win component
    }
    if(playerSelection === "paper" && botSelection === "scissors") {
        return // lose component
    }
    if(playerSelection === "scissors" && botSelection === "paper") {
        return // win component
    }
    if(playerSelection === "scissors" && botSelection === "rock") {
        return // lose component
    }
}