import React from 'react';

import PlayerSelection from "./PlayerSelection"
import Timer from "./Timer"
import { StyledBody, StyledMain } from "./styled/lib"

const App = () => {
  return (
    <StyledBody>
      <StyledMain>
        <Timer />
        <PlayerSelection />
      </StyledMain>
    </StyledBody>
  );
}

export default App;
