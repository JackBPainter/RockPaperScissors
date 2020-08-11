import React, { useEffect } from "react"

import { StyledTimer } from "./styled/lib";

const Timer = ({ seconds, setSeconds }) => {

    useEffect(() => {
        if(seconds > 0) {
            setTimeout(() => {
                setSeconds(seconds => seconds - 1)
            }, 1000)
        }
    }, [seconds, setSeconds]) 

    return <StyledTimer>{seconds}</StyledTimer>
}

export default Timer 