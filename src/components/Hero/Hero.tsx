import React from "react";
import Link from "next/link";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import HeroText from "./HeroText/HeroText";

import {
  Container,
  TextBottom,
  Title,
  OverlayBottom,
  StyledLink,
} from "./styles";

export default function Hero() {
  const matchesTablet = useMediaQuery("(min-width: 768.00px)");

  return (
    <Container>
      <HeroText />
      {!matchesTablet && (
        <>
          <Title>
            We handle serverless infrastructure so you can focus on your
            business.
          </Title>
          <Link href="https://calendly.com/kozak_serverless" legacyBehavior>
            <StyledLink rel="nofollow" target="_blank">
              schedule a call
            </StyledLink>
          </Link>
        </>
      )}

      {matchesTablet && (
        <>
          <Title>
            We take care of serverless development so you can focus on your
            business
          </Title>
          <OverlayBottom>
            <TextBottom>
              {`Don't want to wait for our site launch? \nLet's talk about your idea right now.`}
            </TextBottom>
            <Link href="https://calendly.com/kozak_serverless" legacyBehavior>
              <StyledLink rel="nofollow" target="_blank">
                schedule a call
              </StyledLink>
            </Link>
          </OverlayBottom>
        </>
      )}
    </Container>
  );
}
