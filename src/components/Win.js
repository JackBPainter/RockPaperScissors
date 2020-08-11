import React, { useState, useEffect } from "react";
import iconSelect from "../functions/iconSelect";

import { StyledMain, PlayerNameContainer, StyledOptionContainer, StyledOption } from "./styled/lib";

const Win = ({ playerSelection, botSelection }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((count) => count - 1);
      }, 1000);
    }
  }, [count, setCount]);

  return (
    <StyledMain result={count === 0 ? "win" : "neutral"}>
      {count === 0 ? (
        "Winner!"
      ) : (
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
      )}
    </StyledMain>
  );
};

export default Win;
