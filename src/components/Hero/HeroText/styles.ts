import styled from "styled-components";

import { flip } from "@/styles/animation";

export const Text = styled.p`
  position: relative;

  margin-top: 80px;

  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.2px;

  white-space: pre;

  color: #9f9e9e;

  & span {
    position: relative;
    display: inline-block;
    animation: ${flip} 2s infinite;
    animation-delay: calc(0.2s * var(--i));
  }
`;
