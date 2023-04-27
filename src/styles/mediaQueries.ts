const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1440,
};

export const devices = {
  mobile: `(min-width: ${breakpoints.mobile}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
};
