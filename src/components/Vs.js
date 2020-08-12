import React from "react";
import iconSelect from "../functions/iconSelect";

import { PlayerNameContainer, StyledOptionContainer, StyledOption } from "./styled/lib";

const VS = ({ playerSelection, botSelection }) => {
  return (
    <>
      <PlayerNameContainer>
        <p>Player</p>
        <p>Enemy</p>
      </PlayerNameContainer>
      <StyledOptionContainer>
        <StyledOption>{iconSelect(playerSelection)}</StyledOption>
          VS
        <StyledOption>{iconSelect(botSelection)}</StyledOption>
      </StyledOptionContainer>
    </>
  );
};

export default VS