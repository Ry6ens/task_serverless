import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const Container = styled.section`
  padding: 0px 16px;

  @media ${device.desktop} {
    padding: 0px 64px;
  }
`;

export const Text = styled.div`
  margin-top: 60px;
`;
