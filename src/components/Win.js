import React from "react"

import { StyledMain } from "./styled/lib"

const Win = ({ playerSelection, botSelection }) => {
    return (
        <StyledMain result={"win"}>
            Winner!
        </StyledMain>
    )
}

export default Win
