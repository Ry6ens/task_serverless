import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const List = styled.ul`
  padding: 20px 20px 0px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  font-size: 14px;
  letter-spacing: 0.2px;

  @media ${device.tablet} {
    padding: 0;
    flex-direction: row;
    gap: 56px;
  }
`;

export const StyledLink = styled.a`
  &:hover,
  &:focus {
    color: var(--btn-hover);
  }
`;
