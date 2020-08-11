import React, { useState, useEffect } from 'react';
import botSelect from "../functions/botSelect"
import gameDecider from "../functions/gameDecider"

import PlayerSelection from "./PlayerSelection"
import Timer from "./Timer"
import Lose from "./Lose"
import { StyledBody, StyledMain } from "./styled/lib"

const App = () => {
  const [seconds, setSeconds] = useState(15)
  const [playerSelection, setPlayerSelection] = useState(null)
  const [botSelection, setBotSelection] = useState(null)

  useEffect(() => {
    setBotSelection(botSelect())
  }, [])

  if(playerSelection === null && seconds > 0) {
    return (
      <StyledBody>
        <StyledMain>
          <Timer seconds={seconds} setSeconds={setSeconds} />
          <PlayerSelection setPlayerSelection={setPlayerSelection} />
        </StyledMain>
      </StyledBody>
    )
  }

  if(playerSelection !== null) {
    return (
      <StyledBody>
       {gameDecider(playerSelection, botSelection)}
      </StyledBody>
    )
  }

  if(seconds === 0) {
    return (
      <StyledBody>
        <Lose startCount={0} />
      </StyledBody>
    )
  }
  
  return (
    <StyledBody>
    {playerSelection === null ?
      <StyledMain>
        <Timer seconds={seconds} setSeconds={setSeconds} />
        <PlayerSelection setPlayerSelection={setPlayerSelection} />
      </StyledMain>
      :
      gameDecider(playerSelection, botSelection)
    }
    </StyledBody>
  );
}

export default App;
