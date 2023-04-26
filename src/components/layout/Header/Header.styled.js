import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const Container = styled.header`
  padding: 0px 16px;

  height: 66px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.desktop} {
    margin: 0px auto 40px;
    padding: 0px 64px;

    max-width: 1440px;
  }
`;
