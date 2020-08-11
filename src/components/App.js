import React from 'react';

import PlayerSelection from "./PlayerSelection"
import { StyledBody, StyledMain } from "./styled/lib"

const App = () => {
  return (
    <StyledBody>
      <StyledMain>
        <PlayerSelection />
      </StyledMain>
    </StyledBody>
  );
}

export default App;
