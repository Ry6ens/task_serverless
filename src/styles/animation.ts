import styled, { keyframes } from "styled-components";

export const flip = keyframes`
   0%,80% {
    transform: rotateY(360deg) 
  }
`;

export const openclose = keyframes`
    0% {
    width: 0;
  }
  5% {
    width: 0;
  }
  15% {
  }
  30% {
    width: 230px;
  }
  33% {
    width: 0;
  }
  35% {
    width: 0;
  }
  38% {
  }
  48% {
    width: 190px;
  }
  62% {
    width: 190px;
  }
  66% {
    width: 0;
    text-indent: 0;
  }
  71% {
    width: 0;
    text-indent: 5px;
  }
  86% {
    width: 285px;
  }
  95% {
    width: 285px;
  }
  98% {
    width: 0;
    text-indent: 5px;
  }
  100% {
    width: 0;
    text-indent: 0;
  }
`;
