import React, { useState, useEffect } from 'react';
import botSelect from "../functions/botSelect"

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

  return (
    <StyledBody>
      <StyledMain>
        <Timer seconds={seconds} setSeconds={setSeconds} />
        <PlayerSelection setPlayerSelection={setPlayerSelection} />
      </StyledMain>
    </StyledBody>
  );
}

export default App;
