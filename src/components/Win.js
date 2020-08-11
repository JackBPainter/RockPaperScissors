import React, { useState, useEffect } from "react";
import playAgainOnClick from "../functions/playAgainOnClick"

import VS from "./Vs"
import { StyledMain, PlayAgain } from "./styled/lib";

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
        <>
          Winner!
          <PlayAgain onClick={() => playAgainOnClick()}>Play Again</PlayAgain>
        </>
      ) : (
        <VS playerSelection={playerSelection} botSelection={botSelection} />
      )}
    </StyledMain>
  );
};

export default Win;
