import React, { Dispatch, SetStateAction } from "react";

import Nav from "../layout/Nav/Nav";

import {
  Container,
  Button,
  BurgerSpan_1,
  BurgerSpan_2,
  BurgerSpan_3,
  BurgerMenu,
} from "./styles";

interface Props {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Burger({ showMenu, setShowMenu }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { currentTarget } = e;

    currentTarget.classList.toggle("is-active");
    document.body.classList.toggle("no-scroll");

    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <Container onClick={handleClick}>
      <Button>
        <BurgerSpan_1></BurgerSpan_1>
        <BurgerSpan_2></BurgerSpan_2>
        <BurgerSpan_3></BurgerSpan_3>
      </Button>
      <BurgerMenu>
        <Nav />
      </BurgerMenu>
    </Container>
  );
}
