import styled, { keyframes } from 'styled-components';
import { Button } from '@material-ui/core';


const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const UserDeityContainer = styled.div <{ red: number; green: number; blue: number; }>`
  height: 25rem;
  width: 25rem;
  margin: 7rem 0 0 0;
  grid-row-start: 1;
  grid-row-end: 3;
  justify-self: bottom;
  border-radius: 50%;
  border: 0.07rem solid ${({ red, green, blue }) => `rgb(${red}, ${green}, ${blue})`};
  background-color: ${({ red, green, blue }) => `rgba(${red}, ${green}, ${blue}, 0.15)`};
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: all 1s ease-in-out;
`;

export const UserDeityDiv = styled.div<{ red: number; green: number; blue: number; }>`
  border-radius: 50%;
  background-color: ${({ red, green, blue }) => `rgb(${red}, ${green}, ${blue})`};
  height: 5rem;
  width: 5rem;
  margin: 4rem auto 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  transition: background-color 1s ease-in-out;
`;


const animateUp = (translateDistance: number, size: number) => keyframes`
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(calc(${translateDistance}px - ${size / 4}rem));
    }
`;

export const UserDeityEnergyBallDiv = styled.div<{ translateDistance: number; red: number; green: number; blue: number; size: number}>`
  background-color: ${({ red, green, blue }) => `rgba(${red}, ${green}, ${blue}, 0.5)`};
  height: ${({ size }) => size + 'rem'};
  width: ${({ size }) => size + 'rem'};
  border-radius: 50%;
  position: absolute;
  top: ${({ size }) => (-7.5 - size) + 'rem'};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  z-index: -1;
  font-size: ${({ size }) => (size * 8) + 'px'};
  animation: ${({ translateDistance, size }) => animateUp(translateDistance, size)} ${({ translateDistance }) => 4 - Math.floor(Math.abs(translateDistance) / 100)}s linear;
`;



export const UserClicksSubheading = styled.h3`
  font-weight: bold;
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 2em;
  color: white;
`;

export const UserDeityButton = styled(Button)`
  && {
    color: black;
    font-size: 1rem;
    border: none;
    display: block;
    margin: 0 auto;
    height: 3rem;
    width: 10rem;
    position: relative;
    background-color: #ff6161;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: darkred;
      color: white;
    }
    &:active {
      transform: scale(1.2);
    }
  }
`;

