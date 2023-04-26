import React from "react";
import Image from "next/image";

import { useToggle } from "@/hooks/useToogle";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import Burger from "@/components/Burger/Burger";
import Nav from "../Nav/Nav";

import { Container } from "./Header.styled";

export default function Header() {
  const matchesTablet = useMediaQuery("(min-width: 768.00px)");

  const [showMenu, setShowMenu] = useToggle(true);

  return (
    <Container>
      <Image src="/images/svg/logo.svg" alt="Logo" width="127" height="35" />
      {!matchesTablet && (
        <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
      )}
      {matchesTablet && <Nav />}
    </Container>
  );
}
