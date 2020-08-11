import React, { useState, useEffect } from "react";
import iconSelect from "../functions/iconSelect";

import { StyledMain, StyledOptionContainer, StyledOption } from "./styled/lib";

const Draw = ({ playerSelection, botSelection }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((count) => count - 1);
      }, 1000);
    }
  }, [count, setCount]);

  return (
    <StyledMain result={count === 0 ? "draw" : "neutral"}>
      {count === 0 ? (
        "Draw!"
      ) : (
        <StyledOptionContainer>
          <StyledOption>{iconSelect(playerSelection)}</StyledOption>
          VS
          <StyledOption>{iconSelect(botSelection)}</StyledOption>
        </StyledOptionContainer>
      )}
    </StyledMain>
  );
};

export default Draw;
