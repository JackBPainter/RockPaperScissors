import React from "react";
import iconSelect from "../functions/iconSelect";

import { StyledMain, StyledOptionContainer, StyledOption } from "./styled/lib";

const Lose = ({ playerSelection, botSelection }) => {
  return (
    <StyledMain result={"lose"}>
      <StyledOptionContainer>
        <StyledOption>{iconSelect(playerSelection)}</StyledOption>
        VS
        <StyledOption>{iconSelect(botSelection)}</StyledOption>
      </StyledOptionContainer>
    </StyledMain>
  );
};

export default Lose;