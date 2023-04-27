export interface ITheme {
  colors: {
    text: string;
    bg: string;
    hover: string;
  };

  media: {
    desktop: string;
    tablet: string;
    mobile: string;
  };

  sizes: {
    header: { height: number };
  };
}
