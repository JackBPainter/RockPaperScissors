import React from "react";
import iconSelect from "../functions/iconSelect";

import { StyledMain, StyledOptionContainer, StyledOption } from "./styled/lib";

const Draw = ({ playerSelection, botSelection }) => {
  return (
    <StyledMain result={"draw"}>
      <StyledOptionContainer>
        <StyledOption>{iconSelect(playerSelection)}</StyledOption>
        VS
        <StyledOption>{iconSelect(botSelection)}</StyledOption>
      </StyledOptionContainer>
    </StyledMain>
  );
};

export default Draw;