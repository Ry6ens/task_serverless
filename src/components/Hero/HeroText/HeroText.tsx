import React from "react";

import { Text } from "./HeroText.styled";

export default function HeroText() {
  const text = "is loading...";

  const arrayText = text.split("");

  const elements = arrayText.map((charAt, index) => {
    const className = `--i:${index + 1}`;

    return (
      <span key={className} style={{ "--i": index + 1 }}>
        {charAt}
      </span>
    );
  });

  return (
    <Text>
      {"// Serverless.Team"} {elements}
    </Text>
  );
}
