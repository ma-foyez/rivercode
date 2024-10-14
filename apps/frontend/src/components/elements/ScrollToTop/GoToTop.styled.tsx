import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-4px);
  }
`;

const Button = styled.button`
  background-color: 'red'
  position: fixed;
  bottom: 6.5rem;
  right: 3rem;
  padding: 0.8rem;
  background-color: white;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0095FD;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.6)!important;
    transition: background-color 0.3s ease-in-out;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;

  }
`;


const Progress = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 30px;
  box-shadow: 0 0 2px green;
  display: grid;
  place-items: center;
  z-index: 99;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    bottom: 25px;
    right: 15px;
  }

`;

const ProgressValue = styled.span`
  display: block;
  height: cal(100%-15px);
  width: calc(100%-15px);
  background-color: #0095FD;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 500;
`;

const Icon = styled.svg`
  &.bounce-icon {
    animation: ${bounceAnimation} 0.8s infinite alternate;
  }
`;

export const Styled = {
  Button,
  Progress,
  ProgressValue,
  Icon
};
