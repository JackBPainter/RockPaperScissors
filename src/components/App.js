import React, { useState } from 'react';

import PlayerSelection from "./PlayerSelection"
import Timer from "./Timer"
import { StyledBody, StyledMain } from "./styled/lib"

const App = () => {
  const [seconds, setSeconds] = useState(15)

  return (
    <StyledBody>
      <StyledMain>
        <Timer seconds={seconds} setSeconds={setSeconds} />
        <PlayerSelection />
      </StyledMain>
    </StyledBody>
  );
}

export default App;
