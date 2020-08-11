import React, { useState, useEffect } from "react";

import VS from "./Vs"
import { StyledMain, PlayAgain } from "./styled/lib";

const Lose = ({ playerSelection, botSelection }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((count) => count - 1);
      }, 1000);
    }
  }, [count, setCount]);

  return (
    <StyledMain result={count === 0 ? "lose" : "neutral"}>
      {count === 0 ? (
        <>
          Game Over!
          <PlayAgain>Try Again?</PlayAgain>
        </>      
      ) : (
        <VS playerSelection={playerSelection} botSelection={botSelection} />
      )}
    </StyledMain>
  );
};

export default Lose;
