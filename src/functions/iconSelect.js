import React from "react"

import rock from "../images/rock.png"
import paper from "../images/paper.png"
import scissors from "../images/scissors.png"
import { StyledOptionImg } from "../components/styled/lib";

export default function iconSelect(selection) {
    if(selection) {
        if(selection === "rock") {
            return <StyledOptionImg src={rock} alt="Rock Icon" />
        }
        if(selection === "paper") {
            return <StyledOptionImg src={paper} alt="Paper Icon" />
        }
        if(selection === "scissors") {
            return <StyledOptionImg src={scissors} alt="Scissors Icon" />
        }
    }
}