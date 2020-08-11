import styled from "styled-components";

// App

export const StyledBody = styled.body`
  display: flex;
  justify-content: center;
  background: #083846;
`

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100vh;
  background: #fff;
`

// PlayerSelection

export const StyledOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
