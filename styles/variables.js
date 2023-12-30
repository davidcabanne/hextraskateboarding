// COLORS
//
export const mono_000 = "#000000";
export const mono_010 = "#FFFFFF";

export const headerHeight = "120px";

// MEDIA QUERIES
//
const deviceSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS_min: `(min-width: ${deviceSize.mobileS})`,
  mobileM_min: `(min-width: ${deviceSize.mobileM})`,
  mobileL_min: `(min-width: ${deviceSize.mobileL})`,
  tablet_min: `(min-width: ${deviceSize.tablet})`,
  laptop_min: `(min-width: ${deviceSize.laptop})`,
  laptopL_min: `(min-width: ${deviceSize.laptopL})`,
  desktop_min: `(min-width: ${deviceSize.desktop})`,
  desktopL_min: `(min-width: ${deviceSize.desktop})`,
  mobileS_max: `(max-width: ${deviceSize.mobileS})`,
  mobileM_max: `(max-width: ${deviceSize.mobileM})`,
  mobileL_max: `(max-width: ${deviceSize.mobileL})`,
  tablet_max: `(max-width: ${deviceSize.tablet})`,
  laptop_max: `(max-width: ${deviceSize.laptop})`,
  laptopL_max: `(max-width: ${deviceSize.laptopL})`,
  desktop_max: `(max-width: ${deviceSize.desktop})`,
  desktopL_max: `(max-width: ${deviceSize.desktop})`,
};

// SPACING
//
export const space_XS = "8px";
export const space_S = "16px";
export const space_M = "32px";
export const space_L = "40px";
export const space_XL = "64px";
export const space_XXL = "112px";
export const space_XXXL = "128px";

// ANIMATION STYLES
export const cubicBezier = "cubic-bezier(0.79, 0.14, 0.15, 0.86)";
export const animationCustomTiming = "400ms";
export const revealAnimation = `
opacity: 0.15;
  transform: translateY(32px);
  transition: ${animationCustomTiming} ${cubicBezier};
  transition-property: opacity, transform;

  &.active {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const rootMargin = "0px 0px -32px 0px";
export const threshold = 0;

// SHADOWS
//
export const cardShadowXSmall = `0 2px 5px -1px rgba(50, 50, 93, 0.25),
  0 1px 3px -1px rgba(0, 0, 0, 0.3)`;
export const cardShadowSmall = `0 6px 12px -2px rgba(50, 50, 93, 0.25),
  0 3px 7px -3px rgba(0, 0, 0, 0.3)`;
export const cardShadowMedium = `0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3)`;
export const cardShadowLarge = `0 30px 60px -12px rgba(50, 50, 93, 0.25),
  0 18px 36px -18px rgba(0, 0, 0, 0.3)`;
export const cardShadowLargeInset = `inset 0 30px 60px -12px rgba(50, 50, 93, 0.25),
  inset 0 18px 36px -18px rgba(0, 0, 0, 0.3)`;
export const cardShadowXLarge = `0 50px 100px -20px rgba(50, 50, 93, 0.25),
  0 30px 60px -30px rgba(0, 0, 0, 0.3)`;
