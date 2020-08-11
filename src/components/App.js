import React, { useState, useEffect } from 'react';
import botSelect from "../functions/botSelect"
import gameDecider from "../functions/gameDecider"

import PlayerSelection from "./PlayerSelection"
import Timer from "./Timer"
import { StyledBody, StyledMain } from "./styled/lib"

const App = () => {
  const [seconds, setSeconds] = useState(15)
  const [playerSelection, setPlayerSelection] = useState(null)
  const [botSelection, setBotSelection] = useState(null)

  useEffect(() => {
    setBotSelection(botSelect())
  }, [])

  console.log(botSelection)
  console.log(playerSelection)

  return (
    <StyledBody>
    {playerSelection === null ?
      <StyledMain result={"win"}>
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
