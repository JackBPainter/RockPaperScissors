import styled from "styled-components";
import handleColours from "../../functions/handleColours"

// App

export const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  background: #083846;
`

export const StyledMain = styled.main`
  display: flex;
  justify-content: ${({ result }) => result ? "center" : "space-evenly"};
  align-items: center;
  flex-direction: column;
  width: 80vw;
  height: 100vh;
  font-size: 110px;
  ${({ result }) => handleColours(result)};
` 

// PlayerSelection

export const StyledOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12vw;
  width: 50vw;
`

export const StyledOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9vw;
  width: 9vw;
  min-height: 50px;
  min-width: 50px;
  max-width: 120px;
  max-height: 120px;
  background: #e4e4e4;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
`

export const StyledOptionImg = styled.img`
  height: 60%;
  width: 60%;
`

// Timer

export const StyledTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13vw;
  width: 13vw;
  min-height: 200px;
  min-width: 200px;
  font-size: 150px;
  font-family: impact;
  background: #e4e4e4;
  border: 2px solid black;
  border-radius: 50px;
`

// VS

export const PlayerNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 6vw;
  width: 50.5vw;
`

// Win / Draw / Lose

export const PlayAgain = styled.div`
  margin-top: 80px;
  font-weight: bold;
  padding: 10px 10px 10px 10px;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  border-radius: 7px;
  box-shadow: 0 10px grey;
  font-size: 65px;
  cursor: pointer;
`

