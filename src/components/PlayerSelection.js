import React from "react";

import rock from "../images/rock.png"
import paper from "../images/paper.png"
import scissors from "../images/scissors.png"
import { StyledOptionContainer, StyledOption, StyledOptionImg } from "./styled/lib";

const PlayerSelection = ({ setPlayerSelection }) => {
  
  const onClickHandler = (icon) => {
    setPlayerSelection(icon)
  }

  return (
    <StyledOptionContainer>
      <StyledOption>
        <StyledOptionImg onClick={() => onClickHandler("rock")} src={rock} alt="Rock Icon" />
      </StyledOption>
      <StyledOption>
        <StyledOptionImg onClick={() => onClickHandler("paper")} src={paper} alt="Paper Icon" />
      </StyledOption>
      <StyledOption>
        <StyledOptionImg onClick={() => onClickHandler("scissors")} src={scissors} alt="Scissors Icon" />
      </StyledOption>
    </StyledOptionContainer>
  );
};

export default PlayerSelection;
