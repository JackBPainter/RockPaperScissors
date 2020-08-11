import React from "react";

import rock from "../images/rock.png"
import paper from "../images/paper.png"
import scissors from "../images/scissors.png"
import { StyledOptionContainer, StyledOption, StyledOptionImg } from "./styled/lib";

const PlayerSelection = () => {
  return (
    <StyledOptionContainer>
      <StyledOption>
        <StyledOptionImg src={rock} alt="Rock Icon" />
      </StyledOption>
      <StyledOption>
        <StyledOptionImg src={paper} alt="Paper Icon" />
      </StyledOption>
      <StyledOption>
        <StyledOptionImg src={scissors} alt="Scissors Icon" />
      </StyledOption>
    </StyledOptionContainer>
  );
};

export default PlayerSelection;
