import React from "react";
import Link from "next/link";

import links from "@/database/navigation";

import { List, StyledLink } from "./Nav.styled";

export default function Nav() {
  const elements = links.map(({ id, route, title }) => (
    <li key={id}>
      <Link href={route} legacyBehavior>
        <StyledLink rel="nofollow" target="_blank">
          {title}
        </StyledLink>
      </Link>
    </li>
  ));

  return (
    <nav>
      <List>{elements}</List>
    </nav>
  );
}
