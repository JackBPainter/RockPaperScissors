import React from "react"

import Win from "../components/Win"
import Draw from "../components/Draw"
import Lose from "../components/Lose"

export default function gameDecider(playerSelection, botSelection) {
    if(playerSelection === botSelection) {
        return <Draw />
    }
    if(playerSelection === "rock" && botSelection === "scissors") {
        return <Win playerSelection={playerSelection} botSelection={botSelection} />
    }
    if(playerSelection === "rock" && botSelection === "paper") {
        return <Lose playerSelection={playerSelection} botSelection={botSelection} />
    }
    if(playerSelection === "paper" && botSelection === "rock") {
        return <Win playerSelection={playerSelection} botSelection={botSelection} />
    }
    if(playerSelection === "paper" && botSelection === "scissors") {
        return <Lose playerSelection={playerSelection} botSelection={botSelection} />
    }
    if(playerSelection === "scissors" && botSelection === "paper") {
        return <Win playerSelection={playerSelection} botSelection={botSelection} />
    }
    if(playerSelection === "scissors" && botSelection === "rock") {
        return <Lose playerSelection={playerSelection} botSelection={botSelection} />
    }
}