import React from "react";

declare module "react" {
  interface CSSProperties {
    "--i"?: string | number;
  }
}
