import styled, { keyframes } from "styled-components";
import { device } from "@/styles/Media.variables";

export const Container = styled.section`
  padding: 0px 16px;

  @media ${device.desktop} {
    margin: 0px auto 40px;
    padding: 0px 64px;

    max-width: 1440px;
  }
`;

const openclose = keyframes`
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

export const Title = styled.h1`
  position: relative;

  margin-top: 56px;

  max-width: min-content;

  font-family: var(--font-PPFormula);
  font-weight: 400;
  font-size: 48px;
  line-height: 1.1;
  letter-spacing: -0.04em;
  text-transform: uppercase;

  background: linear-gradient(
    118.26deg,
    #ffffff 32.52%,
    rgba(212, 209, 205, 0) 149.98%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  &:before {
    content: "";

    position: absolute;
    top: 50px;
    left: -1px;

    width: 241px;
    height: 49px;

    background: linear-gradient(
      90deg,
      rgba(255, 214, 0, 0.2) 0%,
      rgba(255, 214, 0, 0) 95.83%
    );

    border-left: 2px solid #ffd600;

    animation: ${openclose} 10s ease-in-out infinite;
  }

  @media ${device.tablet} {
    max-width: none;

    &:before {
      top: -2px;
      left: 304px;
    }
  }

  @media ${device.desktop} {
    font-size: 88px;

    &:before {
      width: 346px;
      height: 83px;

      top: -2px;
      left: 558px;

      background: linear-gradient(
        90deg,
        rgba(248, 155, 102, 0.2) 0%,
        rgba(253, 239, 94, 0) 95.83%
      );

      border-left: 4px solid #e46f47;
    }
  }
`;

export const OverlayBottom = styled.div`
  margin-top: 110px;
  padding-top: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid rgba(159, 158, 158, 0.24);
`;

export const TextBottom = styled.p`
  font-family: var(--font-PPFraktionMono);
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: 0.2px;

  white-space: pre;

  color: #9f9e9e;
`;

export const StyledLink = styled.a`
  margin-top: 35px;

  width: 100%;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
  text-align: center;

  color: #181819;

  background: #ffffff;

  border-radius: 6px;

  &:hover,
  &:focus {
    background: var(--btn-hover);
  }

  @media ${device.tablet} {
    margin-top: 0;

    width: 267px;
    height: 40px;
  }
`;
