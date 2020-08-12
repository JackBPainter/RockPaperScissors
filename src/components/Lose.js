import React, { useState, useEffect } from "react";
import playAgainOnClick from "../functions/playAgainOnClick"

import VS from "./Vs"
import { StyledMain, PlayAgain } from "./styled/lib";

const Lose = ({ playerSelection, botSelection, startCount }) => {
  const [count, setCount] = useState(startCount);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((count) => count - 1);
      }, 1000);
    }
  }, [count, setCount]);

  return (
    <StyledMain result={count === 0 ? "lose" : "neutral"}>
      {count !== 0 ? (
        <VS playerSelection={playerSelection} botSelection={botSelection} />   
      ) : (
        <>
          Game Over!
          <PlayAgain onClick={() => playAgainOnClick()}>Try Again</PlayAgain>
        </>         
      )}
    </StyledMain>
  );
};

export default Lose;
