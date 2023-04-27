import React from "react";

import { Text } from "./styles";

export default function HeroText() {
  const text = "is loading...";

  const arrayText = text.split("");

  const elements = arrayText.map((charAt, index) => {
    return (
      <span key={index} style={{ "--i": index + 1 }}>
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
