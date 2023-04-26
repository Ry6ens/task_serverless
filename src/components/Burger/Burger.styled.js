import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  &.is-active button span:first-child {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &.is-active button span:nth-child(even) {
    width: 0;
  }

  &.is-active button span:last-child {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &.is-active div {
    transform: translateX(0);
    transition: 0.5s;
  }
`;

export const Button = styled.button`
  position: relative;

  width: 25px;
  height: 16px;

  background-color: transparent;
  border-style: none;

  cursor: pointer;
`;

export const BurgerSpan_1 = styled.span`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
  border-radius: 5px;
  transform: translate(-50%, -9px);
  transition: transform 0.5s ease 0s, width 0.5s ease 0s;
`;

export const BurgerSpan_2 = styled.span`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  transition: transform 0.5s ease 0s, width 0.5s ease 0s;
`;

export const BurgerSpan_3 = styled.span`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
  border-radius: 5px;
  transform: translate(-50%, 6px);
  transition: transform 0.5s ease 0s, width 0.5s ease 0s;
`;

export const BurgerMenu = styled.div`
  position: fixed;
  top: 55px;
  left: 0px;

  height: calc(100% - 40px);
  width: 100vw;

  display: flex;
  flex-direction: column;
  gap: 60px;

  border-top: 1px solid #fff;

  background: var(--color-bg);

  overflow-y: auto;

  transform: translateX(-100%);
  transition: transform 0.5s ease 0s;

  z-index: 20;
`;
