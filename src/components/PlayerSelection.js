import React from "react";

import rock from "../images/rock.png"
import paper from "../images/paper.png"
import scissors from "../images/scissors.png"
import { StyledOptionContainer, StyledOption } from "./styled/lib";

const PlayerSelection = () => {
  return (
    <StyledOptionContainer>
      <StyledOption>
        <img src={rock} alt="Rock Icon"></img>
      </StyledOption>
      <StyledOption>
        <img src={paper} alt="Paper Icon"></img>
      </StyledOption>
      <StyledOption>
        <img src={scissors} alt="Scissors Icon"></img>
      </StyledOption>
    </StyledOptionContainer>
  );
};

export default PlayerSelection;
