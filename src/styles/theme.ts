import { DefaultTheme } from "styled-components";

import { ITheme } from "@/interfaces/styled";

export const baseTheme: ITheme = {
  colors: {
    text: "#fff",
    bg: "#181819",
    hover: "#ffd600",
  },

  media: {
    desktop: "(max-width: 1440px)",
    tablet: "(max-width: 768px)",
    mobile: "(max-width: 320px)",
  },

  sizes: {
    header: { height: 66 },
  },
};
