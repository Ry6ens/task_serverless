import styled from "styled-components";
import { devices } from "@/styles/mediaQueries";

export const Container = styled.section`
  padding: 0px 16px;

  @media ${devices.desktop} {
    padding: 0px 64px;
  }
`;

export const Text = styled.div`
  margin-top: 60px;
`;
